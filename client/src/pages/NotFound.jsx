// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center p-6 bg-card rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
