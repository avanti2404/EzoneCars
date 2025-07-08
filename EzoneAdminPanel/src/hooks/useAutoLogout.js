import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const useAutoLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        handleLogout();
      } else {
        const timeout = (decoded.exp - currentTime) * 1000;
        const logoutTimer = setTimeout(() => {
          handleLogout();
        }, timeout);

        return () => clearTimeout(logoutTimer);
      }
    }

    function handleLogout() {
      localStorage.removeItem("adminToken");
      navigate("/"); // redirect to login
    }
  }, [navigate]); // ✅ include navigate in deps
};

export default useAutoLogout;
