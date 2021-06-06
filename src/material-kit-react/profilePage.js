

import imagesStyle from "./imagesStyles";

const profilePage = {
  
  profile: {
    textAlign: "right",
    "& img": {
      maxWidth: "130px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, 10%, 0)",
      position:"absolute",
      top:"1%",
      right:"0%",
      left:"-80%",
      //transform:"translate(-50%,-50%)",
      
    }
  },
 
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    
  },
  mainRaised: {
    
  },
  title: {
    
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "40px",
    textDecoration: "none",
    right:" -50%"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePage;