import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => (
  <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-5">
      <p className="text-gray-600 my-2">{job.type}</p>
      <h3 className="text-xl font-bold mb-4">{job.title}</h3>

      <p className="mb-5 text-gray-700">{job.description}</p>

      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
      <div className="border border-gray-100 mb-5" />

      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="text-orange-700 flex items-center gap-2">
          <FaMapMarker />
          {job.location}
        </div>

        <Link
          to={`/jobs/${job.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
);

export default JobListing;