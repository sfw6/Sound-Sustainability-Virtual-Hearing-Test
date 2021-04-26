import React from 'react';
 
const Instructions = () => {
   return (
      <main className="container">
         <div className="font-weight-light">
            <div className="row text-center">
               <div className="col-sm text-body">
                  <i className="bi bi-sliders display-1 text-secondary instruction-icon"></i>
                  <h4>Step 1: Calibration</h4>
                  <ul className="list-unstyled">
                     <li>
                     sub step 1
                     </li>
                     <li>
                     sub step 2
                     </li>
                     <li>
                     sub step 3
                     </li>
                  </ul>
               </div>
               <div className="col-sm text-body">
                  <i className="bi bi-headphones display-1 text-secondary instruction-icon"></i>
                  <h4>Step 2: Hearing Screening</h4>
                  <ul className="list-unstyled">
                     <li>
                     sub step 1
                     </li>
                     <li>
                     sub step 2
                     </li>
                     <li>
                     sub step 3
                     </li>
                  </ul>
               </div>
               <div className="col-sm text-body">
                  <i className="bi bi-clipboard-data display-1 text-secondary instruction-icon"></i>
                  <h4>Step 3: Results</h4>
                  <ul className="list-unstyled">
                     <li>
                     sub step 1
                     </li>
                     <li>
                     sub step 2
                     </li>
                     <li>
                     sub step 3
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Instructions;