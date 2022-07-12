import React from 'react'

function About() {
  return (
    <div className="myHome d-flex align-items-center">
    <div className="container my-3">
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      ADD NODE-JS as Backend.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Problems faced while converting file to tensor using tfjs.</strong> BUFFER size seems smaller than image size. After storing image can't delete, seems DB needs to be involved. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Potato Disease Predictor Model Details.              
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>Current Version: potato_2. Test Set Accuracy : 97.22%.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Tomato Disease Predictor Model Details.
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>Current Version: tomato_2. Test Set Accuracy : 95.33%.</strong> The Tomato Model is large with 5 classes and huge dataset, which may be the reason for its inaccuracies while predicting in a backend environment. However, during testing in python notebooks, it performs fine.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Pepper Disease Predictor Model Details.              
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>Current Version: pepper_2. Test Set Accuracy : 99.59%.</strong>
      </div>
    </div>
  </div>
</div>
</div>
</div>
          
  )
}

export default About

// <div className="container my-3 ">
//         <div classNaame="accordion" id="accordionExample">
//           <div classNaame="accordion-item">
//             <h2 classNaame="accordion-header" id="headingOne">
//               <button classNaame="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               ADD NODE-JS as Backend. 
//               </button>
//             </h2>
//             <div id="collapseOne" classNaame="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//               <div classNaame="accordion-body">
//                 Problems faced while converting file to tensor using tfjs. BUFFER size seems smaller than image size. After storing image can't delete, seems DB needs to be involved. 
//               </div>
//             </div>
//           </div>
//           <div classNaame="accordion-item">
//             <h2 classNaame="accordion-header" id="headingTwo">
//               <button classNaame="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Potato Disease Predictor Model Details.
//               </button>
//             </h2>
//             <div id="collapseTwo" classNaame="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//               <div classNaame="accordion-body">
//                 <strong>Current Version: potato_2. Test Set Accuracy : 97.22%.</strong>
//               </div>
//             </div>
//           </div>
//           <div classNaame="accordion-item">
//             <h2 classNaame="accordion-header" id="headingThree">
//               <button classNaame="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Tomato Disease Predictor Model Details.
//               </button>
//             </h2>
//             <div id="collapseThree" classNaame="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//               <div classNaame="accordion-body">
//                 <strong>Current Version: tomato_2. Test Set Accuracy : 95.33%.</strong> The Tomato Model is large with 5 classes and huge dataset, which may be the reason for its inaccuracies while predicting in a backend environment. However, during testing in python notebooks, it performs fine.
//               </div>
//             </div>
//           </div>

//           <div classNaame="accordion-item">
//             <h2 classNaame="accordion-header" id="headingThree">
//               <button classNaame="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Pepper Bell Disease Predictor Model Details.
//               </button>
//             </h2>
//             <div id="collapseThree" classNaame="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//               <div classNaame="accordion-body">
//                 <strong>Current Version: pepper_2. Test Set Accuracy : 99.59%.</strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>