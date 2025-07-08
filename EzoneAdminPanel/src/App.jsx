import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import RootLayout from "./components/RootLayout";
import PrivateRoutes from "./components/PrivateRoutes";
import AddCars from "./pages/AddCars";
import GetCars from "./pages/GetCars";
import ContactDetails from "./pages/ContactDetails"
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

import useAutoLogout from "./hooks/useAutoLogout";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

const AppRoutes = () => {
  useAutoLogout(); 

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<RootLayout />}>
          <Route path="add-cars" element={<AddCars />} />
          <Route path="edit-car/:id" element={<AddCars />} />
          <Route path="get-cars" element={<GetCars />} />
          <Route path="contact-details" element={<ContactDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
