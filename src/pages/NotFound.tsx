import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-card rounded-2xl px-12 py-14 text-center">
        <h1 className="text-4xl font-bold mb-4 text-neon-purple">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-secondary hover:text-neon-cyan underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
