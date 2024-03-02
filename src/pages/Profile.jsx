import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TopBar } from "../components";
// import { posts } from "../assets/data";

const Profile = () => {

  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  // const [userInfo, setUserInfo] = useState(user);
  // const [loading, setLoading] = useState(false);
  // const handleDelete = () => {};
  // const handleLikePost = () => {};

  return (
    <>
      {/* home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden */}
      <div className='home w-full px-0 pb-20  bg-bgColor  h-screen overflow-hidden lg:px-10  2xl:px-40  lg:rounded-lg'>
        <TopBar />
      </div>
    </>
  );
};

export default Profile;
