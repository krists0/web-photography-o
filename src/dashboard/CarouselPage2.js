import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol } from
"mdbreact";
import ariel from "../images/ariel.jpg";
import sm1 from"../images/2.jpg";
import sm2 from"../images/1.jpg";
import fam from "../images/family.jpg";
import el from "../images/elon.jpg";
import el2 from "../images/elon2.jpg";
import bmad from "../images/newborn1.jpg";
import pmad from "../images/IMG-9332.jpg";
import child from "../images/six.jpg";
import mit3 from "../images/mitsva3.jpg";
import ms from "../images/shana.jpg";
import el3 from "../images/er.jpg";
import new2 from "../images/newborn2.jpg";
import child1 from "../images/child1.jpg";
import child2 from "../images/child2.jpg";
import child3 from "../images/child3.jpg";
import smash2 from "../images/smash2.jpg";
import smash3 from "../images/smash3.jpg";
import family2 from "../images/family2.jpg";
import family3 from "../images/family3.jpg";
import family4 from "../images/family4.jpg";
const CarouselPage2 = () => {
  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol>
            <h5 style={{textAlign:"right",color:"#b2a57d"}}>צילומי ניו בורן</h5>
            <MDBCarousel
                style={{maxWidth:"100%"}}
                activeItem={1}
                length={5}
                showControls={true}
                showIndicators={true}
                
            >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                    <img
                     width="193" height="200"
                        className="d-block w-100"
                        src={el}
                        alt="First slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                   width="193" height="200"
                        className="d-block w-100"
                        src={el3}
                        alt="Second slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={el2}
                        alt="three slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={bmad}
                        alt="four slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                 <MDBCarouselItem itemId="5">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={new2}
                        alt="five slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
             </MDBCarousel>
      </MDBCol>
            <MDBCol><h5 style={{textAlign:"right",color:"#b2a57d"}}>ילדים</h5>
        <MDBCarousel
            activeItem={1}
            length={6}
            showControls={true}
            showIndicators={true}
        
        >
            <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={pmad}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={sm2}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={ariel}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={child1}
                    alt="Third slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={child2}
                    alt="Third slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="6">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={child3}
                    alt="Third slide"
                />
                </MDBView>
            </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
        </MDBCol>
            <MDBCol><h5 style={{textAlign:"right",color:"#b2a57d"}}>סמאש קייק</h5>
        <MDBCarousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
        >
            <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={sm1}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={ms}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={smash2}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={smash3}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            
            </MDBCarouselInner>
        </MDBCarousel></MDBCol>
            <MDBCol><h5 style={{textAlign:"right",color:"#b2a57d"}}>משפחה</h5>
        <MDBCarousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
            
        >
            <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fam}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            
            <MDBCarouselItem itemId="3">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={family2}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={family3}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
             <MDBCarouselItem itemId="2">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={family4}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            
            </MDBCarouselInner>
        </MDBCarousel></MDBCol>
           
            </MDBRow>
        
      
       
      
       
    </MDBContainer>
  );
}

export default CarouselPage2;