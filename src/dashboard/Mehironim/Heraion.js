
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const mehironOut = {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    variant: "outlined",
    borderRadius: 150,
    
    
  };
 
  const mehiromInCard = {
    justify: 'center',
    alignContent: 'center',
    alignItems: 'center',
    variant: "outlined",
  };
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Heraion() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{
                borderRadius: "50%",
                border: "trans",
                variant: "outlined",
                outline: "0",
              
              }}  onClick={handleClickOpen}>
         <div> 
                      <img alt="heraion1" src={require(`../../images/preg.jpg`).default}
                      style={mehironOut}  />
                      <span >
                        <h4
                          style={{
                            bottom: -22,
                            left: 0,
                            right: 0,
                            position: 'absolute',
                            color:"#5F3301"
                          }}

                        >
                          הריון
                                        <span />
                        </h4>
                      </span>

                    </div>
      </Button>
       <Dialog fullScreen open={open} onClose={handleClose}  TransitionComponent={Transition}>
                  <AppBar style={{backgroundColor:"#9e9e9e"}}>
                      <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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
                      <img alt="herion" src={require(`../../images/preg.jpg`).default} width="100%" />

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

    </div>
  );
}



           