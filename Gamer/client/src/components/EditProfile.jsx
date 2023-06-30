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

   
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");


  useEffect(() => {
    if (profile) {
      setImageSrc(
        profile.image
          ? `${process.env.REACT_APP_URL}/api/profile/img/${profile.image}`
          : "https://distil.in/demo/snappcoins/img/avatar-user.jpg"
      );
    }
  }, [profile]);
  


  console.log("profile: ", profile)

  const initialFormData = {
    userName: profile ? profile.userName : '',
    email: profile ? profile.email : '',
    image: profile ? profile.image : '',
  };

  console.log("initialfdata: ", initialFormData)

  const [formData, setFormData] = useState(initialFormData);

  console.log(typeof (formData.image))
  console.log("form data is: ", formData)

  

  const handleChange = async (e) => {
    if (e.target.name === "image") {
      if (e.target.files.length > 0) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.files[0],
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  

  useEffect(() => {
    if (profile) {
      setFormData({
        userName: profile.userName,
        email: profile.email,
        image: profile.image,
      });
    }
  }, [profile,setFormData]);

  


  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const updatedFormData = new FormData();
  
    updatedFormData.append('userName', formData.userName);
    updatedFormData.append('email', formData.email);
  
    
      if (typeof formData.image !== 'string') {
        updatedFormData.append('image', formData.image, formData.image.name);
      }
    
  
    const params = {
      id: profile ? profile._id : '',
      prevImgId: profile ? profile.image : '',
    };
    
    const config = {
      url: `/profile/update`,
      method: 'put',
      data: updatedFormData,
      headers: { Authorization: token, 'Content-Type': 'multipart/form-data' },
      params: params,
    }
  
    try {
      const data = await fetchData(config);
      console.log('Response from API:', data);
      dispatch(gamerProfile(data.user));
      //gamerFetch(gaming);
    } catch (error) {
      console.error('Error fetching Gamer data:', error);
    }
  };
  

  return (
    <div className="col-6 shadow p-3 mb-5 bg-black rounded" style={{ width: '55rem', margin: '2rem auto' }}>
      <center>
        <h5 className="card-title text-muted">Gamer Profile</h5>
      </center>
      
            {/* <!-- Profile picture card--> */}
           
                
                <div className="card-body text-center" style={{ textAlign: 'left', marginLeft: '1rem', marginBottom: '1rem' }}>
                    {/* <!-- Profile picture image--> */}
                    {!imageLoaded && <div className="loading-spinner"></div>}
                    <img 
                        className={`img-account rounded-circle mb-4 ${imageLoaded ? "" : "hidden"}`}
                        src={imageSrc}
                        alt=""
                        height="154.375rem"
                        width="154.375rem"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                    />
                    {/* <button class="btn btn-primary" type="button">Upload new image</button><label className="form-label fs-6 text-white" htmlFor="inputGroupFile01">Image</label> */}
                    <input type="file" className="form-control" name="image"  id="inputGroupFile01" accept='.jpeg, .png, .jpg' onChange={handleChange} style={{ textAlign: 'left', marginLeft: '1rem', marginBottom: '1rem' }}/>
                </div>
            
       
      <div className="form-group text-center" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="name" style={{ textAlign: 'left', marginLeft: '-13rem', marginBottom: '1rem' }}>
          User Name
        </label>
        <br />
        <div className="d-inline-block">
          <input type="text" name="userName" id="fname" className="form-control " value={formData.userName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group text-center" style={{ marginBottom: '3rem' }}>
        <label htmlFor="email" style={{ textAlign: 'left', marginLeft: '-15rem', marginBottom: '1rem' }}>
          Email
        </label>
        <br />
        <div className="d-inline-block  rounded-circle" >
          <input type="text" name="email" id="fname" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <center>
        <button type="button" className="content-h2 text-white btn-lg" onClick={handleUpdate} style={{ margin: '0 10px' }}>
          Save Changes
        </button>
      </center>
    </div>
  );
};

export default EditProfile;