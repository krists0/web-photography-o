import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ContactUsMobile from './ContactUsMobile';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#9e9e9e',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogconMobile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{}}>
      <Button variant="outlined"   style={{
         
                        border:"trans",
                        variant:"outlined",
                        outline:"0",
                    }} onClick={handleClickOpen}>
        צור קשר
      </Button>
      <Dialog style={{}} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="#00000" onClick={handleClose} aria-label="close">
              <CloseIcon style={{color:"#fafafa"}} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <h5 style={{color:"#fafafa"}}>
            Ortal cohen photograpy
            </h5>  
            </Typography>
            <Button style={{                     
                       border:"trans",
                       variant:"outlined",
                       outline:"0",
                   }}  color="inherit"  onClick={handleClose}>
              סגור
            </Button>
          </Toolbar>
        </AppBar>
       <Typography>
      <ContactUsMobile/>
       </Typography>
        
      </Dialog>
    </div>
  );
}