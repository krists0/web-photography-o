import React from 'react';
import { MDBCard, MDBIcon,MDBRow, MDBCol, } from 'mdbreact';
import { MobileView } from 'react-device-detect';
import sabout from "../images/sabout.jpg";

const NewStudioAbout = () => {
    
    return (
        <MDBRow>
            <MDBCol style={{ maxWidth: "100%" }}>
                <MDBCard reverse>
                    <img src={sabout} alt="studio" style={{width:"100%"}} />
                   <MobileView>
                    <p>
                      <MDBIcon style={{color:"#5F3301"}} icon="phone" className="pr-1" />0525321247
                  </p>
                   </MobileView>

                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default NewStudioAbout;