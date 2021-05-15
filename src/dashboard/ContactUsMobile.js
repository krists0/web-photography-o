import React from 'react';
import emailjs from 'emailjs-com';
import {  MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';


export default function ContactUsMobile() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sxhr38i', 'template_jmrdnje', e.target, 'user_UGrz3kG3bSAIw0fzs1CM1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div style={{position:"flex"}}>

      <section className="contact-section my-5" >
        <MDBCard style={{ width: "100%" }}>
          <MDBRow>
            <MDBCol lg="8">
              <MDBCardBody className="form">
                <form className="contact-form" onSubmit={sendEmail}>
                  <h3 className="mt-4">
                    <MDBIcon icon="envelope" className="pr-2" />
               כתבו לי
              </h3>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          name="from_name" type="text"
                          id="form-contact-name"
                          label="שם פרטי"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="email" name="email"
                          id="form-contact-email"
                          label="אימייל"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          name="message"
                          type="textarea"
                          id="form-contact-message"
                          label="הודעה"
                        />
                        <div className="text-center mt-4">
                          <MDBBtn color="warning" outline type="submit" value="Send">
                            שלח
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 grey-text" >
                <h3 className="my-4 pb-2">:דרכים ליצירת קשר</h3>

                <ul className="text-lg-right list-unstyled ml-4">
                  <li>
                    <p>
                      <MDBIcon icon="map-marker-alt" className="pr-2" />
                   ירוחם
                  </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="phone" className="pr-2" />0525321247
                  </p>
                  </li>
                  <li>
                    <p>

                      <h6>Ortalcohen.p@gmail.com</h6>
                    </p>
                  </li>
                </ul>
                <hr className="hr-light my-4" />
                <ul className="list-inline text-center list-unstyled">

                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg w-ic">

                      <MDBIcon fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />

                      <MDBIcon fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />



                    </a>
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
    </div>
  );
}
