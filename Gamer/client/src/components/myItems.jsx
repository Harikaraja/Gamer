import React from 'react'
import bg from "../assets/images/icon.png"


 function myItems(props) {
  
  console.log("myitems props are : ",props)

  return (
    <div>
      
      <div className="card-container" style={{display:"flex",justifyContent:"center"}}>
        <div className="card-items-container" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"20px"}}>
          <div className="card-items" style={{"width": "130px","height": "100px","margin-left": "100px"}}>
            
              <img src={bg} alt="images" style={{width:"100%",height:"50px",padding:"0",marginBottom:"2rem"}}/>
              <h6 >{props.tdate}</h6>
              <h6 >{props.tId}</h6>
              <p >{props.status}</p>
            
           </div>
        </div>
      </div>
      
    </div>
  );
}

export default myItems;