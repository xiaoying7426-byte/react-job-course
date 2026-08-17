import React from "react";
import { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetch("http://localhost:8000/jobs");
      const data = await res.json();
      setJobs(isHome ? data.slice(0, 3) : data);
      setLoading(false);
    };

    loadJobs();
  }, [isHome]);

  if (loading) return <p className="text-center py-10">Loading jobs...</p>;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "All Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;