import React from "react";
import ProductCard from "./ProductCard";
import HistoryCard from "./HistoryCard";

function Accordion() {
    return (
        <div className="my-5 col">
            <div class="accordion col" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Merchandises
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Merchandise</button>
                            </div>
                            <div className="row">
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                                <ProductCard imgsrc="blog-5.jpg" title="Shoe" content="This is a a pair of shoes" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Transaction History
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                            <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                            <HistoryCard title="Transation1" content="Date of transaction : 12/13/5000" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Accordion;