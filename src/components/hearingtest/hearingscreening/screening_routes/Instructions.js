import React from 'react';
 
const Instructions = () => {
   return (
      <main className="container" id="screening-instructions">
         <div className="font-weight-light">
            <div className="row text-left pb-4">
               <div className="col-2 instruction-icon">
                  <i className="bi bi-gear-wide display-2 text-secondary"></i>
               </div>
               <div className="col">
                  <h4>Step 1: Set Up</h4>
                  <p className="mb-0 pb-2"> First, place yourself in a quiet environment and prepare the device that you will be using to play audio for the test. The device could range from a type of headphone to your computer speakers, but headphones are STRONGLY recommended. </p>
               </div>
            </div>
            <div className="row text-left pb-4">
               <div className="col-2 instruction-icon">
                  <i className="bi bi-sliders display-2 text-secondary"></i>
               </div>
               <div className="col">
                  <h4>Step 2: Calibration</h4>
                     <p className="mb-0 pb-2">Next, select the type of device you will be using to take the hearing screening. </p>
                     <p className="mb-0 pb-2">Then, adjust your volume and confirm that it has been set to 50%. </p>
               </div>
            </div>
            <div className="row text-left pb-4">
               <div className="col-2 instruction-icon">
                  <i className="bi bi-headphones display-1 text-secondary"></i>
               </div>
               <div className="col">
                  <h4>Step 3: Hearing Screening</h4>
                     <p className="mb-0 pb-2">For this step, you will go through a series of tones and identify whether you heard that tone or not.  </p>
                     <p className="mb-0 pb-2">Click the play button to listen to the tone, “No” if you did not hear the sound and “Yes” if you did. If you want to stop your hearing screening and go back to the instructions, click the “restart” button.</p>
               </div>
            </div>
            <div className="row text-left pb-4">
               <div className="col-2 instruction-icon">
                  <i className="bi bi-clipboard-data display-2 text-secondary"></i>
               </div>
               <div className="col">
                  <h4>Step 4: Results</h4>
                     <p className="mb-0 pb-2">After completing the hearing screening, you will be presented with your results in the form of an audiogram and a statement informing you of your hearing level (normal, slight, mild, moderate, moderately-severe, severe, or profound). </p>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Instructions;