import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBView, MDBBtn } from 'mdbreact';
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
            <img src={sabout} alt="studio"/>
           

        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default NewStudioAbout;