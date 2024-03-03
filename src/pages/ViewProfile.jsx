// when the user first time login then this page is open to the  user to fill the profile details
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FriendsCard, Loading, PostCard, ProfileCard, TopBar,ProfileBanner } from "../components";
import { posts, friends } from "../assets/data";

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [userInfo, setUserInfo] = useState(user);
    const [loading, setLoading] = useState(false);
    const handleDelete = () => { };
    const handleLikePost = () => { };

    return (
        <>
            <div className='home w-full px-0 pb-20  bg-bgColor  h-screen overflow-hidden lg:px-10  2xl:px-40  lg:rounded-lg'>
                <TopBar />
                <div className='w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full border'>
                   
                    {/* LEFT when the screen become small  here i show the frinde request to all the user s */}
                    <div className='hidden lg:flex'>
                        <FriendsCard friends={friends} />
                    </div>
                    
                    
                    {/* CENTER */}
                    <div className=' flex-1 h-full bg-orimary px-4 flex flex-col gap-6 overflow-y-auto border'>

                        < ProfileBanner /> 

                        {
                            loading ? (
                                <Loading />
                            ) : posts?.length > 0 ? (
                                posts?.map((post) => (
                                    <PostCard
                                        post={post}
                                        key={post?._id}
                                        user={user}
                                        deletePost={handleDelete}
                                        likePost={handleLikePost}
                                    />
                                ))
                            ) : (
                                <div className='flex w-full h-full items-center justify-center '>
                                    <p className='text-lg text-ascent-2'>No Post Available</p>
                                </div>
                            )
                        }
                    </div>

                    {/* RIGHT */}
                    <div className='hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto border'>
                        <FriendsCard friends={friends} />
                    </div>




                </div>


            </div>
        </>
    );
};

export default Profile;
