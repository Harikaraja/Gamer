import React from "react";

function MerchandiseForm() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add your Merchandise Now!</h1>
                    </div>
                    <div className="modal-body">
                        <form action="" method="">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Title</span>
                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" autoFocus />
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupFile01">Image</label>
                                <input type="file" className="form-control" id="inputGroupFile01" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Brand</span>
                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Price $</span>
                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-danger">Add merchandise</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MerchandiseForm;