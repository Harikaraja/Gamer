import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditProfile from '../components/EditProfile'
import ProfileNav from '../components/ProfileNav'
import { gamerProfile } from '../redux/actions/gamerAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {

    const dispatch = useDispatch();
  const gaming = useSelector(state => state.gamerReducer);
  const profile = gaming.gamer;

  useEffect(() => {
    // Dispatch the gamerProfile action to fetch the profile data
    dispatch(gamerProfile(profile));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="card-body">
        <div className="row">
            {/* <ProfileNav /> */}
            <EditProfile />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
