/* eslint-disable react/no-unescaped-entities */
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          404
        </h1>
        <p className="text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
