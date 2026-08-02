import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-white">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. Let's get you back to
        the portfolio.
      </p>
      <Button
        size="lg"
        className="gradient-hero text-white"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
