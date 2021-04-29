import React from 'react'; //import React Component
import { Accordion, Card } from "react-bootstrap";
 
const Faq = () => {
   return (
      <div className="font-weight-light">
         <nav aria-label="breadcrumb" className="breadcrumbs">
            <ol className="breadcrumb bg-transparent">
               <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
         </nav>
         <div className="mx-4">
            <div className="mb-4">
               <h4>Frequently Asked Questions</h4>
            </div>
            <Accordion>
               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="0" aria-expanded="false">
                     What is a hearing screening?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                     <Card.Body className="mx-4">
                        <p>A hearing screening is a simple evaluation of the sensitivity of a person's hearing. It checks how well you hear different frequencies.</p>
                        <p>A common type of hearing screening is the pure-tone test, which tests your hearing across different pitches. You may have taken a similar test at your physician’s office where you listened to a range of beeps played at different levels.</p>
                        <p>Sound Sustainability offers an online pure-tone test that is free and easy to use. The screening only takes a few minutes and results are delivered right away.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="1" aria-expanded="false">
                     What do I need to take the Sound Sustainability hearing screening?
                   </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                     <Card.Body className="mx-4">
                        <p>For our hearing screening, you will need</p>
                        <ul>
                           <li>A device that plays audio (headphones are recommended) </li>
                           <li>A relatively quiet environment </li>
                        </ul>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="2" aria-expanded="false">
                     Why do I need to be in a quiet environment for my hearing screening?
                   </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                     <Card.Body className="mx-4">
                        <p>During your hearing screening, you will be presented with a series of tones at different volumes. Some of these tones can be difficult to hear, especially being in a noisy environment. It may cause you to not be able to hear tones that you would normally hear, and therefore, skew your results. </p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="3" aria-expanded="false">
                     Why are headphones required?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                     <Card.Body className="mx-4">
                        <p>Due to how the hearing screening will test the hearing levels in both your left and right ear, it is important to distinguish sound being heard in each of your ears, and headphones are able to relay sound to a single ear at a time.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="4" aria-expanded="false">
                     Why am I being asked to select the device I will be using?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                     <Card.Body className="mx-4">
                        <p>This step in the calibration of your hearing screening is intended to standardize how you hear the tones we present to you. Each device outputs sound differently, so selecting the device that you will be using will provide an extra factor to consider in determining your results.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="5" aria-expanded="false">
                     Why do I have to adjust my volume before taking the hearing screening?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="5">
                     <Card.Body className="mx-4">
                        <p>This is an essential step for the calibration of your hearing screening. Adjusting your volume to 50% standardizes how you hear the tones during the screening, and will ensure that you are hearing the correct frequencies at the correct volumes. It is a measure taken to ensure that you are getting a more accurate result.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="6" aria-expanded="false">
                     What do my results mean?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="6">
                     <Card.Body className="mx-4">
                        <p>Note that your results are not a medical diagnosis of your hearing levels, but they can provide information about your hearing levels that could encourage you to schedule an appointment with an audiologist. </p>
                        <p>You will be provided with a statement informing you of your result as well as an audiogram, which this statement was determined from.</p>
                        <p>Your results will be displayed as an <span className="font-weight-bold">audiogram</span>. An audiogram is a graph that shows the softest sounds a person can hear at different frequencies, for each ear. Namely, it presents the frequencies and decibels that you were able to hear. Frequency, or pitch, is in Hz, and decibel (dB) is a relative volume measurement. Where these values fall on the audiogram will indicate the degree of hearing loss that you could have. Marks closer to the bottom of this graph indicate that softer tones were heard (lower dB). The different variations of results you could receive are normal, mild, moderate, moderately-severe, severe, or severely profound.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>

               <Card>
                  <Accordion.Toggle className="accordian-toggle" as={Card.Header} eventKey="7" aria-expanded="false">
                     What should I do after I get my results?
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="7">
                     <Card.Body className="mx-4">
                        <p>If your results indicate that your hearing is normal, most likely, no further actions are necessary. However, if your results reveal that you may have hearing loss, we will provide resources that will allow you to learn more about hearing loss, or to purchase a hearing aid.</p>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>
            </Accordion>
         </div>
      </div>
   );
}

export default Faq;