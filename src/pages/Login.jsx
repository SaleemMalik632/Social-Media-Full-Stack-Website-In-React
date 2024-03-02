import React, { useState, useEffect } from 'react';
import LoginPagePic from '../images/LoginPage.jpg';
import Logo from '../images/logo.png';
import LogoMobile from '../images/logo-removebg-preview.jpg';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [secondWireframe, setSecondWireframe] = useState('1/2');
  const [mobileLogo, setMobileLogo] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const googleAuth = () => {
    try {
      alert('Google Auth');
      window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
      );
      // Redirect to the home page after successful authentication
    } catch (error) {
      console.error('Error occurred during Google authentication:', error);
      // Handle the error as needed, such as displaying an error message to the user
    }
  };
  const showToast = () => {
    toast.warning("invalid user"
    );
  };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data, { withCredentials: true });
      console.log(response);
      if (response.ok) {
        moveToHome();
        reset();
      } else {
        showToast();
      }
    } catch (error) {
      showToast();
      console.error('Error occurred during login:', error);

    }
  };
  const moveToHome = () => {
    window.open('/', "_self");
  }

  const handleResize = () => {
    const newShowBackground = window.innerWidth > 950;
    setShowBackground(newShowBackground);
    setScreenWidth(window.innerWidth);
    const newSecondWireframe = newShowBackground ? '1/2' : 'full';
    setSecondWireframe(newSecondWireframe);
    setMobileLogo(!newShowBackground);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex sm:flex-row h-screen">
      {showBackground && (
        <div className="hidden md:block w-2/3 relative h-screen bg-cover" style={{ backgroundImage: `url(${LoginPagePic})`, backgroundPosition: '-70px center' }}>
          <div className="absolute top-6 left-6">
            <img src={Logo} alt="logo" className="w-22 h-20" />
          </div>
          <div className="absolute bottom-20 left-6 text-white text-2xl font-bold">Connect with friends and the world.</div>
          <div className="absolute bottom-6 left-6 text-white text-xs">
            <a href="https://unsplash.com/photos/four-women-holding-drinks-while-laughing-together-during-daytime-nYgy58eb9aw" target='_blank'>
              Photo: Credits to the photo owner
            </a>
          </div>
        </div>
      )}
      {mobileLogo && (
        <div className="absolute left-10 mt-10">
          <img src={LogoMobile} alt="logo" className="w-40 ml-20 " />
        </div>
      )}
      {/* w-${secondWireframe} ${secondWireframe === 'full' ? 'flex justify-center' : 'm-0'} */}
      <div className={`w-${secondWireframe} ${secondWireframe === 'full' ? 'flex justify-center' : 'm-0'}`}>
        <div className={`w-2/3  border  ${secondWireframe === 'full' ? '' : 'mt-80 ml-20'}`}>
          <div className={`text-2xl font-bold mb-9 ${secondWireframe === 'full' ? 'mt-[180px]' : 'mt-[-180px]'} `}>Login to Socialo</div>
          <form className="sm:w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="username address"
                {...register('username', { required: 'username is required' })} // Register the input field with the username
                className="border border-gray-600 focus:border-blue-600 focus:outline-none px-4 py-2 rounded-full mb-7 w-full transition-all duration-300 border-2"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required', pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/, message: 'Password must contain at least 8 characters with at least one uppercase letter, one special character, and one number'
                    }, minLength: { value: 8, message: 'Password must have at least 8 characters' }
                  })}
                  className="border border-gray-600 focus:border-blue-600 focus:outline-none px-4 py-2 rounded-full mb-7 w-full transition-all duration-300 border-2"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-0 right-0 mt-3 mr-4 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                Login
              </button>
            </div>
          </form>
          <div>
            <div className="flex items-center justify-between mb-9">
              <div className="w-2/3 h-0.5 bg-gray-300"></div>
              <div className="text-gray-500 italic">OR</div>
              <div className="w-2/3 h-0.5 bg-gray-300"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <button style={{ backgroundColor: '#3b5998' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center">
                <FaFacebook className="mr-2" /> Facebook
              </button>
              <button onClick={googleAuth} style={{ backgroundColor: '#4285f4' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-1/2 sm:mr-2 flex items-center justify-center">
                <FaGoogle className="mr-2" /> Google
              </button>
            </div>
            <div className="text-center mt-5">
              <a href="/register" className="text-blue-600 hover:underline">Don't have Account</a>
            </div>
            <div className="absolute text-center text-blue-900 text-xs ml-40 mt-20">
              © Copyright 2024 Socialo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
