import React from 'react';
import bg from '../assets/images/avatar.jpg';

function MyItems(props) {
  console.log('myitems props are:', props);

  const dateString = props.tdate;
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const localDate = date.toLocaleDateString(undefined, options);

  return (
    <div className="items-cont">
      {/* item begins here */}
      <div className="row">
        <div className="col-md-4">
          <div className="item">
            <div className="card" style={{ padding: '0px', width: '13rem', height: '18rem' }}>
              <div className="image-container">
                <img
                  src={bg}
                  alt="images"
                  style={{ width: '150px', height: '150px', padding: '0', margin: '0.5rem 2rem' }}
                />
              </div>
              <div>
                <center>
                  <h6>Jungle Rummy</h6>
                </center>
                <button
                  className="button-like-text text-white"
                  style={{ fontSize: '15px', width: '150px', marginLeft: '1.5rem', padding: '0px' }}
                >
                  2300 snaps
                </button>
                <p style={{ color: 'green' }}>Transaction ID: {props.tId}</p>
                <p style={{ color: 'green', marginTop: '-30px' }}>Date: {localDate}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above card code two more times to create three cards per row */}
      </div>
    </div>
  );
}

export default MyItems;
