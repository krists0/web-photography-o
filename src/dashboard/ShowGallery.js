
import React, { Component } from 'react';
import Gallery from "react-photo-gallery";

import { photos } from "./photos";

class ShowGallery extends Component {
  render() {
 
    return (
      <div >
        <Gallery photos={photos}  />
       
      </div>
    );
  }
}


export default ShowGallery;

//<Gallery photos={photos}  />
      