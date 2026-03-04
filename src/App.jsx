import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import { Toaster } from "react-hot-toast";
import NotFound from './pages/NotFound';
import DoctorDetail from './components/DoctorDetail';
import MyAppointments from './components/MyAppointments';
import About from './pages/About';
import AllDoctors from './pages/AllDoctors';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/' element={<HomePage />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/allDoctors" element={<AllDoctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myprofile/:id" element={<MyProfile />} />
          <Route path="/myAppointments" element={<MyAppointments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
