import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <nav className="flex items-center gap-2 py-6 text-sm text-gray-500 border-b border-gray-200">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <span>/</span>
        <span className="text-black">404 Error</span>
      </nav>

      <div className="flex flex-col items-center text-center py-24">
        <h1 className="text-6xl md:text-8xl font-medium mb-6">404 Not Found</h1>
        <p className="text-gray-500 mb-10">
          Your visited page not found. You may go home page.
        </p>
        <Link
          to="/"
          className="bg-secondary text-white text-sm font-medium px-10 py-4 rounded-sm"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
