import React from 'react';
import { MDBCard, MDBIcon, MDBBtn, MDBRow, MDBCol, } from 'mdbreact';
import studio from "../images/studio(2).jpg";
import { BrowserView, MobileView } from 'react-device-detect';
import sabout from "../images/sabout.jpg";

const NewStudioAbout = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <MDBRow>
            <MDBCol style={{ maxWidth: "40rem" }}>
                <MDBCard reverse>
                    <img src={sabout} alt="studio" />
                   <MobileView>
                    <p>
                      <MDBIcon style={{color:"#5F3301"}} icon="phone" className="pr-2" />0525321247
                  </p>
                   </MobileView>

                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default NewStudioAbout;