import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { BrowserView, MobileView } from 'react-device-detect';

import profile from "../images/profile.jpg";

import Card from '@material-ui/core/Card';
import styles from "../material-kit-react/profilePage";


import Typography from '@material-ui/core/Typography';
import Videoplay from "./Videoplay";

import { Link } from "react-router-dom";
import about from "../images/about.jpg";
import CarouselPage from "./CarouselPage";
import StudioAbout from "./StudioAbout";
import CarouselPageMobile from "./CaruselPageMobile";




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

      <div small filter image={require("../images/profile.jpg")}

      />
      {/**this is the description part */}
      <div className={classNames(classes.main, classes.mainRaised)}>

        <div >
          <Grid justify="center">
            <Grid xs={12} sm={12} md={6}>
              <div className={classes.profile}  >
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}
                    style={{
                      top: "20px",
                      transform: "translate3d(0, -85%, 0)",
                    }}
                  >אורטל כהן</h3>
                  <h4
                    style={{ transform: "translate3d(0, -50%, 0)", }}
                  >צלמת הריון, ניו בורן,ילדים ומשפחה </h4>

                </div>
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

            <StudioAbout />

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
         <CarouselPageMobile  />
            
          </MobileView>

      </div>


    </div>
  );
}
