import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmissionSuccess from './components/SubmissionSuccess.jsx';
import Waitlist from './sections/Waitlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/waitlist",
    element: <Waitlist />
  },
  {
    path: "/submission-success",
    element: <SubmissionSuccess />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
