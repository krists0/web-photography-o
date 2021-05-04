import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import ariel from "../images/ariel.jpg";
import IMG1 from "../images/IMG_2302.jpg";
import MAD from "../images/IMG_9383.jpg";
import AR from "../images/IMG_0138.jpg";
import AR2 from "../images/IMG_0138.jpg";
import sm1 from"../images/2.jpg";
import sm2 from"../images/1.jpg";
import fam from "../images/family.jpg";
import mg2 from "../images/mad-girl2.jpg";
import boy2 from"../images/babyboy2.jpg";
import boyr from"../images/3.jpg";
import madgirl from "../images/madgirl.jpg";

const CarouselPage = () => {
  return (
    <MDBContainer>
        <h5 style={{textAlign:"right",color:"#b2a57d"}}>צילומי ניו בורן</h5>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={AR2}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={madgirl}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={ariel}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
      <h5 style={{textAlign:"right",color:"#b2a57d"}}>ילדים</h5>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={boy2}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={boyr}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={ariel}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={mg2}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <h5 style={{textAlign:"right",color:"#b2a57d"}}>סמאש קייק</h5>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={sm1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={sm2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
        
        
        </MDBCarouselInner>
      </MDBCarousel>
      <h5 style={{textAlign:"right",color:"#b2a57d"}}>משפחה</h5>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={fam}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
         
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;