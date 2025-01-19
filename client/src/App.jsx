import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import ApplicationForm from "./components/ApplicationForm";
import Interviews from "./pages/Interviews";
import Settings from "./pages/Settings";
import Applications from "./pages/Applications";
import Resume from "./pages/Resume";
import ViewResume from "./pages/ViewResume";
import UpdateApplicationForm from "./components/UpdateApplicationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/job/:jobId"
            element={<UpdateApplicationForm />}
          />
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/dashboard/addApplication"
            element={<ApplicationForm />}
          ></Route>
          <Route
            path="/dashboard/applications"
            element={<Applications />}
          ></Route>
          <Route path="/dashboard/interviews" element={<Interviews />}></Route>
          <Route path="/dashboard/settings" element={<Settings />}></Route>
          <Route path="/dashboard/addResume" element={<Resume />} />
          <Route path="/dashboard/viewResume" element={<ViewResume />} />
        </Route>

        {/* <ApplicationForm /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
