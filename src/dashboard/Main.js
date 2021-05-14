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
import StudioAbout from "./StudioAbout";
import CarouselPageMobile from "./CaruselPageMobile";
import info from "../images/info.jpg";
import NewStudioAbout from "./NewStudioAbout";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBView, MDBBtn } from 'mdbreact';


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
         

      <div small="true" filter="true" image={require("../images/profile.jpg")}
        
      />
     

       
      {/**this is the description part */}
      <div className={classNames(classes.main, classes.mainRaised)}>
      <div style={{width:"40%",right:"-5%",position:"absolute",top:"150px"}}>
                <MDBBtn outline color="primary" className="w-25 p-3" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} >
                    <MDBIcon fab icon="facebook-f" className="light-blue-text" />
                            Facebook
                            </MDBBtn>
                    <MDBBtn color="default" outline color="pink" className="w-25 p-3" onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')}>
                    <MDBIcon icon="comments" className="pr-2" />
                        Instagram

                    </MDBBtn>
                </div>
        <div >
          <Grid item={true}  >
            <Grid item={true}  xs={12} sm={12} md={6}>
              <div className={classes.profile}  >             
                <BrowserView>
                <img src={profile}  alt="ortal" className={imageClasses} />
                
              
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
            
            
            
            <img src={info} alt="info" style={{width:"105%"}}/>
           <NewStudioAbout></NewStudioAbout>

          </div>

        </div>


        <div style={{
          width: "20%",
          position: "absolute",

          top: "0",
          left: "60px",
        }}>

          <BrowserView>

            <CarouselPage />
           
          </BrowserView>
         
        </div>
        <MobileView >
          <CarouselPageMobile />

        </MobileView>
       

      </div>
     
    </div>
  );
}
