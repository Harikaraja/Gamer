import React from "react";

function ProductCard(props) {
    return (
        <div className="my-5 col-lg-6">
            <div className="card" style={{width : 9+"rem"}}>
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
            </div>
        </div>
    )
}


export default ProductCard;