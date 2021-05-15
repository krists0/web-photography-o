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
                        <MDBBtn outline color="primary" className="w-10 p-3" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} >
                            <MDBIcon fab icon="facebook-f" className="light-blue-text" />
                                        Facebook
                                        </MDBBtn>
                        <MDBBtn color="default" outline color="pink" className="w-10 p-3" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')}>
                            <MDBIcon icon="comments" className="pr-2" />
                                    Instagram

                                </MDBBtn>
                    </MobileView>

                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default NewStudioAbout;