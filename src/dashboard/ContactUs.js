import React from 'react';
import emailjs from 'emailjs-com';
import {  MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, } from 'mdbreact';
import TextField from '@material-ui/core/TextField';


export default function ContactUs() {
  

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
    <div style={{position:"flex",width:"100%"}}>

      <section className="contact-section my-5" >
        <MDBCard style={{ width: "100%" }}>
          <MDBRow>
             <MDBCol lg="4" >
              <MDBCardBody className="contact text-right h-100 grey-text" >
                <h3 className="my-4 pb-2">:דרכים ליצירת קשר</h3>

                <ul className="text-lg-right list-unstyled ml-4">
                  <li>
                   
                   ירוחם
                   <MDBIcon icon="map-marker-alt" className="pr-2" />
                 
                  </li>
                  <li>
                   
                      0525321247
                      <MDBIcon icon="phone" className="pr-2" />
                 
                  </li>
                  <li>
                   

                      Ortalcohen.p@gmail.com
                 
                  </li>
                </ul>
                <li className="list-inline-item ">
                    <a href="#!" className="p-6 fa-lg w-ic ">
                        
                        <MDBIcon style={{color:"grey"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                        <h6 style={{color:"grey"}}> פייסבוק</h6>
                        
                        <MDBIcon style={{color:"grey"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                        <h6 style={{color:"grey"}}>
                        אינסטגרם
                        </h6>
                       
                    </a>
                    </li>
                <hr className="hr-light my-4" />
                
              </MDBCardBody>
            </MDBCol>
            <MDBCol className="text-center" lg="8">
              <MDBCardBody className="form">
                <form className="contact-form " onSubmit={sendEmail}>
                  <h3 className="mt-4">
                    <MDBIcon icon="envelope"  className="pr-2 " />
                  כתבו לי
                  </h3>
                      <MDBRow  >
                        
                        <MDBCol md="6">
                          <div className="md-form mb-0" dir="rtl">
                            <TextField
                            placeholder="אימייל"
                              type="email" name="email"
                              id="form-contact-email"
                              fullWidth
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="6" >
                          <div className="md-form mb-0 " dir="rtl" >
                          <TextField 
                             placeholder="שם פרטי"
                              name="from_name" type="text"
                              id="form-contact-name"
                              fullWidth
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="12">
                          <div className="md-form mb-0" dir="rtl">
                            <TextField
                            fullWidth
                              name="message"
                              type="textarea"
                              id="form-contact-message"
                              placeholder="הודעה"
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
           
          </MDBRow>
        </MDBCard>
      </section>
    </div>
  );
}
