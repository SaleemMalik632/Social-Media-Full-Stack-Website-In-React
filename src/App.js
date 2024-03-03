import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Profile";
import LoginNewUser from "./pages/Login";
import Signup from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { FriendsCard, Loading, PostCard, ProfileCard, TopBar, } from "./components";
import Userprofile from "./pages/ViewProfile";



function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL);
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data);
      setUser(data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const { theme } = useSelector((state) => state.theme);
  return (
    <div data-theme={theme} className='w-full min-h-[100vh]'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginNewUser />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Signup />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="*" element={<> page is not found </>} />
      </Routes>
    </div>
  );
}

export default App;
