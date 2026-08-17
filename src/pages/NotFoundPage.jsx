import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center">
    <h1 className="text-6xl font-bold">404</h1>
    <p className="text-xl my-4">Page not found</p>
    <Link to="/" className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
      Go Home
    </Link>
  </section>
);

export default NotFoundPage;