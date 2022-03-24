import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>diplomats.edu@gmail.com</p>
                <p>&nbsp;</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us:</h3>
                <p>+94 77 959 1200</p>
                <p>+94 71 909 0200</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Main Branch</h3>
                <p>123, Address 1, Sri Lanka</p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
