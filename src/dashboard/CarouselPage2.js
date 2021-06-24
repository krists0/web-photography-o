import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol } from
"mdbreact";

import sm1 from"../images/2.jpg";

import ms from "../images/shana.jpg";

import smash2 from "../images/smash2.jpg";
import smash3 from "../images/smash3.jpg";

import nb1 from "../nbimages/nb1.jpg";
import nb2 from "../nbimages/nb2.jpg";
import nb3 from "../nbimages/nb3.jpg";
import nb4 from "../nbimages/nb4.jpg";
import nb5 from "../nbimages/nb5.jpg";
import nb6 from "../nbimages/nb6.jpg";
import nb7 from "../nbimages/nb7.jpg";
import pr1 from "../primages/pr1.jpg";
import pr2 from "../primages/pr2.jpg";
import pr3 from "../primages/pr3.jpg";
import pr4 from "../primages/pr4.jpg";
import fk1 from "../fkimages/fk1.jpg";
import fk2 from "../fkimages/fk2.jpg";
import fk3 from "../fkimages/fk3.jpg";
import fk4 from "../fkimages/fk4.jpg";
import fk5 from "../fkimages/fk5.jpg";
import fk6 from "../fkimages/fk6.jpg";
const CarouselPage2 = () => {
  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol>
            <h5 style={{textAlign:"right",color:"#b2a57d"}}>צילומי ניו בורן</h5>
            <MDBCarousel
                style={{maxWidth:"100%"}}
                activeItem={1}
                length={7}
                showControls={true}
                showIndicators={true}
                
            >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                    <img
                     width="193" height="200"
                        className="d-block w-100"
                        src={nb1}
                        alt="First slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                   width="193" height="200"
                        className="d-block w-100"
                        src={nb2}
                        alt="Second slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={nb3}
                        alt="three slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={nb4}
                        alt="four slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                 <MDBCarouselItem itemId="5">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={nb5}
                        alt="five slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={nb6}
                        alt="six slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                    <MDBView>
                    <img
                    width="193" height="200"
                        className="d-block w-100"
                        src={nb7}
                        alt="seven slide"
                    />
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
             </MDBCarousel>
      </MDBCol>
            <MDBCol><h5 style={{textAlign:"right",color:"#b2a57d"}}> ילדים ומשפחה</h5>
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
                    src={fk1}
                    alt="First slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fk2}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fk3}
                    alt="Second slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fk4}
                    alt="Third slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fk5}
                    alt="Third slide"
                />
                </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="6">
                <MDBView>
                <img
                 width="193" height="200"
                    className="d-block w-100"
                    src={fk6}
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
            <MDBCol><h5 style={{textAlign:"right",color:"#b2a57d"}}>הריון</h5>
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
                          src={pr1}
                          alt="First slide"
                        
                      />
                      </MDBView>
           </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                      <MDBView>
                      <img
                     width="193" height="200"
                          className="d-block w-100"
                          src={pr2}
                          alt="Second slide"
                      />
                      </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                      <MDBView>
                      <img
                       width="193" height="200"
                          className="d-block w-100"
                          src={pr3}
                          alt="three slide"
                      />
                      </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                      <MDBView>
                      <img
                      width="193" height="200"
                          className="d-block w-100"
                          src={pr4}
                          alt="three slide"
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