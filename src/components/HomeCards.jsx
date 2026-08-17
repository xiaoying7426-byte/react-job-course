import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => (
  <section className="py-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">Browse jobs and find your next opportunity.</p>
          <Link to="/jobs" className="inline-block bg-black text-white rounded-lg px-4 py-2">
            Browse Jobs
          </Link>
        </Card>

        <Card className="bg-indigo-100">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">List a job and find the right developer.</p>
          <Link to="/add-job" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2">
            Add Job
          </Link>
        </Card>
      </div>
    </div>
  </section>
);

export default HomeCards;