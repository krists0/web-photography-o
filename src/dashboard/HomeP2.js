import React, { Component } from "react";

import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Galery from "../dashboard/Galery";
import Mehiron from "../dashboard/Mehiron";
import Album from "../dashboard/Albums";
import AddAlbums from "./AddAlbums";
import back from "../images/fam.jpg";
import '../react-slideshow-image/styles.css';

import Main2 from "./Main2";
import { BrowserView, MobileView } from 'react-device-detect';
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built by '}
            <Link color="inherit" >
                Christina Tsivileva
            </Link>
           
        </Typography>
    );
}


class HomeP2 extends Component {
    state = {
        value: 3,
        valueNav:0,
        openMenu: false,
        active: 0
    };
    
   

   

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
      
    

  render() {
   
     const { value } = this.state;
    
        

    return (
        <div  >
            <AppBar  position="static"  style={{ backgroundColor: "#fafafa",top:'50',float: 'right',position: 'fixed'}}>
            <BrowserView>
             <   h4 style={{top:10,position:"absolute",right:0,left:"-80%",color:"#424242"}}>Ortal Cohen</h4>
            </BrowserView>
           
           
                <Tabs  centered  value={value} onChange={this.handleChange}
                style={{color:"#424242",position:"flex"}}
                >
                    
                    <Tab textColor="inherit" label="גלריית תמונות" />
                    <Tab textColor="inherit" label="מחירון" />
                    <Tab textColor="inherit" label="צור קשר" />
                    <Tab textColor="inherit" label="ראשי" />
                {
                    /**
                        * <Tab variant="h6" textColor="inherit" label="ראשי" />
                    <Tab variant="h6" textColor="inherit" label="הוסף אלבום" />

                        */
                } 

                        
                </Tabs>
            </AppBar>

        
            
                    {value === 5 &&  <AddAlbums/>
                    }
                    {value === 4 &&  <TabContainer > </TabContainer>}
                    {value === 3 && <Main2/>}
                    {value === 2 && <Album/>}
                    {value === 1 && <Mehiron/>}
                    {value === 0 && <Galery/>}
                

                <MadeWithLove/>
  </div>
      
    );
  }
}



export default (HomeP2);
