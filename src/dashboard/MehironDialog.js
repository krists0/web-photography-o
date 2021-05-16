

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardHeader from '@material-ui/core/CardHeader';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ContactUs from "./ContactUs";
import Divider from '@material-ui/core/Divider';
import titme from "../images/tit.jpg";
import Dialogcon from "./Dialogcon";

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogconMobile from './DialogconMobile';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import titleme from "../images/mehir.jpg";
import Slide from '@material-ui/core/Slide';
import ContactUsMobile from './ContactUsMobile';
const mehironOut = {

    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "320px",

    borderRadius: 200,
};
const mehironInGrid = {
    width: "88%",
    height: "360%",
    top: "410%",
    backgroundSize: " cover",
    transform: "translate3d(0, -95%, 0)",
    position: "absolute",
    backgroundColor: "white",
};
const mehiromInCard = {
    justify: 'center',
    alignContent: 'center',
    alignItems: 'center'
};

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

});



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const gridList = {
    width: 250,
    height: 50,
    backgroundColor: "none",
    justifyContent: "center",
    opacity: 0.5,

};




class MehironDialog extends React.Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            arr: [
                { name: "NEWBORN", isActive: false },
                { name: "2-6", isActive: false },
                { name: "6-9", isActive: false },
                { name: "ONE", isActive: false },
                { name: "OPEN", isActive: false },
                { name: "PRE", isActive: false },
                { name: "MITSVA", isActive: false }
            ]
        };
    }
    onClick(index) {
        let tmp = this.state.arr;
        tmp[index].isActive = !tmp[index].isActive;
        this.setState({ arr: tmp });
    }
    onClick2() {

    }
    render() {

        return (

            <div>
                <Grid item={true} >
                    <div style={{
                    }}>
                        <img src={titleme} alt="מחירון" style={{ width: "100%",height:"100px", justify: "center", position: "flex", backgroundImage: "cover" }} />
                    </div>

                    <CardHeader ></CardHeader>

                    {this.state.arr.map((el, index) =>

                        <Button className="shadow-box-example hoverable"
                            style={{
                                borderRadius: "50%",
                                border: "trans",
                                variant: "outlined",
                                outline: "0",

                                //   backgroundColor: "#fffacf",
                            }}


                            key={index} onClick={() => this.onClick(index)}
                        >
                            {(() => {
                                if (el.name == "NEWBORN") {
                                    return (
                                        <div >


                                            <img
                                                title="mehiron 0-3"
                                                src={require(`../images/elon2.jpg`).default}
                                                style={mehironOut}


                                                alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    מחירון ניו בורן
                                        <span />
                                                </h7>
                                            </span>
                                        </div>
                                    )

                                } else if (el.name == "2-6") {
                                    return (
                                        <div>

                                            <img src={require(`../images/three.jpg`).default}
                                                style={mehironOut} alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    6-3 חודשים
                                        <span />
                                                </h7>
                                            </span>
                                        </div>
                                    )
                                } else if (el.name == "6-9") {
                                    return (
                                        <div> <img src={require(`../images/six.jpg`).default}
                                            style={mehironOut} alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    6-12 חודשים
                                        <span />
                                                </h7>
                                            </span>
                                        </div>
                                    )
                                }
                                else if (el.name == "ONE") {
                                    return (
                                        <div> <img src={require(`../images/shana.jpg`).default}
                                            style={mehironOut} alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    גיל שנה
                                        <span />
                                                </h7>
                                            </span>
                                        </div>
                                    )
                                }
                                else if (el.name == "MITSVA") {
                                    return (
                                        <div> <img src={require(`../images/mitsva.jpg`).default}
                                            style={mehironOut} alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    בת מצווה
                                                          <span />
                                                </h7>
                                            </span>

                                        </div>
                                    )
                                }
                                else if (el.name == "OPEN") {
                                    return (
                                        <div> <img src={require(`../images/fam.jpg`).default}
                                            style={mehironOut} alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    צילומי משפחה
                                        <span />
                                                </h7>
                                            </span>

                                        </div>
                                    )
                                }
                                else if (el.name == "PRE") {
                                    return (
                                        <div> <img src={require(`../images/preg.jpg`).default}
                                            style={mehironOut}
                                            alt="my image" />
                                            <span >
                                                <h7
                                                    style={{
                                                        bottom: -10,
                                                        left: 0,
                                                        right: 0,
                                                        position: 'absolute',
                                                        color: "#5F3301"
                                                    }}

                                                >
                                                    הריון
                                        <span />
                                                </h7>
                                            </span>

                                        </div>
                                    )
                                }

                            })()}

                        </Button>


                    )}

                </Grid>

                {this.state.arr.map((el, index) =>
                    <div   >

                        {(() => {
                            if (el.name == "NEWBORN" && el.isActive) {
                                return (

                                    <Grid item={true} style={mehironInGrid}>

                                      <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                                <img src={require(`../images/elon2.jpg`).default} width="100%" />

                                                <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                        מחירון ניו בורן
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                        variant="body2" color="textSecondary" component="p">

                                                        <h3 >חבילה בסיסית - 500 ש"ח</h3>
                                                    צילום התינוק/ת בלבד
                                                    משך זמן צילום : כשעתיים
                                                    שני סטים של צילומים עם אביזרים מתחלפים
                                                    החלפה של שני פרטי לבוש
                                                    כל התמונות (עד 20) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                    <Divider variant="inset"  />


                                                        <h3>חבילה מורחבת- 600 ש"ח</h3>
                                                                צילום התינוק/ת + הורים
                                                    משך זמן צילום: כ-3  שעות
                                                    3 סטים של צילומים עם אביזרים מתחלפים
                                                    החלפה של 3 פרטי לבוש
                                                    כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה
                                                    <Divider variant="inset" />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>

                                    </Grid>
                                )

                            } else if (el.name == "2-6" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>
                                          <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                                <img src={require(`../images/three.jpg`).default} width="100%" />
                                                  <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון צילומי תינוקות 3-6
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                        variant="body2" color="textSecondary" component="p">

                                                        <h3>חבילה בסיסית - 400 ש"ח</h3>

                                                        צילום התינוק/ת בלבד
                                                        משך זמן צילום : שעה
                                                        שני סטים של צילומים עם אביזרים מתחלפים
                                                        החלפה של שני פרטי לבוש
                                                        כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                        <Divider variant="inset"  />


                                                                    <h3>חבילה מורחבת- 500 ש"ח</h3>
                                                                צילום התינוק/ת + הורים
                                                                משך זמן צילום: עד שעה וחצי
                                                                3 סטים של צילומים עם אביזרים מתחלפים
                                                                החלפה של 3 פרטי לבוש
                                                                כל התמונות (עד 40) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                        <Divider variant="inset"  />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>

                                       
                                    </Grid>
                                )
                            } else if (el.name == "6-9" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>
                                        <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                              <img src={require(`../images/six.jpg`).default} width="100%" />

                                                  <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון צילומי תינוקות 6-12
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                        variant="body2" color="textSecondary" component="p">

                                                       
                                                    <h3>חבילה בסיסית - 400 ש"ח</h3>
                                                    צילום התינוק/ת בלבד
                                                        משך זמן צילום : שעה
                                                        שני סטים של צילומים עם אביזרים מתחלפים
                                                        החלפה של שני פרטי לבוש
                                                        כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.

                                                        <Divider variant="inset"  />


                                                                    <h3>חבילה מורחבת- 500 ש"ח</h3>
                                                        צילום התינוק/ת + הורים
                                                        משך זמן צילום: עד שעה וחצי
                                                        3 סטים של צילומים עם אביזרים מתחלפים
                                                        החלפה של 3 פרטי לבוש
                                                        כל התמונות (עד 40) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.


                                        <Divider variant="inset"  />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>
                                        

                                    </Grid>
                                )
                            } else if (el.name == "ONE" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>

                                        <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                             <img src={require(`../images/IMG_9332.jpg`).default} width="100%" />


                                                  <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון גיל שנה
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                        variant="body2" color="textSecondary" component="p">

                                                       
                                            <h3>חבילה בסיסית - 400 ש"ח</h3>
                                            צילום הילד/ה בלבד (ללא עוגה)
                                            משך זמן צילום : חצי שעה
                                            שני סטים של צילומים עם אביזרים מתחלפים
                                            כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.




                                            <Divider variant="inset"  />

                                                    <h3>חבילה מורחבת- סמאש קייק 500 ש"ח</h3>
                                            צילום הילד/ה + בני המשפחה
                                            משך זמן צילום: עד שעה
                                            3 סטים של צילומים (2 מהם צילומים מקדימים ו1 עם עוגה)
                                            כל התמונות (עד 40) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.



                                            <Divider variant="inset"  />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                                <p>הצילומים לא כוללים עוגה - ניתן להזמין עוגה במחיר של 180 ש"ח מקונדיטורית שאני מפנה אליה</p>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>

                                       
                                    </Grid>
                                )
                            } else if (el.name == "MITSVA" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>
                                             <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                             <img src={require(`../images/mitsva3.jpg`).default} width="100%" />
                                             <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון בת מצווה
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                        variant="body2" color="textSecondary" component="p">

                                                       
                                            <h3>חבילה בסיסית - 500 ש"ח</h3>
                                                                משך זמן צילום : שעה
                                            שני לוקיישנים לבחירה
                                            כל התמונות (עד 20) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                                                    <Divider variant="inset" />


                                                            <h3>חבילה מורחבת- 600 ש"ח</h3>
                                                    משך זמן צילום: עד שעה וחצי
                                                    שלוש לוקיישנים לבחירה
                                                    כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.

                                            <Divider variant="inset" />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                               </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>

                                        
                                    </Grid>
                                )
                            } else if (el.name == "OPEN" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>
                                           <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                               <img src={require(`../images/fam.jpg`).default} width="100%" />

                                         
                                             <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון צילומי משפחה
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                                                                                    variant="body2" color="textSecondary" component="p">
                                                            <h3>חבילה בסיסית - 500 ש"ח</h3>



                                                            הורים + ילד
                                                            משך זמן צילום : שעה
                                                            שלוש לוקיישנים לבחירה
                                                            כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.

                                                            <Divider variant="inset"  />


                                                                        <h3>חבילה מורחבת- 600 ש"ח</h3>
                                                            הורים + שני ילדים
                                                            משך זמן צילום: עד שעה וחצי
                                                            שלוש לוקיישנים לבחירה
                                                            כל התמונות (עד 40) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                            <Divider variant="inset"  />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                               </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>
                                        
                                    </Grid>
                                )
                            } else if (el.name == "PRE" && el.isActive) {
                                return (
                                    <Grid item={true} style={mehironInGrid}>
                                            <Dialog fullScreen open={true} TransitionComponent={Transition}>
                                            <AppBar style={{backgroundColor:"#c1b797"}}>
                                                <Toolbar>
                                                    <IconButton edge="start"  key={index} onClick={() => this.onClick(index)} aria-label="close">
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <Typography variant="h6" >
                                                        Ortal cohen photograpy
                                                    </Typography>

                                                </Toolbar>
                                            </AppBar>
                                            <CardActionArea
                                                style={mehiromInCard}
                                            >
                                                <img src={require(`../images/preg.jpg`).default} width="100%" />

                                             <CardContent>

                                                    <Typography style={{textAlign:"center"}} gutterBottom variant="h5" component="h2">
                                                    מחירון צילומי הריון
                                                     </Typography>
                                                    <Typography
                                                        style={{textAlign:"center"}}
                                                                                                                    variant="body2" color="textSecondary" component="p">
                                                            
                                                    <h3>חבילה בסיסית - 500 ש"ח</h3>
                                                    מיקום :סטודיו או צילומי חוץ לבחירה
                                                        צילום ההריונית בלבד
                                                        משך זמן צילום : שעה
                                                        שני סטים של צילומים עם ביגוד מתחלף
                                                        כל התמונות (עד 30) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.
                                                        <Divider variant="inset"  />


                                                    <h3>חבילה מורחבת- 600 ש"ח</h3>
                                                        מיקום :סטודיו או צילומי חוץ לבחירה
                                                        צילום ההריונית ובן הזוג.
                                                        משך זמן צילום: עד שעה
                                                        3 סטים של צילומים עם ביגוד מתחלף
                                                        כל התמונות (עד 40) ישלחו באיכות הדפסה גבוהה למייל לאחר סינון ועריכה.


                                                        <Divider variant="inset"  />
                                                        <h3>תוספות</h3>

                                                               <p>אח בתוספת 100 ש"ח לכל חבילה</p> 
                                                 <p>חומר גלם לא נשלח</p>
                                                <p> אלבומים בתוספת תשלום (20*20 300 ש"ח, 25*25 400 ש"ח, 30*30 500 ש"ח)</p>
                                               </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                        </Dialog>

                                      
                                    </Grid>
                                )
                            }


                        })()}

                    </div>


                )}

                <CardActions>

                    <DialogconMobile></DialogconMobile>
                </CardActions>

            </div>
        );
    }
}


export default MehironDialog;