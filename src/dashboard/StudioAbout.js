import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBView, MDBBtn } from 'mdbreact';
import studio from "../images/logo1.jpg";
const StudioAbout = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <MDBRow>
      <MDBCol style={{ maxWidth: "40rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '23rem' }} src={studio} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>הסטודיו שלי </MDBCardTitle>
            <h5 ><strong>ממוקם בירוחם</strong></h5>
            <MDBCardText>

                     את הסטודיו עיצבתי תוך מחשבה והשקעה עד הפרטים הקטנים.
                <p>
                </p> בסטודיו אביזרים ייחודיים ובפרטי לבוש מתאימים לתינוקות והריוניות. <p>
                  במרחק של שתי דקות נסיעה מהסטודיו נמצא אגם מדהים, בו אני משלבת צילומי משפחה בטבע המעניקים חוויה מרגשת בתפאורה טבעית ומושלמת.

                </p>
                <p>
                  אני מזמינה אתכם לחלוק איתי את הרגעים החשובים בחייכם.
                </p>

            </MDBCardText>
              <MDBBtn outline color="primary" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} >

            <MDBIcon fab icon="facebook-f" className="light-blue-text" />
                      Facebook
                    </MDBBtn>

            <MDBBtn color="default" outline color="pink" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')}>
            <MDBIcon icon="comments" className="pr-2" />
                Instagram

              </MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default StudioAbout;