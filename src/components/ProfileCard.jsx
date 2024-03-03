import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import { BsBriefcase, BsFacebook, BsInstagram, BsPersonFillAdd } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";
import { NoProfile } from "../assets";
import { useredit } from "../redux/userslice";


const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 '>
        <div className='w-full flex flex-col border-b  border-[#66666645]'>
          <div className="flex justify-end   mx-4">
            {user?._id === data?._id ? (
              <LiaEditSolid
                size={25} 
                className='text-blue cursor-pointer'
                onClick={() => dispatch(useredit(true))}
              />
            ) : (
              <button
                className='bg-[#0444a430] text-sm text-white p-1 rounded'
                onClick={() => { }}
              >
                <BsPersonFillAdd size={20} className='text-[#0f52b6]' />
              </button>
            )}
          </div>
          <div className="flex items-center justify-center mb-2">
            <Link to={"/profile/" + user?._id}> 
              <img
                src={user?.profileUrl ?? NoProfile}
                alt={user?.email}
                className="w-14 h-14 object-cover rounded-full"
              />
              <span className="text-ascent-2">username</span>
            </Link>
          </div>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-ascent-2'>Saleem Malik </span>
            <span className='text-ascent-1 text-base'>
              No profashion
            </span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <div className='flex gap-2 items-center text-ascent-2'>
            <CiLocationOn className='text-xl text-ascent-1' />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          <div className='flex gap-2 items-center text-ascent-2'>
            <BsBriefcase className=' text-lg text-ascent-1' />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <p className='text-xl text-ascent-1 font-semibold'>
            {user?.friends?.length} Friends
          </p>

          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Who viewed your profile</span>
            <span className='text-ascent-1 text-lg'>{user?.views?.length}</span>
          </div>

          <span className='text-base text-blue'>
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>

          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Joined</span>
            <span className='text-ascent-1 text-base'>
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 py-4 pb-6'>
          <p className='text-ascent-1 text-lg font-semibold'>Social Profile</p>

          <div className='flex gap-2 items-center text-ascent-2'>
            <BsInstagram className=' text-xl text-ascent-1' />
            <span>Instagram</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <FaTwitterSquare className=' text-xl text-ascent-1' />
            <span>Twitter</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <BsFacebook className=' text-xl text-ascent-1' />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
