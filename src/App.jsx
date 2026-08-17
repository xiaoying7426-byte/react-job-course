import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import EditJobPage, {
  editJobLoader,
} from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />

      <Route path="jobs" element={<JobsPage />} />

      {/* ဒီနေရာမှာ loader={jobLoader} ထည့်ပေးလိုက်ပါပြီ */}
      <Route
        path="jobs/:id"
        element={<JobPage />}
        loader={jobLoader}
      />

      <Route path="add-job" element={<AddJobPage />} />

      <Route
        path="edit-job/:id"
        element={<EditJobPage />}
        loader={editJobLoader}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;