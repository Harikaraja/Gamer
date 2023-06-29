import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { gamerProfile } from '../redux/actions/gamerAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const EditProfile = () => {
  const gaming = useSelector(state => state.gamerReducer);
  const profile = gaming.gamer;
  const fetchData = useFetch();
  const dispatch = useDispatch();

  const initialFormData = {
    userName: profile.userName,
    email: profile.email,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = e => {
    setSelectedImage(e.target.files[0]);
  };

  useEffect(() => {
    setFormData({
      userName: profile.userName,
      email: profile.email
    });
  }, [profile, setFormData]);

  const handleUpdate = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      url: `/profile/update`,
      method: "put",
      data: formData,
      headers: { Authorization: token },
      params: { id: profile._id }
    };
    await fetchData(config)
      .then(data => {
        dispatch(gamerProfile(data.user));
      })
      .catch(error => {
        console.error('Error fetching Gamer data:', error);
      });
  };

  return (
    <div className="col-6 shadow p-3 mb-5 bg-black rounded" style={{ width: '55rem', margin: '2rem auto' }}>
      <center><h5 className="card-title text-muted">Gamer Profile</h5></center>
      <div className="form-group text-center">
        <div className="profile-image-container d-inline-block position-relative">
          {selectedImage ? (
            <img src={URL.createObjectURL(selectedImage)} alt="Profile" className="profile-image rounded-circle" style={{ width: '100px', height: '100px', marginBottom: '3rem', marginTop: '2rem' }} />
          ) : (
            <img src="https://distil.in/demo/snappcoins/img/avatar-user.jpg" alt="Dummy Profile" className="profile-image rounded-circle" style={{ width: '100px', height: '100px', marginBottom: '3rem', marginTop: '2rem' }} />
          )}
          <label htmlFor="image" className="camera-icon" style={{ position: 'absolute', bottom: '10%', right: '-5%', transform: 'translate(-50%, -50%)', color: '#ff0071', background: '#ffffff', borderRadius: '100%', padding: '8px' }}>
            <FontAwesomeIcon icon={faCamera} />
          </label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </div>
      </div>
      <div className="form-group text-center" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="name" style={{ textAlign: 'left', marginLeft: '-13rem', marginBottom: '1rem' }}>User Name</label><br />
        <div className="d-inline-block">
          <input type="text" name="userName" id="fname" className="form-control" value={formData.userName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group text-center" style={{ marginBottom: '3rem' }}>
        <label htmlFor="email" style={{ textAlign: 'left', marginLeft: '-15rem', marginBottom: '1rem' }}>Email</label><br />
        <div className="d-inline-block">
          <input type="text" name="email" id="fname" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <center>
        <button type="button" className="content-h2 text-white btn-lg" onClick={handleUpdate} style={{ margin: '0 10px' }}>Save Changes</button>
      </center>
    </div>
  );
};

export default EditProfile;
