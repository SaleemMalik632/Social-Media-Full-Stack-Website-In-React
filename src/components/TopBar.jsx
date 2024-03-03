import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SetTheme } from "../redux/theam";
import { userlogout } from "../redux/userslice";
import Logo from "../images/logo-removebg-preview.jpg";
import axios from "axios";

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue)); 
  };

  const HandelLogut = async () => {
    // const url = `${process.env.REACT_APP_API_URL}/auth/logout`;
    // await axios.get(url, { withCredentials: true });
    dispatch(userlogout());
    alert('logout');
    // window.location.href = '/login';
  }

  const handleSearch = async (data) => {
    alert(data.search); // Accessing the value of the "search" field
    console.log(data.search); // Accessing the value of the "search" field
  };

  return (
    <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary'> {/* bg-[#f5f5f5] */}
      <Link to='/' className='flex gap-2 items-center'>
        <img src={Logo} alt='logo' className='w-21 h-10 ' />
      </Link>
      <form
        className='hidden md:flex items-center justify-center'
        onSubmit={handleSubmit(handleSearch)} 
      > 
        <input
          type='text'
          placeholder='Search...'
          className='bg-secondary rounded-l-full border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] w-[18rem] lg:w-[38rem]'
          {...register("search")}
        />
        <button type='submit' className='bg-[#0444a4] text-white px-6 py-2.5  rounded-r-full'>
          Search
        </button>
      </form>
      {/* ICONS */}
      <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
        <button onClick={() => handleTheme()}>
          {theme === "light" ? <BsMoon /> : <BsSunFill />}
        </button>
        <div className='hidden lg:flex cursor-pointer '>
          <IoMdNotificationsOutline onClick={()=>{alert('Notification')}} />
        </div>
        <div>
          <button onClick={HandelLogut} className='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full'>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
