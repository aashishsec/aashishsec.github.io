
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Auto redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl font-mono text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist. This is a single-page portfolio.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Redirecting to home in 3 seconds...
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Go Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
