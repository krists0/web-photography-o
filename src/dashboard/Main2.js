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
import CarouselPage2 from "./CarouselPage2";


import {MDBIcon } from 'mdbreact';


const useStyles = makeStyles(styles);




export default function Main2(props) {
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
        <div  >

                   
            {/**this is the description part */}
            <div className={classNames(classes.main, )}>
                
               
                  

                        <BrowserView>
                          <Grid item={true}  >
                        <Grid item={true} xs={12} sm={12} md={6}>
                            <div className={classes.profile}  >
                                <BrowserView>

                                    <img src={profile} alt="ortal" className={imageClasses} />

                                </BrowserView>


                            </div>

                        </Grid>

                    </Grid>

                    
                     
                                    <img src={require("../images/Page1.png").default} alt="orta1l" style={{width :"105%",position:"static",left:0,right:0,top:"0"}} />
                                                <img src={require("../images/Page2.png").default} alt="ortal2"  style={{width :"100%",left:0,right:0,top:0}} />
                                                <img src={require("../images/Page3.png").default} alt="ortal3"  style={{width :"100%",left:0,right:0,top:0}} />
                                                <img src={require("../images/Page4.png").default} alt="ortal4"   style={{width :"100%",left:0,right:0,top:0}}/>
                                                <div style={{
                                                    width: "70%",
                                                    position: "absolute",  top: "60%", left: "14%",right:0,
                                                }}>
                                                        <CarouselPage2  />
                                                </div>
                                            
                                                <img src={require("../images/Page5.png").default} alt="ortal5"  style={{width :"100%",left:0,right:0,top:0}} />
                                                <img src={require("../images/Page6.png").default} alt="ortal6"   style={{width :"100%",left:0,right:0,top:0}}/>
                                    
                                                <li className="list-inline-item " style={{position:"absolute",top:"96%",left:0,right:0,}}>
                                <a href="#!" className="p-6 fa-lg w-ic ">
                                    
                                    <MDBIcon style={{color:"grey"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                                    <h6 style={{color:"grey"}}> פייסבוק</h6>
                                    
                                    <MDBIcon style={{color:"grey"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                                    <h6 style={{color:"grey"}}>
                                    אינסטגרם
                                    </h6>
                                
                                </a>
                                </li>
                        </BrowserView>


               <MobileView>
                            <img src={require("../images/Pagem2.png").default} alt="orta1lm" style={{width :"105%",position:"static",left:0,right:0,top:"0"}} />
                            <li className="list-inline-item " style={{position:"absolute",top:"15%",left:0,right:0,}}>
                               
                                <MDBIcon style={{color:"grey"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                                <h6 style={{color:"grey"}}> פייסבוק</h6>  
                                <MDBIcon style={{color:"grey"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                                <h6 style={{color:"grey"}}>
                                                    אינסטגרם
                            </h6>
                                                    
                              
                                                
                           
                        </li>    
                    <img src={require("../images/Pagem3.png").default} alt="ortal2m"  style={{width :"100%",left:0,right:0,top:0}} />
                        <img src={require("../images/Pagem4.png").default} alt="ortal3m"  style={{width :"100%",left:0,right:0,top:0}} />
                        <img src={require("../images/Pagem5.png").default} alt="ortal4m"   style={{width :"100%",left:0,right:0,top:0}}/>
                       
                        <div style={{
                                                            
                                    position: "absolute",  top: "37%", left: 0,right:0,
                                                            }}>
                                                                    <CarouselPage />
                                                            </div>
                                                        
                    <img src={require("../images/Pagem7.png").default} alt="ortal5m"   style={{width :"100%",left:0,right:0,top:0}}/>                                               
                        <img src={require("../images/Pagem9.png").default} alt="ortal6m"   style={{width :"100%",left:0,right:0,top:0}}/>
                        <li className="list-inline-item " style={{position:"absolute",top:"93%",left:0,right:0,}}>
                            <a href="#!" className="p-6 fa-lg w-ic ">
                            <MDBIcon style={{color:"grey"}} fab icon="facebook" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} />
                            <h6 style={{color:"grey"}}> פייסבוק</h6>
                                                
                            <MDBIcon style={{color:"grey"}} fab icon="instagram" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} />
                            <h6 style={{color:"grey"}}>
                                                אינסטגרם
                        </h6>
                                            
                        </a>
                        </li>      
               </MobileView>

            </div>

        </div>
    );
}


