import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router';

import history from "../history";

import Button from "@material-ui/core/Button";

import {
  BrowserView,
  MobileView,
 
} from "react-device-detect";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
    top:0,
    left: 0,
    right:0,
    position:"absolute"
  },
  Logo: {
   
    top:0,
    left: 0,
    right:"0%",
    position:"absolute",
    fontSize: 22,
    color:"#676767"
  },
 
}));
const butt={
    border: "none",
    variant: "outlined",
    outline: "0",

};
const Header =props=> {
  const classes = useStyles();
  
  const [ setAnchorEl] = React.useState(null);
 
  const handleMenuClick=(PageUrl)=>{
    history.push(PageUrl);
   //setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
     
     
                <BrowserView>
                <AppBar 
                position="fixed"  style={{ top:"0%",backgroundColor: "#fafafa",float: 'right',position: 'fixed'}}>
        <Toolbar dir="rtl" >
                <Typography  className={classes.title}>
              <h3 style={{top:10,position:"absolute",right:0,left:"-80%",color:"#424242"}}>Otral Cohen</h3> 
              </Typography> 
              <Button style={butt}  onClick={()=>handleMenuClick("Home")}>ראשי</Button>
          <Button style={butt}  onClick={()=>handleMenuClick("Contact")}>צור קשר</Button>
            <Button style={butt}  onClick={()=>handleMenuClick("Prices")}>מחירון</Button>
          
            <Button style={butt}  onClick={()=>handleMenuClick("Gallery")}>גלריה</Button>
            </Toolbar>
      </AppBar>
        </BrowserView>
        <MobileView>
          <AppBar  position="fixed"  style={{ backgroundColor: "#fafafa",float: 'right',position: 'fixed'}}>
            <Toolbar dir="rtl">

           
        <Typography  >
           
            </Typography> 
            <Button style={butt} onClick={()=>handleMenuClick("Home")}>ראשי</Button>
          <Button style={butt} onClick={()=>handleMenuClick("Contactme")}>צור קשר</Button>
            <Button style={butt} onClick={()=>handleMenuClick("Pricess")}>מחירון</Button>
          
            <Button style={butt} onClick={()=>handleMenuClick("Gallery")}>גלריה</Button>
            </Toolbar>
          </AppBar>
        </MobileView>
                  
          
            
          
       
    </div>
  );
}

export default withRouter(Header);
