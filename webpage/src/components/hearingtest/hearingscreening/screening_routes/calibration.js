import React, { Component } from 'react';

class Calibration extends Component {
   confirmClick = () => {
      console.log("clicked")
   };

   render() {
      return (
         <main className="container d-flex justify-content-center">
            <div>
               <h5 className="font-weight-light mb-3">1. Choose listening option that best describes your audio output:</h5>
               <div className="sound-selection-expanded">
                  <SoundSelectExpanded />
               </div>
               <div className="sound-selection-dropdown">
                  <SoundSelectDropdown />
               </div>
               <h5 className="font-weight-light my-3">2. Set your device volume to 50% (half of the max volume):</h5>
               <div className="row font-weight-light">
                  
                  <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="soundSet50" onClick={this.props.disable} />
                     <label className="form-check-label" htmlFor="soundSet50">
                        I confirm that my volume is at 50%
                     </label>
                  </div>
               </div>
            </div>
         </main>
      );
   }
}

class SoundSelectExpanded extends Component {
   render() {
      return (
         <div className="row flex-nowrap">
            
            <div className="btn-group" role="group">
               <button className="btn btn-light" type="button">
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-laptop-selection.png" alt="laptop" />
                  <p className="mb-0 font-weight-light">Computer Speakers</p>
               </button>
               <button className="btn btn-light" type="button">
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-headphone-selection.png" alt="over ear headphone" />
                  <p className="mb-0 font-weight-light">Overear Headphone</p>
               </button>
               <button className="btn btn-light" type="button">
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-wiredearbud-selection.png" alt="wired earbuds" />
                  <p className="mb-0 font-weight-light">Wired Headphone</p>
               </button>
               <button className="btn btn-light" type="button">
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-earpod-selection.png" alt="bluetooth earpods" />
                  <p className="mb-0 font-weight-light">Bluetooth Headphone</p>
               </button>
            </div>
         </div>
      );
   }
}

class SoundSelectDropdown extends Component {
   render() {
      return (
         <div className="d-inline-flex align-items-center">
            <div>
               <select className="custom-select">
                  <option >Choose Audio Device</option>
                  <option value="1">Computer Speakers</option>
                  <option value="2">Headphone</option>
                  <option value="3">Wired Headphone</option>
                  <option value="3">Bluetooth Heaphone</option>
               </select>
            </div>
            <div className="px-2">
               <h4 className="mb-0"><i className="bi bi-info-circle text-info"></i></h4>
            </div>
         </div>
      );
   }
}

export default Calibration;

