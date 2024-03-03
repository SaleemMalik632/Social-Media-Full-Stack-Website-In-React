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
import Banner from "../images/placehorder.PNG";


const ProfileCard = ({ user }) => {
    const { user: data, edit } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = React.useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div>

            <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 '>
                {/* here is the first black of the page  */}
                <div className='w-full flex border-b  border-[#66666645] '>
                    {/* now i show the user profile in the center and with the banner backgroud images  */}
                    <div className="relative">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="h-2/3 w-full" />
                        ) : (
                            <img src={Banner} alt="Loading" className="h-2/3 w-full" />
                        )}
                        <label htmlFor="fileInput">
                            <LiaEditSolid style={{ color: '#2376f2' }} className="text-3xl text-ascent-1 absolute top-0 right-0 cursor-pointer" />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
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
