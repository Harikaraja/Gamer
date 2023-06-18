import React from "react";

function HistoryCard(props) {
    return (
        <div class="row mb-1">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HistoryCard;