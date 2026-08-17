import React from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

export async function jobLoader({ params }) {
  try {
    const response = await fetch(
      `http://localhost:8000/jobs/${params.id}`
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

const JobPage = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `http://localhost:8000/jobs/${job.id}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      alert("Failed to delete job");
      return;
    }

    navigate("/jobs");
  };

  if (!job) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Job not found</h1>
      </div>
    );
  }

  return (
    <section className="bg-indigo-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-600 hover:text-indigo-800 mb-6"
          >
            ← Back
          </button>

          {/* Job Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {job.title}
          </h1>

          {/* Company */}
          <p className="text-xl text-gray-600 mb-2">
            {typeof job.company === "object" ? job.company.name : job.company}
          </p>

          {/* Location */}
          <p className="text-gray-500 mb-6">📍 {job.location}</p>

          {/* Job Type */}
          <div className="mb-6">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              {job.type}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Job Description</h2>
            <p className="text-gray-600 leading-7">{job.description}</p>
          </div>

          {/* Salary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Salary</h2>
            <p className="text-gray-600">{job.salary}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              to={`/edit-job/${job.id}`}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-bold"
            >
              Edit Job
            </Link>

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold"
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPage;