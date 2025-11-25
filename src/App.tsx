// import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import jobLoader from './loaders/jobLoader';
import NotFoundPage from './pages/NotFoundPage';
import EditJobPage from './pages/EditJobPage';


type JobCompany = {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
};

type JobFormData = {
  id?: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: JobCompany;
};

const App = () => {
  // Add new Job
  const addJob = async(newJob: JobFormData) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id: string) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // Update Job
  const updateJob = async (job: JobFormData & { id: string }) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/add-job/' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router}/>
}

export default App
