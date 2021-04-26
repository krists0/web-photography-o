
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
//THIS IS THE PART OF SHOW SOME FHOTO AT THE ABOUT ME SECTION
import ariel from "../images/ariel.jpg";
import IMG1 from "../images/IMG_2302.jpg";
import MAD from "../images/IMG_9383.jpg";
import AR from "../images/IMG_0138.jpg";
import sm1 from"../images/2.jpg";
import sm2 from"../images/1.jpg";
import fam from "../images/family.jpg";
import mg2 from "../images/mad-girl2.jpg";
import boy2 from"../images/babyboy2.jpg";
import boyr from"../images/3.jpg";
class SliderContact extends Component {
  render() {
    const settings =  {
      autoplay: true,
      autoplaySpeed: 2200,
      centerPadding: 10,
      dots: true,
      duration: 100,
      initialSlide: true,
      shift: 3,
      arrows: false,
  
    };
    return (
      <div  style={{}}>
        <h5 style={{textAlign:"right",color:"#b2a57d"}}>צילומי ניו בורן</h5>
        <Slider { ...settings }>
          
                <img src={AR}  alt="photo"/>
                    <img src={MAD}  alt="photo"/>
                    <img src={IMG1}  alt="photo"/>
                    <img src={ariel}  alt="photo"/>
        </Slider>
        <h5 style={{textAlign:"right",color:"#b2a57d"}}>סמאש קייק</h5>
        <Slider { ...settings }>
          
                <img src={sm1}  alt="photo"/>
                    <img src={sm2}  alt="photo"/>
                   
        </Slider>
        <h5 style={{textAlign:"right",color:"#b2a57d"}}>ילדים</h5>
        <Slider { ...settings }>
          
                <img src={mg2} alt="photo"/>
                    <img src={boy2}  alt="photo"/>
                    <img src={boyr}  alt="photo"/>
                    <img src={ariel}  alt="photo"/>
        </Slider>
        <h5 style={{textAlign:"right",color:"#b2a57d"}}>משפחה</h5>
        <Slider { ...settings }>
          
                <img src={fam}  alt="photo"/>
                   
        </Slider>
      </div>
    );
  }
}


export default SliderContact;

