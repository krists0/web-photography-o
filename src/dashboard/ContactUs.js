import React from 'react';
import emailjs from 'emailjs-com';
import {  MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import back from "../images/backcontact.png";

export default function ContactUs() {
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_l9pz831', 'template_wuafuuw', e.target, 'user_UGrz3kG3bSAIw0fzs1CM1')
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
    
     
        <MDBCard className="Contact" style={{position:"fixed",top:"50px",right:0,left:0, width:"100%",height:700,backgroundImage:`url(${back})`,backgroundPosition:"cover",backgroundSize:"100%"}}>
          <MDBRow>
             <MDBCol lg="4" >
              <MDBCardBody className="contact text-right h-100 grey-text "
                  style={{position:"absolute",top:380,right:"-70%",left:0}}
                  >
                    <h4 className="my-4 pb-2 " style={{color:"#ffebee"}}>:דרכים ליצירת קשר</h4>

                    <ul className="text-lg-right list-unstyled ml-4">
                      <li style={{color:"white"}}>
                      
                      ירוחם
                      <MDBIcon icon="map-marker-alt" className="pr-5" />
                    
                      </li>
                      <li style={{color:"white"}}>
                      
                          0525321247
                          <MDBIcon icon="phone" className="pr-4" />
                    
                      </li>
                      <li style={{color:"white"}}>
                      

                          Ortalcohen.p@gmail.com
                    
                      </li>
                    </ul>
                  
                
                    
              </MDBCardBody>
             
                       
                   
            </MDBCol>
            <MDBCol className="text-center" lg="8">
              <MDBCardBody className="form" style={{right:"50%",left:0,top:130,position:"absolute"}}>
                <form className="contact-form " onSubmit={sendEmail}>
                 
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
                 <a style={{top:"190%",right:"20%",left:0,position:"absolute"}}>
                 <MDBIcon  style={{color:"white"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                        <h6 style={{color:"white"}}> פייסבוק</h6>
                       </a> 
                       <a style={{top:"190%",right:"-10%",left:0,position:"absolute"}}>
                  <MDBIcon  style={{color:"white"}}fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                        <h6 style={{color:"white"}}>
                        אינסטגרם
                        </h6>
                 </a>
             
              </MDBCardBody>
              
            </MDBCol>
           
          </MDBRow>
        </MDBCard>
     
    
  );
}
