

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Newnornm from "./Mehironim/Newnornm";
import Family from "./Mehironim/Family";

import TreeSix from './Mehironim/TreeSix';
import Six12 from './Mehironim/Six12';
import One from './Mehironim/One';
import Heraion from "./Mehironim/Heraion";
import Box from '@material-ui/core/Box';
import Mitsva from "./Mehironim/Mitsva";
import titleme from "../images/galleryback.png";
import DialogconMobile from "./DialogconMobile";
import CardActions from "@material-ui/core/CardActions";

class MehironDialog2 extends React.Component {

  render() {

    return (
        <div className="Pricess" style={{position:"flex"}}>
    
        
         
  <Grid style={{ width: "100%",backgroundImage:`url(${titleme})` ,top:"9%",position:"absolute"}}>
   
  
   <Heraion>
              </Heraion>
   <br/>
  
   <Newnornm></Newnornm>
   <br/>
   <TreeSix></TreeSix>
   <br/>
   <Six12></Six12>
   <br/>
  <One></One>
  <br/>

  <Family> </Family>
  <br/>

<Mitsva></Mitsva>
<br/>
<CardActions>

<DialogconMobile></DialogconMobile>
</CardActions>
 </Grid>
        
     
   
     
     
 
  

      </div>
    );
  }
}


export default MehironDialog2;

