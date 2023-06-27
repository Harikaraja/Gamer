import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { gamerProfile } from '../redux/actions/gamerAction'

const EditProfile = () => {

    const gaming = useSelector(state => state.gamerReducer)

    console.log(gaming);
    const profile = gaming.gamer

    console.log("profile is: ",profile)
    const fetchData = useFetch();
    const dispatch = useDispatch();

    const initialFormData = {
       
        userName : profile.userName,
        email: profile.email,
        
    };

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = e => {
        setFormData({
          ...formData, [e.target.name]: e.target.value
        });
      }

    useEffect(()=>{
        setFormData({
            
            userName : profile.userName,
            email: profile.email,
            
        })
    },[profile,setFormData])

    const handleUpdate = async (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        // console.log(formData)
        console.log(profile._id);
        const config = { url: `/profile/update`, method: "put", data: formData, headers: { Authorization: token }, params: { id: profile._id } };
        await fetchData(config).then((data) => {
            dispatch(gamerProfile(data.user))
        })
        .catch(error => {
                console.error('Error fetching Gamer data:', error);
        });
    }

  return (
    <div className="col-6 shadow p-3 mb-5 bg-black rounded" style={{width:'55rem',marginTop:'1rem',marginLeft:'14rem'}}>
    <center><h5 className="card-title text-muted">Gamer Profile</h5></center>
    <div className="form-group" style={{marginLeft:'12rem',marginBottom:'3rem',marginTop:'4rem'}}>
        <label htmlFor="name" style={{marginBottom:'1rem'}}>User Name</label><br/>
        <input type="text" name='userName'  id="fname" className="form-control" value={formData.userName} onChange={handleChange}/>
    </div>
    
    {/* <div className="form-group">
        <label htmlFor="password">Change Password</label>
        <input type="password" id="password" className="form-control" value="********"/>
        <button>Change Password</button>
    </div> */}
    <div className="form-group" style={{marginLeft:'12rem',marginBottom:'3rem'}}>
        <label htmlFor="email" style={{marginBottom:'1rem'}}>Email</label><br/>
        <input type="email" id="email" className="form-control" name="email" value={formData.email}  onChange={handleChange}/>
    </div>
    
    <center><button type="button" className="content-h2 text-white btn-lg" onClick={handleUpdate} style={{margin:'10px'}}>Save Changes</button></center>
    </div>
  )
}

export default EditProfile
