import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { BrowserView, MobileView } from 'react-device-detect';
import profile from "../images/profile.jpg";
import styles from "../material-kit-react/profilePage";
import CarouselPage from "./CarouselPage";

import info from "../images/info.jpg";
import NewStudioAbout from "./NewStudioAbout";
import {MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';


const useStyles = makeStyles(styles);




export default function Main(props) {
    const classes = useStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div >

                   
            {/**this is the description part */}
            <div className={classNames(classes.main, classes.mainRaised)}>
                <BrowserView>
                    <div style={{ width: "40%", right: "-5%", position: "absolute", top: "150px" }}>
                        
                        <p>
                      
                <ul className="text-lg-center grey-text  list-unstyled ml-4">
                  <li>
                    <p>
                      <MDBIcon icon="map-marker-alt" className="pr-2" />
                   ירוחם
                  </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="phone" className="pr-2" />0525321247
                  </p>
                  </li>
                  <li>
                    <p>

                      <h4>Ortalcohen.p@gmail.com</h4>
                    </p>
                  </li>
                     <li className="list-inline-item ">
                    <a href="#!" className="p-6 fa-lg w-ic ">
                        
                        <MDBIcon style={{color:"grey"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                        <h6 style={{color:"grey"}}> פייסבוק</h6>
                        
                        <MDBIcon style={{color:"grey"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                        <h6 style={{color:"grey"}}>
                        אינסטגרם
                        </h6>
                       
                    </a>
                    </li>
                  
                </ul>
                
                <hr className="hr-light my-4" />
                
             
                  </p>
                    </div>
                </BrowserView>
                
                <div >
                    <Grid item={true}  >
                        <Grid item={true} xs={12} sm={12} md={6}>
                            <div className={classes.profile}  >
                                <BrowserView>
                                    <img src={profile} alt="ortal" className={imageClasses} />


                                </BrowserView>


                            </div>

                        </Grid>

                    </Grid>

                    <div className={classes.description}

                        style={{

                            flexGrow: "1",
                            maxWidth: "600px",
                            overflow: 'hidden',
                        }}

                    >
                        <MobileView >
                            <img src={profile} alt="ortal" className={imageClasses} style={{
                                maxWidth: "90px",
                                width: "55%",
                                margin: "0 auto",
                                transform: "translate3d(0, -50%, 0)",
                                position: "absolute",
                                top: "-1%",
                                right: "1%",

                            }} />
                              <MobileView>
                          
                          <MDBIcon style={{top:"0.5%",position:"absolute",right:"80%"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                          <MDBIcon style={{top:"0.5%",position:"absolute",right:"86%"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                                              
                      </MobileView>

                        </MobileView>

                        <BrowserView>
                            <img src={info} alt="info" style={{ width: "102%" }} />
                            <NewStudioAbout></NewStudioAbout>

                        </BrowserView>



                    </div>

                </div>
                <MobileView>

                    <img src={info} alt="info"
                        style={{ width: "100%", right: "0", left: "0", top: "8px", }} />
                          <div className={classes.description}

style={{

    flexGrow: "1",
    maxWidth: "600px",
    overflow: 'hidden',
}}

>
                    <NewStudioAbout>
                    
                    </NewStudioAbout>
                    </div>
                         <CarouselPage />
                </MobileView>

                <div style={{
                    width: "20%",
                    position: "absolute",  top: "0", left: "60px",
                }}>

                    <BrowserView>

                        <CarouselPage />

                    </BrowserView>

                </div>
                

            </div>

        </div>
    );
}
