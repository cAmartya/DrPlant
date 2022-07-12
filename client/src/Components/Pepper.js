import React from 'react'
import ImageUpload from './ImageUpload'
function Pepper() {
  return (
    <div className="myPepper d-flex align-items-center">
      <div className="container text-center my-3">
          <strong style={{ color: "whitesmoke" }}><h4>Send Us a Picture of your Pepper Plant Leaf</h4>
          <h4>So that we can examine its Health</h4></strong>
          <ImageUpload title="pepper"/>
          
      </div>
    </div>
  )
}

export default Pepper