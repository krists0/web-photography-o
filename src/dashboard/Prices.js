

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Newnornm from "./Mehironim/Newnornm";
import Family from "./Mehironim/Family";
import back from "../images/backmehir.png";
import TreeSix from './Mehironim/TreeSix';
import Six12 from './Mehironim/Six12';
import One from './Mehironim/One';
import Heraion from "./Mehironim/Heraion";
import Box from '@material-ui/core/Box';
import Mitsva from "./Mehironim/Mitsva";
import Dialogcon from "./Dialogcon";
import CardActions from "@material-ui/core/CardActions";
const grids1={
    width:"100%",
    position:"absolute",
    left:0,right:0,
    top:"30%"
};
const grids2={
    width:"100%",
    position:"absolute",
    left:"30%",right:0,
    top:"30%"
};
const grids3={
    width:"100%",
    position:"absolute",
    left:0,right:0,
    top:"30%"
};
const grids4={
    width:"100%",
    position:"absolute",
    left:0,right:0,
    top:"30%"
};

class Prices extends React.Component {

   
  render() {

    return (

      <div className="Prices">
    
     
    <img src={back} style={{width:"100%",position:"absolute",right:0,left:0,height:"800px"}}/>
  
   <Grid style={{width:"100%",position :"absolute",top:"22%"}}>
       
       <Box display="flex" justifyContent="center" m={1} p={1} >
       <Box p={6} >
       <Heraion>
                  </Heraion>
       </Box>
       <Box p={6} >
       <Newnornm></Newnornm>
       </Box>
       <Box p={6}>
        <TreeSix></TreeSix>
        </Box>
        <Box p={6}>
        <Six12></Six12>
        </Box>
        
     </Box>
    
     </Grid>
     <Grid style={{width:"100%",position :"absolute",top:"55%"}}>
      
      <Box display="flex" justifyContent="center" m={1} p={1} >
          <Box p={6} >
          <One></One>
          </Box>
          <Box p={6} >
          <Family></Family>
          </Box>
          <Box p={6}>
          <Mitsva></Mitsva>
          </Box>
         
    
    </Box>
    </Grid>
    <CardActions style={{position:"absolute",left:0,right:0,top:"93%"}}> <Dialogcon></Dialogcon></CardActions>
    
      </div>
    );
  }
}


export default Prices;


/**
 *  <Grid style={{width:"100%",position :"absolute",top:"-10%",height:"1200px"}}>
       
        <Box display="flex" justifyContent="center" m={1} p={1} >
        <Box p={6} >
        <Heraion>
                   </Heraion>
        </Box>
        <Box p={6} >
        <Newnornm></Newnornm>
        </Box>
        <Box p={6}>
        <TreeSix></TreeSix>
        </Box>
        <Box p={6}>
        <Six12></Six12>
        </Box>
        
      </Box>
     
      </Grid>
      <Grid style={{width:"100%",position :"absolute",top:"26%",height:"1200px"}}>
      
        <Box display="flex" justifyContent="center" m={1} p={1} >
            <Box p={6} >
            <One></One>
            </Box>
            <Box p={6} >
            <Family></Family>
            </Box>
            <Box p={6}>
            <Mitsva></Mitsva>
            </Box>
           
      
      </Box>
      </Grid>
 */