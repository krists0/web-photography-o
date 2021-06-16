
import React, { Component } from 'react';
import $ from 'jquery'; 
import ShowGallery from "./ShowGallery";

import Glitch from "../../src/Glitch";

class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    }
  }
 
  componentDidMount(){
    var i;
  
      let imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
      
          let filesAmount = input.files.length;
          for (i = 0; i < filesAmount; i++) {
            let reader = new FileReader();
            reader.onload = function(event) {
              $($.parseHTML("<img>")).css({'width' : '200px','height' : '200px'})
                .attr("src", event.target.result)
                .appendTo(placeToInsertImagePreview);
            };
            
            reader.readAsDataURL(input.files[i]);
         
          }
        }
      };
      $("#input-files").on("change", function() {
        console.log(""+"div.preview-images");
        imagesPreview(this, "div.preview-images");
      });
      
    //});
   
    
    
  }

    render() {
        return (
          
          <div >

            <div>
            <Glitch/>
            {/**
             * <ShowGallery></ShowGallery>
             
             */}
             
            </div>

        
        </div>
        
       
         
   
          
        );

    }
}



export default Galery;

/**
 * 
 * 
 *   <div>
                <h1>
                    Galery
                    <ImageUpload/>
                    jlkjkljlkjlk
                 <galleryhome/>
                 
                </h1>
            </div>
 */

 /**
  *  {
              
              pics.map((i)=>
              <img src={`data:image/jpeg;base64,${i.img.data}`} />
              )
            }
  */