import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

class Calibration extends Component {
   state = {
      outputSelected: '',
      outputConfirmed: false
   }

   componentDidMount() {
      this.setState({
         outputConfirmed: false
      });
   }

   toggleOutputSelection = (output) => {
      this.setState({
         outputConfirmed: true,
         outputSelected: output
      });
   };

   render() {
      return (
         <main className="container d-flex justify-content-center">
            <div className="px-2">
               <h5 className="font-weight-light mb-3">1. Choose listening option that best describes your audio output:</h5>
               <div className="sound-selection-expanded">
                  <SoundSelectExpanded
                     toggleOutput={this.toggleOutputSelection}
                     output={this.state.outputSelected}
                  />
               </div>
               <div className="sound-selection-dropdown">
                  <SoundSelectDropdown
                     toggleOutput={this.toggleOutputSelection}
                     output={this.state.outputSelected}
                  />
               </div>
               <Step2
                  step1Complete={this.state.outputConfirmed}
                  disable={this.props.disable}
               />
            </div>
         </main>
      );
   }
}

class SoundSelectExpanded extends Component {
   constructor() {
      super();
      this.state = {
         active: 0
      };
      this.onChangeValue = this.onChangeValue.bind(this);
   }

   onChangeValue(event) {
      this.props.toggleOutput(event.target.value);
   }

   setActive(index) {
      this.setState({ 'active': index });
   }

   render() {
      let current = this.state.active;
      let getClass = function (name, index) {
         if (index === current) {
            return name + ' active';
         } else {
            return name;
         }
      };

      return (
         <div className="row flex-nowrap">
            <div className="btn-group btn-group-toggle" role="group" aria-label="audio output button group selection" onChange={this.onChangeValue}>
               <label className={getClass("btn btn-light", 1)} onClick={this.setActive.bind(this, 1)}>
                  <input type="radio" name="output" value="overear" autoComplete="off" />
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-headphone-selection.png" alt="over ear headphone" />
                  <p className="mb-0 font-weight-light">Overear Headphone</p>
               </label>
               <label className={getClass("btn btn-light", 2)} onClick={this.setActive.bind(this, 2)}>
                  <input type="radio" name="output" value="wired" autoComplete="off" />
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-wiredearbud-selection.png" alt="wired earbuds" />
                  <p className="mb-0 font-weight-light">Wired Headphone</p>
               </label>
               <label className={getClass("btn btn-light", 3)} onClick={this.setActive.bind(this, 3)}>
                  <input type="radio" name="output" value="bluetooth" autoComplete="off" />
                  <img className="img-responsive p-2" src="./img/screening_icons/screening-earpod-selection.png" alt="bluetooth earpods" />
                  <p className="mb-0 font-weight-light">Bluetooth Headphone</p>
               </label>
            </div>
         </div>
      );
   }
}

class SoundSelectDropdown extends Component {
   constructor() {
      super();
      this.state = {
         name: "React",
         popoverOpen: false
      };
      this.togglePopover = this.togglePopover.bind(this);
      this.onChangeValue = this.onChangeValue.bind(this);
   }

   onChangeValue(event) {
      this.props.toggleOutput(event.target.value);
   }


   togglePopover() {
      this.setState({ popoverOpen: !this.state.popoverOpen })
   }

   render() {
      const { popoverOpen } = this.state;
      return (
         <div className="d-inline-flex align-items-center">
            <div>
               <select className="custom-select" onChange={this.onChangeValue}>
                  <option value="">Choose Audio Option</option>
                  <option value="overear">Headphone</option>
                  <option value="wired">Wired Headphone</option>
                  <option value="bluetooth">Bluetooth Heaphone</option>
               </select>
            </div>
            <div className="px-2">
               <button className="btn btn-transparent" type="button" id="informationPopover">
                  <h4 className="mb-0"><i className="bi bi-info-circle text-info"></i></h4>
               </button>
               <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="informationPopover"
                  toggle={this.togglePopover}
               >
                  <PopoverBody className="font-weight-light shadow text-center">
                     <p className="font-weight-normal ">Different Audio Outputs</p>
                     <div>
                        <img className="img-responsive p-2" src="./img/screening_icons/screening-headphone-selection.png" alt="over ear headphone" />
                        <p className="mb-0 font-weight-light">Overear Headphone</p>
                     </div>
                     <div>
                        <img className="img-responsive p-2" src="./img/screening_icons/screening-wiredearbud-selection.png" alt="wired earbuds" />
                        <p className="mb-0 font-weight-light">Wired Headphone</p>
                     </div>
                     <div>
                        <img className="img-responsive p-2" src="./img/screening_icons/screening-earpod-selection.png" alt="bluetooth earpods" />
                        <p className="mb-0 font-weight-light">Bluetooth Headphone</p>
                     </div>
                  </PopoverBody>
               </Popover>
            </div>
         </div>
      );
   }
}

class Step2 extends Component {
   render() {
      if (this.props.step1Complete) {
         return (
            <div>
               <h5 className="font-weight-light my-3">2. Set your device volume to 50% (half of the max volume):</h5>
               <div className="row font-weight-light pl-4">
                  <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="soundSet50" onClick={this.props.disable} />
                     <label className="form-check-label" htmlFor="soundSet50">
                        I confirm that my volume is at 50%
                        </label>
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <div> </div>
         );
      }
   }
}

export default Calibration;

