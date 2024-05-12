import React, { useState } from 'react';
import './style_aaron.css';

import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';



function Contact_aaron() {

  // For the Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // For the Form 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // For Email validation
  const [validEmail, setValidEmail] = useState(true);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Email validation using regular expression
    const isValid = /\S+@\S+\.\S+/.test(event.target.value);
    setValidEmail(isValid);

  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

const handleWhatapp = (event) => {
  alert('Here is our Whatsapp number: 010-9999999 ');
}

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validEmail) {
      alert('Please enter a valid email address');
      return;
    } else {
      // reset the form after submitted
      alert('You have successfully submitted the form');
      setName('');
      setEmail('');
      setMessage('');

    }



  };
  const handleReset = (event) => {
    event.preventDefault();


    //Perform form reset logic here

    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <>

      <div class="mt-3 p-3 mb-2 backgroundcolor text-white text-center ">
        <h5>
          Get in Touch with Odin Coffee Shop!
        </h5>
      </div>
      <div class="container">
        {/* Container for content for each card - Start - */}
        <div class="d-flex flex-row  ">
          <div class="pl-5 pt-3 ">
            {/* Card container for content  - Start - */}
            <div class="card ">

              <div class="card-body cardbg-color">
                <h4 class="card-title cardheader-color">Visit Us :</h4>
                <p class="card-text">
                  If you happen to be in the neighborhood, we'd love to meet you in person!
                </p>

                <p>Our physical address is : </p>

                <p>Odin Coffee Shop, Street of Valhalla, Valhalla</p>
                <p>We're open Daily from 9am to 9pm.</p>
                <button variant="primary" class="btn cardbtn-color float-right" onClick={handleShow}>
                  Find us in Map
                </button>
              </div>

            </div>

            {/* Card container for content  - End - */}
          </div>


          <div class=" pl-5 pt-3 "  >

            {/* Card container for content  - Start - */}
            <div class="card" >

              <div class="card-body cardbg-color ">
                <h4 class="card-title cardheader-color">Contact Us :</h4>
                <p class="card-text">
                  For more immediate assistance,</p>
                <p> you can give us a call:  at 089 456 789 </p>
                <p>or our WhatsApp line:  010-9999999</p>
                <p>Our team is available during business hours to answer your queries.</p>
                <p>  </p>
                <button type="button" class="btn cardbtn-color float-right" onClick={handleWhatapp}>
                  Chat with via Whatsapp
                </button>

              </div>
            </div>

            {/* Card container for content  - End - */}
          </div>

        </div>
        {/* Container for content for each card - End - */}
      </div>

      <div class="container formbg-color mt-5 ">


        {/* User Feedback form - Start - */}
        <h1>User Feedback Form</h1>
        <form class="form-container ">
          <div class="form-group row ">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input class=" ml-3 pt-3 " type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input class=" ml-3 pt-3 " type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
              <textarea class=" ml-3 pt-3 " id="message" value={message} onChange={handleMessageChange} />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button type="button" class="btn btn-primary ml-3" onClick={handleReset}>Reset</button>
              <button type="button" class="btn btn-primary ml-3" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>

        {/* User Feedback form - End - */}
      </div>

      {/* Script for Modal pop out to show google map  - Start - */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Google Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.971749651068!2d-122.08257948582698!3d37.422104530462016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb749b5f0cc1f%3A0x1fe0eaf5b9932a6a!2sCodeium!5e0!3m2!1sen!2sus!4v1629966430126!5m2!1sen!2sus"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          >
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      {/*  Script for Modal pop out to show google map  - End - */}




    </>





  )
}

export default Contact_aaron