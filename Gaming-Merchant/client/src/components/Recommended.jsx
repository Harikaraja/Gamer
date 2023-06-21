import React from 'react'

export default function Recommended() {
  return (
    <div>
      <div className="card" style={{ height: "375px", zIndex: "2" ,margin:"-2px"}}>
        <div className="image-container"   
           style={{
            backgroundImage: 'linear-gradient(to-bottom,#e8e8e8,#d3d3d3)',
            height: '75%',
          }}
        >
          <img
            src="https://distil.in/demo/snappcoins/img/items/item-1.jpg"
            alt=""
            style={{ height: '75%', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}
