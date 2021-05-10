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




const useStyles = makeStyles(styles);




export default function Contact(props) {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );


 

  return (
    <div >

      <div small="true" filter="true" image={require("../images/profile.jpg")}

      />
      {/**this is the description part */}
      <div className={classNames(classes.main, classes.mainRaised)}>

        <div >
          <Grid item={true}  >
            <Grid item={true}  xs={12} sm={12} md={6}>
              <div className={classes.profile}  >
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <BrowserView>
                  <div className={classes.name}>
                    <h3 className={classes.title}
                      style={{
                        top: "20px",
        
                      }}
                    >אורטל כהן</h3>
                    <h4>צלמת הריון, ניו בורן,ילדים ומשפחה </h4>
                  </div>
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
              
              <h4 style={{marginTop:"80px",color:"#462803"}} >אורטל כהן</h4>
              <h5 style={{color:"#462803"}}>צלמת הריון, ניו בורן,ילדים ומשפחה </h5>
            </MobileView>
            <h2>אודות</h2>
            <p>
         
              ביום הולדת 31 שלי
               .אמיר שלי שאל אותי איזה מתנה אני מבקשת
            
               
               </p><p>
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
           . מאז ומתמיד ראיתי את העולם דרך תמונות אז החלטתי ללכת עם הלב,וביקשתי כמתנה קורס צילום
             
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
          <CarouselPageMobile />

        </MobileView>

      </div>


    </div>
  );
}
