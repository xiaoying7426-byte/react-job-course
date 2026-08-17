import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


export async function editJobLoader({ params }) {
  const response = await fetch(
    `http://localhost:8000/jobs/${params.id}`
  );

  if (!response.ok) {
    throw new Response("Job not found", {
      status: 404,
    });
  }

  return response.json();
}

const EditJobPage = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const [form, setForm] = useState(job);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:8000/jobs/${job.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      alert("Failed to update job");
      return;
    }

    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="bg-indigo-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-8">

          <h1 className="text-3xl font-bold mb-6">
            Edit Job
          </h1>

          <form onSubmit={handleSubmit}>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Job Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={form.company || ""}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={form.location || ""}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Job Type
              </label>

              <select
                name="type"
                value={form.type || ""}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2"
              >
                <option value="">Select Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={form.description || ""}
                onChange={handleChange}
                rows="5"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div className="mb-5">
              <label className="block font-bold mb-2">
                Salary
              </label>

              <input
                type="text"
                name="salary"
                value={form.salary || ""}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md"
            >
              Update Job
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJobPage;