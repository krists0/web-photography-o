
import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Glitch from '../Glitch';

import { photos } from "./photos";

class ShowGallery extends Component {
  render() {
 
    return (
      <div className="Gallery">
        <Glitch></Glitch>
        <Gallery photos={photos}  />
       
      </div>
    );
  }
}


export default ShowGallery;

//<Gallery photos={photos}  />
      