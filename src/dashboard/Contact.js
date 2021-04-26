import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';


import profile from "../images/profile.jpg";

import Card from '@material-ui/core/Card';
import styles from "../material-kit-react/profilePage";
import SliderContact from "./SliderContact";

import Typography from '@material-ui/core/Typography';
import Videoplay from "./Videoplay";

import { Link } from "react-router-dom";
import about from "../images/about.jpg";




const useStyles = makeStyles(styles);




export default function Contact(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
    
      <div small filter  image={require("../images/profile.jpg")} 
      
      />
      {/**this is the description part */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <Grid justify="center">
              <Grid  xs={12} sm={12} md={6}>
                <div className={classes.profile}  >
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>אורטל כהן</h3>
                    <h4>צלמת ילדים,משפחה,ניו-בורן וסמאש קייק</h4>
                   
                    <Button onClick={() => openInNewTab('https://www.instagram.com/ortalcohen_photography/')} justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100063655145597')} justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={classes.description}
            
            style={{  flexGrow: "1",
          
                maxWidth: "600px",
                height: "1400px",
                overflow: 'hidden',}}
            
            >
              <h2>אודות</h2>
              <p>
                  
              ביום הולדת 31 שלי
              .אמיר שלי שאל אותי איזה מתנה אני מבקשת</p><p>
               .במהלך 7 שנות נישואין החלטנו שימי הולדת זאת הזדמנות להשקיע במתנות בעלות ערך
                .באותה התקופה, אני מגדלת את ליאוני שלי, בן החצי שנה בבית
             .היה לי זמן לחשוב מה הכי נכון בשבילי
                                        </p>
               <p>
                 ,אחרי לימודי עריכת דין מפרכים והתנסות מעשית 
               .הבנתי שהמקצוע לא משאיר הרבה מקום לגידול והשקעה בילדים שלי
                .לפחות לא כמו שאני רוצה
                </p>
                <p>
               .החלטתי ללכת עם הלב וביקשתי כמתנה, קורס צילום
                 התחלתי מסע מיוחד ונדהמתי לגלות כמה התחום הזה הוא אני!
                זו היתה סגירת מעגל בשבילי - לפני 5 שנים ביום ההולדת הראשון שלי אחרי שאדלי שלי נולדה ביקשתי מתנה,
                 איך לא, מצלמה❣
              .רציתי לתעד כל רגע איתה
               </p>
                <p>
                תיעוד מקפיא את הרגע ומשאיר זכרון מתוק לכל החיים.
                אין שלמה ממני לשלב בין שני עולמות שאליהם אני הכי מתחברת - תמונות וילדים.
                 אני אורטל, בת 31 אמא, אישה, עורכת דין והיום גם צלמת   
                    </p>
           
           
          </div>
            {/** 
            <div className={classes.description}
              style={{  flexGrow: "1",
           
              maxWidth: "700px",
              height: "1400px",
              overflow: 'hidden',}}
            >
            <img style={{width:"100%", 
              top: "0%",}} src={about} />
           
            </div>**/}
            </div>
           
          <div style={{width: "20%",height:"40%",
                position: "absolute",
                top: "0",
                left: "60px",
          }}>
            <SliderContact/>
            </div>
          
 
            
        </div>
        
         <MDBCard className="my-5 px-5 pb-5"
            
            style={{
              width: "55%",height:"43%",
              position: "absolute",
              top: "35%",
              right: "60px",
          
             }}
            >
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                  
                      <Videoplay style={{
                                     }} /> 
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </MDBView>
                  <MDBCardBody cascade className="text-center">
                    <h2 className="font-weight-bold">
                      <a > הסטודיו</a>
                    </h2>
                    <p>
                    
                      <a >
                        <strong>ממוקם בירוחם</strong>
                      </a>
                    
                    </p>
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
                <MDBContainer className="mt-5">
                                            
                                              הסטודיו שלי ממוקם בירוחם. <p>
                            את הסטודיו עיצבתי תוך מחשבה והשקעה עד הפרטים הקטנים. 
                            <p>
                            </p> בסטודיו אביזרים ייחודיים ובפרטי לבוש מתאימים לתינוקות והריוניות. <p>
                            במרחק של שתי דקות נסיעה מהסטודיו נמצא אגם מדהים, בו אני משלבת צילומי משפחה בטבע המעניקים חוויה מרגשת בתפאורה טבעית ומושלמת. 

                            </p>
                            <p>
                            אני מזמינה אתכם לחלוק איתי את הרגעים החשובים בחייכם.
                            </p>
                                                </p>
                                                
                </MDBContainer>
               
              </MDBCol>
            </MDBRow>
          
          </MDBCardBody>
    </MDBCard>
      </div>
      
          
    </div>
  );
}

/**
 *  <div className={classes.description}
            
            style={{  flexGrow: "1",
          
                maxWidth: "600px",
                height: "1400px",
                overflow: 'hidden',}}
            
            >
              <h2>אודות</h2>
              <p>
                  
              ביום הולדת 31 שלי
              .אמיר שלי שאל אותי איזה מתנה אני מבקשת</p><p>
               .במהלך 7 שנות נישואין החלטנו שימי הולדת זאת הזדמנות להשקיע במתנות בעלות ערך
                .באותה התקופה, אני מגדלת את ליאוני שלי, בן החצי שנה בבית
             .היה לי זמן לחשוב מה הכי נכון בשבילי
                                        </p>
               <p>
                 ,אחרי לימודי עריכת דין מפרכים והתנסות מעשית 
               .הבנתי שהמקצוע לא משאיר הרבה מקום לגידול והשקעה בילדים שלי
                .לפחות לא כמו שאני רוצה
                </p>
                <p>
               .החלטתי ללכת עם הלב וביקשתי כמתנה, קורס צילום
                 התחלתי מסע מיוחד ונדהמתי לגלות כמה התחום הזה הוא אני!
                זו היתה סגירת מעגל בשבילי - לפני 5 שנים ביום ההולדת הראשון שלי אחרי שאדלי שלי נולדה ביקשתי מתנה,
                 איך לא, מצלמה❣
              .רציתי לתעד כל רגע איתה
               </p>
                <p>
                תיעוד מקפיא את הרגע ומשאיר זכרון מתוק לכל החיים.
                אין שלמה ממני לשלב בין שני עולמות שאליהם אני הכי מתחברת - תמונות וילדים.
                 אני אורטל, בת 31 אמא, אישה, עורכת דין והיום גם צלמת   
                    </p>
           
           
          </div>
                     <img
                      src="https://i.ibb.co/m0NWX4k/studio.jpg"
                      alt=""
                      className="img-fluid"
                      widht="null"
                      height="300"
                      resizeMode="stretch"
                    />
 */