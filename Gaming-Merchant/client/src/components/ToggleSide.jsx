import React , { useState } from "react";
import ProductCard from "./ProductCard";
import HistoryCard from "./HistoryCard";



// let customStyle1 = {
//     display: ""
// }

// let customStyle2 = {
//     display: "none"
// }


// var click = function() {
//     if (customStyle1.display === "") {
//         customStyle1.display = "none"
//     }
// }



function ToggleSide() {
    return (<div className="col my-5">
        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a className="nav-link" aria-current="true" href="#" id="merch">Merchandise</a>
                    </li>
                    <li class="nav-item"> 
                        <a className="nav-link active" href="#" id="tranHis">Transaction History</a> 
                        {/* here toggle active button to change the animation */}
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div id="merchandise" style={{ display : "none" }}>
                    <div className="text-center">
                        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Merchandise</button>
                    </div>
                    <div className="row" >
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                        <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                    </div>
                </div>
                <div id="transactionHistory">
                    <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                    <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                    <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                </div>
            </div>
        </div>

    </div>)
}


export default ToggleSide;