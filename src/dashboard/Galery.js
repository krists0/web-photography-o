
import React, { Component } from 'react';



import $ from 'jquery'; 

//import ImgDisplay from "./ImgDisplay";
//import Googleg from "../../Googleg";
import ShowGallery from "./ShowGallery";
//import List from "./List";
import Glitch from "../../src/Glitch";
//const array=[];
class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    }
  }
 
  componentDidMount(){
    var i;
  
    //$(document).ready(function() {
      let imagesPreview = function(input, placeToInsertImagePreview) {
        console.log("++++++++++++files_id"+input.filesAmount);
        if (input.files) {
          console.log("===="+input.files);
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
        console.log("jgjhgjhgjhgj========+"+"div.preview-images");
        imagesPreview(this, "div.preview-images");
      });
      
    //});
   
    
    
  }

    render() {
        const {classes} = this.props;
       // const pics=this.props;
       // console.log("===>"+this.props.photos);
        

        const file = this.props.file;
      
        return (
          
          <div>

            <div>
            <Glitch/>
             <ShowGallery></ShowGallery>
             
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