import React , {useState}from "react";
import useFetch from "../hooks/useFetch";

const SnappNow = () => {

    const [fetchData] = useFetch();

    const [snaps,setSnaps] = useState()
    
    const handleChange = (event) =>{
        const {value} = event.target
        setSnaps(value)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const config = { url: ``, method: "post", data: snaps };
        fetchData(config).then()
        .catch(error => {
        // Handle the error here, e.g., log the error or display an error message
        console.error('Error fetching tasks:', error);
        });
    }

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Snapp Now!</h1>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="modal-body">
                <p>You are about to purchase "Amazing Art" <b>#304</b> from <b>George Lucas</b></p>
                <p><b>Redeem with</b></p>
                <input type="text" className="form-control" value={snaps} onChange={handleChange} placeholder="3.5 snapps" />
                <br />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Your balance</th>
                      <td>8.498 snapps</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Service fee 1.5%</th>
                      <td>0.125 snapps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-danger">Snap It!</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default SnappNow;
