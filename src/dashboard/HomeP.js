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



import Contact from "./Contact";

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




const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1800,
        
        overflow: 'hidden',

    },
   
    textDense: {},
  

});


function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built by '}
            <Link color="inherit" href="https://material-ui.com/">
                Christina 
            </Link>
           
        </Typography>
    );
}


class HomeP extends Component {
    state = {
        value: 0,
        valueNav:0,
        openMenu: false,
        active: 0
    };
    
   

   

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
      
    

  render() {
   
    const { classes,...other } = this.props;
     const { value } = this.state;
    
        

    return (
        <div   style={{background:'#fff5e6',}} >
        <AppBar  position="static"  style={{ backgroundColor: '#c1b797',top:'50',float: 'right',position: 'fixed'}}

>

            <Tabs  centered  value={value} onChange={this.handleChange}
            style={{color:"#424242",}}
            >

                <Tab textColor="inherit" label="ראשי" />
                <Tab textColor="inherit" label="צור קשר" />
                <Tab textColor="inherit" label="מחירון" />
                <Tab textColor="inherit" label="גלריית תמונות" />
               {
                   /**
                    * <Tab variant="h6" textColor="inherit" label="ראשי" />
                <Tab variant="h6" textColor="inherit" label="הוסף אלבום" />

                    */
               } 
            </Tabs>
        </AppBar>

        <AppBar color="primary"  position="static" elevation={0} style={{
          backgroundImage:`url(${back})`,
         /** position: "relative",**/
        
          width: "100%",
          height: "350px",
          backgroundSize:" cover",
    
    }}>
        </AppBar>
        {}
                 {value === 5 &&  <TabContainer ><AddAlbums/></TabContainer>
                }
                 {value === 4 &&  <TabContainer > </TabContainer>}
                {value === 3 && <TabContainer><Galery/></TabContainer>}
                {value === 2 && <TabContainer ><Mehiron/></TabContainer>}
                {value === 1 && <TabContainer><Album/></TabContainer>}
                {value === 0 && <TabContainer ><Contact/></TabContainer>}
               
               


        
           
            <div>
        
    </div>

           

            
            <MadeWithLove/>
  </div>
      
    );
  }
}



export default (HomeP);
