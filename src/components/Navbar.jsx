import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <Link to="/" className="flex items-center">
            <span className="text-white text-2xl font-bold">
              React Jobs
            </span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
            >
              Home
            </Link>

            <Link
              to="/jobs"
              className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
            >
              Jobs
            </Link>

            <Link
              to="/add-job"
              className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
            >
              Add Job
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;