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
import ContactUs from './ContactUs';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'#c1b797',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialogcon() {
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
      <Button variant="outlined" color="grey"  style={{
                        border:"trans",
                        variant:"outlined",
                        outline:"0",
                    }} onClick={handleClickOpen}>
        צור קשר
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Ortal cohen photograpy
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
       <ContactUs/>
       </Typography>
        
      </Dialog>
    </div>
  );
}