import React from 'react'
import ImageUpload from './ImageUpload'
function Potato() {
  return (
    <div className="myPotato d-flex align-items-center">
      <div className="container text-center ">
          <strong style={{ color: 'green' }}><h4>Send Us a Picture of your Potato Plant Leaf</h4>
          <h4>So that we can examine its Health</h4></strong>
          <ImageUpload title="potato"/>
          
      </div>
    </div>
  )
}

export default Potato