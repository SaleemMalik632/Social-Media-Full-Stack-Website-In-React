import React from 'react';
import LoginPagePic from '../images/LoginPage.jpg'; // Assuming the image is located in the public folder
import Logo from '../images/logo.png'; // Assuming the image is located in the public folder
import LogoMobile from '../images/logo-removebg-preview.jpg'; // Assuming the image is located in the public folder
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showBackground, setShowBackground] = React.useState(true);
  const [secondWireframe, setSecondWireframe] = React.useState('1/2'); // Default width
  const [MobbileLogo, SetmobbileLogo] = React.useState(false); // Default logo

  const onSubmit = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth > 800); // Change 768 to your desired breakpoint
      setSecondWireframe(window.innerWidth > 800 ? '1/2' : 'full'); // Change the condition and values as needed
      SetmobbileLogo(window.innerWidth > 800 ? false : true);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {showBackground && (
        <div className="relative w-2/3 h-screen bg-cover" style={{ backgroundImage: `url(${LoginPagePic})`, backgroundPosition: '-70px center' }}>
          {/* logo of the application */}
          <div className="absolute top-6 left-6">
            <img src={Logo} alt="logo" className="w-22 h-20" />
          </div>
          {/* Description */}
          <div className="absolute bottom-20 left-6 text-white text-2xl font-bold">Connect with friends and the world.</div>
          {/* link of the photo credit */}
          <div className="absolute bottom-6 left-6 text-white text-xs">
            <a href="https://unsplash.com/photos/four-women-holding-drinks-while-laughing-together-during-daytime-nYgy58eb9aw" target='_blank'>
              Photo: Credits to the photo owner
            </a>
          </div>
        </div>
      )}
      {/* show the logo in the center when the showBackground is true  */}
      {
        MobbileLogo && (
          <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20">
            <img src={LogoMobile} alt="logo" className="w-40" />
          </div>
        )
      }




      <div className={`w-${secondWireframe} flex items-center justify-center ${secondWireframe === 'full' ? 'm-0' : 'm-10'}`}>
        <div>
          <div className="text-2xl font-bold mb-9 mt-[-120px]">Create your account</div>
          <form className="max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                {...register('username')} // Register the input field
                className="border border-gray-600 focus:border-blue-600 focus:outline-none px-4 py-2 rounded-full mb-7 w-full transition-all duration-300 border-2"
              />
              <input
                type="text"
                placeholder="Email address"
                {...register('email')} // Register the input field
                className="border border-gray-600 focus:border-blue-600 focus:outline-none px-4 py-2 rounded-full mb-7 w-full transition-all duration-300 border-2"
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password')}
                  className="border border-gray-600 focus:border-blue-600 focus:outline-none px-4 py-2 rounded-full mb-7 w-full transition-all duration-300 border-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-0 right-0 mt-3 mr-4 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                Register
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mb-9">
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
            <div className="text-gray-500 italic  "> OR </div>
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <button style={{ backgroundColor: '#3b5998' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  w-1/2 mr-2 flex items-center justify-center">
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button style={{ backgroundColor: '#4285f4' }} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  w-1/2 mr-2 flex items-center justify-center">
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>
          <div className="text-center mt-5">
            <a href="/#" className="text-blue-600 hover:underline">Already have an account?</a>
          </div>
          <div style={{ marginLeft: '130px', marginTop: '50px' }} className="absolute  text-center text-blue-900 text-xs">
            © Copyright 2024 Socialo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;