import Link from 'next/link';
import React from 'react';

const NOtFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50 dark:bg-gray-900">
      
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
        404
      </h1>

      <h2 className="mt-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
        Page Not Found
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
    );
};

export default NOtFoundPage;