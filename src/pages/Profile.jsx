import React from 'react'

const Profile = () => {
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button> {/* Logout button */}
      profile
    </div>
  )
}

export default Profile
