# Klaviyo Setup Guide for Ultra Guide Landing Page

## Step 1: Create Klaviyo Account
1. Go to [klaviyo.com](https://klaviyo.com) and sign up
2. Complete the onboarding process
3. Connect your Shopify store

## Step 2: Create Email List
1. Navigate to "Lists & Segments" 
2. Click "Create List"
3. Name it "Ultra Guide Subscribers"
4. Save the List ID (you'll need this)

## Step 3: Get API Keys
1. Go to Account → Settings → API Keys
2. Copy your "Public API Key" (starts with pk_)
3. Copy your "Private API Key" (for backend use)

## Step 4: Update JavaScript Configuration
In `assets/ultra-guide.js`, update these lines:

```javascript
const CONFIG = {
  klaviyo: {
    apiKey: 'YOUR_KLAVIYO_PUBLIC_API_KEY', // Replace with your actual key
    listId: 'YOUR_KLAVIYO_LIST_ID' // Replace with your actual list ID
  }
};
```

## Step 5: Create Welcome Email Flow
1. Go to "Flows" → "Create Flow"
2. Choose "Welcome Series" template
3. Set trigger: "Someone subscribes to a list"
4. Select your "Ultra Guide Subscribers" list
5. Customize the welcome email with your guide download link

## Step 6: Upload Your Guide
1. Upload your PDF guide to Shopify Files
2. Get the secure download URL
3. Add this URL to your welcome email template

## Step 7: Test the Integration
1. Submit a test email through your form
2. Check that the subscriber appears in Klaviyo
3. Verify the welcome email is sent
4. Test the download link works

## Additional Klaviyo Features to Set Up

### Segmentation
- Create segments for different runner levels
- Set up behavioral triggers based on engagement

### Email Templates
- Design on-brand email templates
- Include your logo and brand colors

### Analytics
- Monitor conversion rates
- Track email performance
- Set up attribution reporting

## Troubleshooting

**Forms not submitting to Klaviyo:**
- Check API keys are correct
- Verify list ID is accurate
- Check browser console for errors

**Emails not sending:**
- Confirm welcome flow is active
- Check subscriber status in Klaviyo
- Verify SMTP settings

**GDPR Compliance:**
- Enable double opt-in if required
- Add privacy policy links
- Set up proper consent tracking