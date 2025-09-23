import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-subtle-gradient pattern-bg">
      <div className="text-center max-w-md mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-elegant">
        <h1 className="mb-4 text-6xl font-bold text-harrier-dark-green font-saira">404</h1>
        <p className="mb-6 text-xl text-harrier-dark-green/80 font-saira">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-harrier-medium-green text-white px-6 py-3 rounded-lg font-bold hover:bg-harrier-dark-green transition-colors font-saira"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
