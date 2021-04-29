import React, { Component } from 'react';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';

import { BoopButton } from './TonePlayback';
import { TEST } from './TestConstant';

// cp
class Audio extends Component {
   state = {
      isTestFinished: false,
      disableYesNo: false, // debug set false
      isButtonDisabled: false,
      test: [],

      currentEarID: 0, // 0=R starting
      currentHzID: 0, // 0=1000 starting 
      // (do not need to track dbID since changes based on the yes or no)

      activeEar: 'R',
      activeHertz: 1000,
      activeDecible: 30
   }

   componentDidMount() {
      this.setState({
         test: TEST,
         // disableYesNo: true
      });
   }

   handleDisableBtnUntilTone = () => {
      this.setState({
         disableYesNo: false
      });
   }

   handleDisableBtnWithAudio = () => {
      this.setState({
         // isButtonDisabled: true
      });

      // **** here's the timeout ****
      setTimeout(() => this.setState({ isButtonDisabled: false }), 3500);
   }

   // use activeDecible to then pass to this function to get array id
   getDecibleID = (db) => {
      let id = (db - 15) / 5;
      return id;
   }

   // when you click yes
   handleDrop = () => {
      let earID = this.state.currentEarID;
      let hzID = this.state.currentHzID;
      let db = this.state.activeDecible;
      let dbID = this.getDecibleID(db);

      // test object copy
      let test = [...this.state.test];

      // check if first time hz has played
      // !yes = update ableToHear for hz level to true
      if (!test[earID].hertz[hzID].ableToHear) {
         test[earID].hertz[hzID].ableToHear = true;
      }

      // check if this db has played before for this hz
      // !yes = set hasPlayed for decible level to true
      if (!test[earID].hertz[hzID].decibles[dbID].hasPlayed) {
         test[earID].hertz[hzID].decibles[dbID].hasPlayed = true;
      }

      // overall things to update
      // current db numHeard +1
      test[earID].hertz[hzID].decibles[dbID].numHeard += 1;

      // check numHeard + numMissed to tell if repeat or move on
      let numHeard = test[earID].hertz[hzID].decibles[dbID].numHeard;
      let numMissed = test[earID].hertz[hzID].decibles[dbID].numMissed;
      let totalPlayed = numHeard + numMissed;
      let hitRate = Number((numHeard / totalPlayed).toFixed(2));

      // if at lowest dB then jump to the next hz
      if (totalPlayed >= 2 && hitRate > .65) {
         test[earID].hertz[hzID].minThres = db; // set min thres before moving on

         if (earID === 1 && test[earID].hertz[hzID].hzLevel === 500) {
            this.setState({
               isTestFinished: true
            });
         } else {
            if (test[earID].hertz[hzID].hzLevel !== 500) { // change hz
               hzID += 1;
               db = 30;

            } else if (test[earID].hertz[hzID].hzLevel === 500) { // change ears
               earID = 1;
               hzID = 0;
               db = 30;

            }
         }

      } else if (db === 20) { // edge case
         db -= 5;
      } else if (db - 10 >= 15) { // drop case
         db -= 10;
      }

      this.setState({
         test: test,
         currentEarID: earID,
         currentHzID: hzID,
         activeEar: this.state.test[earID].ear,
         activeHertz: this.state.test[earID].hertz[hzID].hzLevel,
         activeDecible: db,
         // disableYesNo: true
      });
   };

   // when you click no
   handleIncrease = () => {

      let earID = this.state.currentEarID;
      let hzID = this.state.currentHzID;
      let db = this.state.activeDecible;
      let dbID = this.getDecibleID(db);

      // test object copy
      let test = [...this.state.test];

      // overall things to update
      // current db numMissed +1
      test[earID].hertz[hzID].decibles[dbID].numMissed += 1;

      // check first time hz played and unable to hear
      // !hear = update numOnlyNo 
      if (!test[earID].hertz[hzID].ableToHear && db < 70) {
         test[earID].hertz[hzID].numOnlyNo += 1;
         db += 10;
      } else if (db === 75) {

         if (test[earID].hertz[hzID].hzLevel !== 500) { // next hz
            db = 30;
            hzID += 1;

         } else if (earID === 1 && test[earID].hertz[hzID].hzLevel === 500) { // end test
            this.setState({
               isTestFinished: true
            });
         } else { // switch ears
            earID = 1;
            hzID = 0;
            db = 30;
         }

      } else {
         db += 5;
      }

      this.setState({
         test: test,
         currentEarID: earID,
         currentHzID: hzID,
         activeEar: this.state.test[earID].ear,
         activeHertz: this.state.test[earID].hertz[hzID].hzLevel,
         activeDecible: db,
         // disableYesNo: true
      });
   };

   render() {
      if (this.state.isTestFinished) {
         return (
            <main className="container">
               <div className="jumbotron bg-transparent">
                  <h3>Hearing Screening Complete!</h3>
                  <p>Note that your results are not a medical diagnosis of your hearing levels, but they can provide information about your hearing levels that could encourage you to schedule an appointment with an audiologist.</p>
                  <div className="form-check">
                     <input className="form-check-input" type="checkbox" value="" id="soundSet50" onClick={() => { this.props.disable(); this.props.passResults(this.state.test); }} />
                     <label className="form-check-label" htmlFor="soundSet50">
                        I acknowledge the above statement
                     </label>
                  </div>
               </div>
            </main>
         );
      } else {
         return (
            <main>
               <div className="container text-center d-flex flex-column">
                  <ToneDisplay
                     currentEar={this.state.activeEar} // passing current ear
                     currentHZ={this.state.activeHertz} // passing current hz
                     currentDB={this.state.activeDecible} // passing current db
                     timeOut={this.handleDisableBtnWithAudio}
                     isButtonDisabled={this.state.isButtonDisabled}
                     checkClick={this.handleDisableBtnUntilTone}
                  />
                  <h4 className="font-weight-light py-2 m-0">Do you hear this tone?</h4>
                  <AudioResponse
                     drop10={this.handleDrop} // passing drop function
                     increase5={this.handleIncrease} // passing increase function
                     isButtonDisabled={this.state.isButtonDisabled}
                     hasTonePlayed={this.state.disableYesNo}
                  />
                  <WhatToDo />
               </div>
            </main>
         );
      }
   }
}

class ToneDisplay extends Component {
   render() {
      // using the passed hz/db to concat different parts together for file path name
      let ear = this.props.currentEar;
      let hz = this.props.currentHZ;
      let db = this.props.currentDB;
      let boop = ("play" + ear + hz + "Hz" + db);
      let title = "Right Ear - ";

      if (ear === 'L') {
         title = "Left Ear - ";
      }

      return (
         <div>
            <h2>
               {title + hz + "Hz"}
            </h2>
            <div className="d-flex justify-content-center" >
               <BoopButton
                  boop={boop}
                  clickDisable={this.props.timeOut}
                  disabled={this.props.isButtonDisabled}
                  hasClicked={this.props.checkClick}
               />
            </div>
         </div>
      );
   }
}


class AudioResponse extends Component {
   render() {

      return (
         <div className="d-inline-flex justify-content-center">
            <div className="row py-2 mb-4 m-2 align-items-center">
               <div className="col">
                  <button type="button" className="btn btn-dark text-nowrap screening-btn-hear" disabled={this.props.isButtonDisabled || this.props.hasTonePlayed} onClick={this.props.increase5}>
                     <h4 className="font-weight-light py-2 m-0"><i className="bi bi-hand-thumbs-down text-black"></i> No</h4>
                  </button>

               </div>

               <div className="col">

                  <button type="button" className="btn btn-info text-nowrap screening-btn-hear" disabled={this.props.isButtonDisabled || this.props.hasTonePlayed} onClick={this.props.drop10}>
                     <h4 className="font-weight-light py-2 m-0"><i className="bi bi-hand-thumbs-up text-black"></i> Yes</h4>
                  </button>

               </div>
            </div>
         </div>
      );
   }
}

function WhatToDo() {
      return (
         <div className="px-2">
            <button className="btn btn-transparent" type="link" id="informationPopover">
               <p className="mb-0 font-weight-light"><i className="bi bi-info-circle text-info"></i> What do I do?</p>
            </button>
            <UncontrolledPopover
               placement="bottom"
               target="informationPopover"
            >
               <PopoverBody className="font-weight-light shadow text-center">
                  <p className="m-0 p-0">Click the play button to listen to the tone, “No” if you did not hear the sound and “Yes” if you did. If you want to stop your hearing screening and go back to the instructions, click the “restart” button. </p>
               </PopoverBody>
            </UncontrolledPopover>
         </div>
      );
   
}

export default Audio;