import React from 'react'
import ImageUpload from './ImageUpload'
function Tomato() {
  return (
    <div className="myTomato d-flex align-items-center">
      <div className="container text-center">
          <h4>Send Us a Picture of your Tomato Plant Leaf</h4>
          <h4>So that we can examine its Health</h4>
          <ImageUpload title="tomato"/>
          
      </div>
    </div>
  )
}

export default Tomato