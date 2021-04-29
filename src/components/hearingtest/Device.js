// About Page
import React, { Component } from 'react'; //import React Component

const Devices = () => {
   return (
      <main>
         <nav aria-label="breadcrumb" className="breadcrumbs">
            <ol className="breadcrumb bg-transparent font-weight-light">
               <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page">Devices</li>
            </ol>
         </nav>

         <MainAboutSection />
      </main>
   );
}

class MainAboutSection extends Component {
   render() {
      return (
         <div className="py-4 container">
            <div className="text-center mb-4">
               <h1 className="display-4">Coming Soon...</h1>
              </div>
              <div className="font-weight-light mb-2">
                  <p>Sound Sustainability is is striving to develop the best over the counter hearing aid on the market. While still in development, we are so excited about our product so far. Follow us on social media for updates! </p>
              </div>
              <div className="d-flex flex-column text-nowrap text-center justify-content-center">
                  <a className="text-dark pb-2" href="https://www.facebook.com/SoundSustainability/" >
                      <i className="bi bi-facebook text-dark"></i> Facebook
						</a>
                  <a className="text-dark pb-2" href="https://www.instagram.com/hearyourworld/" >
                      <i className="bi bi-instagram text-dark"></i> Instagram
						</a>
                  <a className="text-dark pb-2" href="https://twitter.com/hearyourworld" >
                      <i className="bi bi-twitter text-dark"></i> Twitter
					</a>
                  <a className="text-dark pb-2" href="https://www.linkedin.com/company/soundsustainability" >
                      <i className="bi bi-linkedin text-dark"></i> Linked In
						</a>
              </div>
         </div>
      );
   }
}

export default Devices;