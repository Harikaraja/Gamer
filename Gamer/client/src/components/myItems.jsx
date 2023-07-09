import React from 'react';


function MyItems(props) {
  console.log('myitems props are:', props);

  const dateString = props.tdate;
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const localDate = date.toLocaleDateString(undefined, options);

  return (
    <div className="col-lg-4 col-md-6" data-cue="slideInUp" data-show={true} style={{
      animationName: "slideInUp",
      animationDuration: "300ms",
      animationTimingFunction: "ease",
      animationDelay: "0ms",
      animationDirection: "normal",
      animationFillMode: "both"
    }}>
      <a href="#" class="history">                                        
          <div class="history_thumb veryfied">                                               
              <figure>
                  <img src="avatar1.jpg" data-src="img/avatar1.jpg" alt="" class="lazy loaded" width="100" height="100" data-was-processed="true" />
              </figure>
          </div>
          <div>
          <h6>Ludo King</h6>
          <span class="badge bg-primary">2300 snapps</span><div class="clearfix"></div>
          <small><strong>Transaction ID:</strong> </small>
          <div class="clearfix"></div>
            <small><strong>Date:</strong>{props.tdate}</small>
          </div>
      </a>
  </div>
  );
}

export default MyItems;