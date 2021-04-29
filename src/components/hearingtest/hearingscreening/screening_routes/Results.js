import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom'; 

const labels = [0, 500, 1000, 2000, 4000, 6000];

class Results extends Component {
   render() {
      return (
         <main className="container-fluid px-3">
            <div className="row">
               <div className="col-lg-6">
                  <LineChart testResults={this.props.testResults} />
               </div>
               <div className="col-lg p-4 px-5">
                  <div className="row">
                     <h4>What Do My Results Mean?</h4>
                     <p>Your results are displayed as our version of an audiogram. An audiogram is a graph that shows the softest sounds a person can hear at different frequencies, for each ear. Namely, it presents the frequencies and decibels that you were able to hear. Frequency, or pitch, is in Hz, and decibel (dB) is a relative volume measurement. Where these values fall on the audiogram will indicate the degree of hearing loss that you could have. Marks closer to the bottom of this graph indicate that softer tones were heard (lower dB). The different variations of results you could receive are normal, mild, moderate, moderately-severe, severe, or severely profound.</p>
                  </div>
                  <div className="row">
                     <h4>What Should I Do Next?</h4>
                     <p>If your results indicate that your hearing is normal, most likely, no further actions are necessary. However, if your results reveal that you may have hearing loss, please reach out to a medical professional for further diagnosis.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <p>*Note that your results are not a medical diagnosis of your hearing levels, but they can provide information about your hearing levels that could encourage you to schedule an appointment with an audiologist. </p>
            </div>
            <div className="row text-center">
               <div className="d-flex justify-content-md-around w-100 flex-md-wrap align-content-center">
                  <div className="p-3" >
                     {/* refresh window */}
                     <button type="button" className="btn btn-warning font-weight-light" onClick={() => {window.location.reload();}}>Take Test Again</button>
                  </div>
                  <div className="p-3" >
                           {/* links to blog */}
                     <NavLink to="/devices" type="button" className="btn btn-info font-weight-light">Learn More</NavLink>
                  </div>
                  <div className="p-3" >
                     <NavLink to="/devices" type="button" className="btn btn-info font-weight-light">Show Me Sound Sustainability Devices</NavLink>
                  </div>
                  <div className="p-3" >
                     <NavLink to="/signin" type="button" className="btn btn-info font-weight-light">Save My Results</NavLink>
                  </div>
               </div>
            </div>
         </main>
      );
    }
}

function LineChart(props) {
   let level = getLevel(props.testResults);
   let data = {
      labels: labels,
      datasets: [
         {
            label: 'Right Ear',
            data: getData(props.testResults[0].hertz, true),
            backgroundColor: "rgba(4, 157, 217, .5)",
            borderColor: "rgba(4, 157, 217, .5)",
            borderDash: [5,5]
         },
         {
            label: 'Left Ear',
            data: getData(props.testResults[1].hertz, false),
            backgroundColor: "rgba(102, 255, 173, 0.5)",
            borderColor: "rgba(102, 255, 173, 0.5)"
         },
         {
            label: 'Both Ears',
            backgroundColor: "rgba(104,205,214,255)",
            borderColor: "rgba(104,205,214,255)"
         }
      ]
   };

   let options = {

      responsive: true,
      plugins: {
         legend: {
            position: 'top',
         },
         title: {
            display: true,
            text: 'Your Audiogram'
         }
      },
      scales: {
         xAxes: {
            title: {
               display: true,
               text: 'Frequency Level (Hz)'
            }
         },
         yAxes: {
            title: {
               display: true,
               text: 'Minimum Decibel You Heard (dB)'
            },
            min: 0,
            max: 80,
            ticks: {
               stepsize: 5
            }
         }
      }

   };

   return (
      <div>
         <h2 align='center'> You have {level}</h2>

         <div>
            <Line data={data} options={options} />
         </div>
      </div>
   );
}

function getLevel(results) {
   let max = 0;
   let level = '';
   for (let i = 0; i < 2; i++) {
      for (let key in results[i].hertz) {
         if (results[i].hertz[key].minThres > max) {
            max = results[i].hertz[key].minThres;
         }
      }
   }
   if (max <= 20) {
      level = "NORMAL hearing";
   } else if (max <= 40) {
      level = "MILD hearing loss"
   } else if (max <= 55) {
      level = "MODERATE hearing loss"
   } else if (max <= 70) {
      level = "MODERATELY SEVERE hearing loss"
   } else {
      level = "SEVERE TO PROFOUND hearing loss"
   }
   return level;
}

function getData(results, right) {
   let newData = [];
   for (let key in results) {
      if (results[key].minThres === 100) {
         newData.push({ x: results[key].hzLevel, y: 75 });
      } else {
         newData.push({ x: results[key].hzLevel, y: results[key].minThres });
      }
   }
   if (right) {
      newData = newData.splice(1);
   }
   return newData;
}


export default Results;