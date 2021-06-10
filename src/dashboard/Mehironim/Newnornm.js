
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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

export default function Newnornm() {
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
                outline: "0", //   backgroundColor: "#fffacf",
              }}  onClick={handleClickOpen}>
    
        <div >
                      <img
                        title="mehiron 0-3"
                        src={require(`../../images/elon.jpg`).default}
                        style={mehironOut}

                        alt="1" />
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
                          מחירון ניו בורן
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
                                                <img alt="elon" src={require(`../../images/elon2.jpg`).default} width="100%" />

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
                
    </div>
  );
}



           