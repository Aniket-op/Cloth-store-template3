import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center p-12 bg-luxury-light rounded-[48px] border border-black/5 shadow-xl max-w-lg mx-auto">
        <h1 className="mb-6 text-6xl font-bold text-luxury-black tracking-tighter">404</h1>
        <p className="mb-8 text-2xl font-semibold text-luxury-black">We can't seem to find the page you're looking for.</p>
        <p className="mb-10 text-luxury-gray">The collection or item might have been moved or is no longer available.</p>
        <a href="/" className="btn-accent px-10">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
