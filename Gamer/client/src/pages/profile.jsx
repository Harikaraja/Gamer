import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EditProfile from '../components/EditProfile';
//import ProfileNav from '../components/ProfileNav';
import { gamerProfile } from '../redux/actions/gamerAction';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const gaming = useSelector(state => state.gamerReducer);
  const profile = gaming.gamer;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Dispatch the gamerProfile action to fetch the profile data
    dispatch(gamerProfile(profile));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode}
          onDarkModeToggle={handleDarkModeToggle}/>
      <div className="container">
        <div className="card-body">
          <div className="row">
            {/* <ProfileNav /> */}
            <EditProfile />
          </div>
        </div>
      </div>
      <Footer />
      <div className="dark-mode-toggle">
        <button onClick={handleDarkModeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
};

export default Profile;
