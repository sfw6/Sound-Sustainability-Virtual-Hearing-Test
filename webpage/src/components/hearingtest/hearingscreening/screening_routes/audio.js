import React, { Component } from 'react';

const tones = [
   {
      id: 0,
      hertz: 500
   },
   {
      id: 1,
      hertz: 1000
   },
];

const pathStart = "audio_tones/";
const pathEnd = ".png";

class Audio extends Component {
   state = {
      tones: [],
      activeTone: 0, // for testing purposes it is set here
      activeHertz: 500, // for testing purposes it is set here
      activeDecible: 35 // for testing purposes it is set here
   }

   componentDidMount() {
      this.setState({ tones: tones });
   }

   // when you click yes
   handleDrop = () => {
      let idx = this.state.activeTone;
      let db = this.state.activeDecible;

      // if at lowest dB then jump to the next hz
      if (db - 10 < 20) {
         
         if (db === 25) { // if case where db is at 25 so can still go down but not by 10
            console.log("was at 25 now dropping 5dB");
            db -= 5;
            this.setState({
               activeDecible: db
            });
         } else if (idx === 1) { // case where cannot go down any lower and cannot go to a higher hz
            console.log("would break to go any lower");
         } else {
            console.log("next hz");
            idx += 1;
            this.setState({
               activeTone: idx, 
               activeHertz: this.state.tones[idx].hertz, 
               activeDecible: 35 // for testing purposes it is set here
            });
         }
      } else { // drop by 10 db
         console.log("dropping 10dB");
         db -= 10;
         this.setState({
            activeDecible: db
         });
      }
   };

   // when you click no
   handleIncrease = () => {
      let idx = this.state.activeTone;
      let db = this.state.activeDecible;

      // if at highest dB then jump to the next hz
      if (db === 50) {
         
         if (idx === 1) { // case where cannot go up any higher and cannot go to a higher hz
            console.log("now at highest db for highest hz")
         } else {
            console.log("next hz")
            idx += 1;
            this.setState({
               activeTone: idx, 
               activeHertz: this.state.tones[idx].hertz, 
               activeDecible: 35 // for testing purposes it is set here
            });
         }
      } else { // go up by 5db
         console.log("up by 5dB")
         db += 5;
         this.setState({
            activeDecible: db
         });
      }
   };

   // currently only restarting at 500hz and 20 db
   handleReplay = () => {
      console.log("replay -- reset at lowest hz/db combo")
      this.setState({
         activeTone: 0, // for testing purposes it is set here
         activeHertz: 500, // for testing purposes it is set here
         activeDecible: 20 // for testing purposes it is set here
      });
   };

   render() {

      // for testing
      console.log(this.state.activeTone);
      console.log(this.state.activeHertz);
      console.log(this.state.activeDecible);

      return (
         <main>
            <div className="container text-center d-flex flex-column">
               <ToneDisplay 
                  currentHZ={this.state.activeHertz} // passing current hz
                  currentDB={this.state.activeDecible} // passing current db
               />
               <h4 className="font-weight-light py-2 m-0">Do you hear this tone?</h4>
               <AudioResponse 
                  drop10={this.handleDrop} // passing drop function
                  increase5={this.handleIncrease} // passing increase function
                  replay={this.handleReplay} // passing replay function (currently resetting hz/db)
               />
               {/* placeholder button for now */}
               <button type="button" className="btn btn-danger" onClick={this.props.disable}>(placeholder) activate next button</button>
             </div>
         </main>
      );
   }
}

class ToneDisplay extends Component {
   render() {
      // using the passed hz/db to concat different parts together for file path name
      let hz = "Hz" + this.props.currentHZ
      let db = "dB" + this.props.currentDB
      console.log(hz + db)
      return (
         <div>
            <img src={pathStart + hz + db + pathEnd} />
            <p>{pathStart + hz + db + pathEnd}</p>
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

                  {/* onClick= functionality traces back to main component to run function */}
                  <button type="button" className="btn btn-dark text-nowrap screening-btn-hear" onClick={this.props.increase5}> 
                     <i className="bi bi-hand-thumbs-down text-black"></i> No
                  </button>

               </div>
               <button type="button" className="btn" onClick={this.props.replay}>
                  <h3 className="mb-0"><i className="bi bi-arrow-repeat"></i></h3>
               </button>
               <div className="col">

                  <button type="button" className="btn btn-info text-nowrap screening-btn-hear" onClick={this.props.drop10}>
                     <i className="bi bi-hand-thumbs-up text-black"></i> Yes
                  </button>

               </div>
            </div>
         </div>
      );
   }
}

export default Audio;