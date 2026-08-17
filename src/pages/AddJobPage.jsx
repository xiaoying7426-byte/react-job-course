import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddJobPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    type: "Full-Time",
    location: "",
    description: "",
    salary: "",
    company: { name: "", description: "", contactEmail: "", contactPhone: "" }
  });

  const change = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("company.")) {
      setForm({ ...form, company: { ...form.company, [name.split(".")[1]]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: Date.now().toString() })
    });
    navigate("/jobs");
  };

  return <JobForm title="Add Job" form={form} onChange={change} onSubmit={submit} />;
};

const JobForm = ({ title, form, onChange, onSubmit }) => (
  <section className="bg-blue-50 px-4 py-10 min-h-[70vh]">
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {[
        ["title", "Job Title"], ["location", "Location"], ["salary", "Salary"]
      ].map(([name, label]) => (
        <label key={name} className="block mb-4">
          <span className="font-semibold">{label}</span>
          <input required name={name} value={form[name]} onChange={onChange}
            className="w-full border rounded p-2 mt-1" />
        </label>
      ))}

      <label className="block mb-4">
        <span className="font-semibold">Type</span>
        <select name="type" value={form.type} onChange={onChange} className="w-full border rounded p-2 mt-1">
          <option>Full-Time</option><option>Part-Time</option><option>Remote</option>
        </select>
      </label>

      <label className="block mb-4">
        <span className="font-semibold">Description</span>
        <textarea required name="description" value={form.description} onChange={onChange}
          className="w-full border rounded p-2 mt-1" rows="5" />
      </label>

      <h2 className="text-xl font-bold mb-3">Company</h2>
      {[
        ["company.name", "Company Name"], ["company.contactEmail", "Contact Email"],
        ["company.contactPhone", "Contact Phone"]
      ].map(([name, label]) => (
        <label key={name} className="block mb-4">
          <span className="font-semibold">{label}</span>
          <input name={name} value={name.split(".").reduce((o, k) => o[k], form)}
            onChange={onChange} className="w-full border rounded p-2 mt-1" />
        </label>
      ))}

      <label className="block mb-4">
        <span className="font-semibold">Company Description</span>
        <textarea name="company.description" value={form.company.description} onChange={onChange}
          className="w-full border rounded p-2 mt-1" rows="3" />
      </label>

      <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">Save Job</button>
    </form>
  </section>
);

export default AddJobPage;