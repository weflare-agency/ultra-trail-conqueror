import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SubscribeRequest {
  email: string;
  firstName: string;
  runnerLevel?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const klaviyoApiKey = Deno.env.get('KLAVIYO_PRIVATE_API_KEY');
    const klaviyoListId = Deno.env.get('KLAVIYO_LIST_ID');

    if (!klaviyoApiKey || !klaviyoListId) {
      console.error('Missing Klaviyo configuration:', { 
        hasApiKey: !!klaviyoApiKey, 
        hasListId: !!klaviyoListId 
      });
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body: SubscribeRequest = await req.json();
    console.log('Klaviyo subscription request:', { 
      email: body.email, 
      firstName: body.firstName, 
      runnerLevel: body.runnerLevel,
      timestamp: new Date().toISOString()
    });

    // Validate input
    if (!body.email || !body.firstName) {
      return new Response(JSON.stringify({ error: 'Email and full name are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Prepare Klaviyo API request
    const klaviyoData = {
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          profiles: {
            data: [
              {
                type: "profile",
                attributes: {
                  email: body.email.toLowerCase().trim(),
                  first_name: body.firstName.trim(),
                  properties: {
                    runner_level: body.runnerLevel || 'not_specified',
                    subscription_source: 'ultra_guide_landing_page',
                    subscribed_at: new Date().toISOString()
                  }
                },
                relationships: {
                  list: {
                    data: {
                      type: "list",
                      id: klaviyoListId
                    }
                  }
                }
              }
            ]
          }
        }
      }
    };

    console.log('Calling Klaviyo API with list ID:', klaviyoListId);

    // Call Klaviyo API
    const klaviyoResponse = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify(klaviyoData)
    });

    const responseText = await klaviyoResponse.text();
    console.log('Klaviyo API response:', {
      status: klaviyoResponse.status,
      statusText: klaviyoResponse.statusText,
      response: responseText
    });

    if (!klaviyoResponse.ok) {
      console.error('Klaviyo API error:', {
        status: klaviyoResponse.status,
        response: responseText
      });
      
      let errorMessage = 'Failed to subscribe to newsletter';
      if (klaviyoResponse.status === 400) {
        errorMessage = 'Invalid subscription data';
      } else if (klaviyoResponse.status === 401) {
        errorMessage = 'Authentication error';
      } else if (klaviyoResponse.status === 429) {
        errorMessage = 'Too many requests, please try again later';
      }

      return new Response(JSON.stringify({ 
        error: errorMessage,
        details: responseText 
      }), {
        status: klaviyoResponse.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const klaviyoResult = JSON.parse(responseText);
    console.log('Klaviyo subscription successful:', {
      email: body.email,
      firstName: body.firstName,
      jobId: klaviyoResult.data?.id
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Successfully subscribed ${body.firstName} to the ultra guide newsletter!`,
      jobId: klaviyoResult.data?.id
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in klaviyo-subscribe function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});