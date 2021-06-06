
import React, { Component } from 'react';


import ContactUs from "./ContactUs";
import back from "../images/backcontact.png";
import { BrowserView, MobileView } from 'react-device-detect';
import ContactUsMobile from './ContactUsMobile';
class Albums extends Component {


    render() {
       
        return (
            <div>
                <BrowserView>
               
                <ContactUs ></ContactUs>
          
                    
                </BrowserView>
                <MobileView >
                    <ContactUsMobile/>
                </MobileView>
                
                
            </div>
        );

    }
}




export default Albums;

