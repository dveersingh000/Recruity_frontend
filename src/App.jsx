import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddJob, EditJob, JobList, Register, Login, JobDetail, NotFound } from '../routes';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/editjob" element={<EditJob />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/list" element={<JobList />} >
          <Route index element={<JobList />} />
          <Route path=":id" element={<JobDetail />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}