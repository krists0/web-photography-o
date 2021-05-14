

import imagesStyle from "./imagesStyles";

const profilePage = {
  
  profile: {
    textAlign: "right",
    "& img": {
      maxWidth: "200px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
      position:"absolute",
      top:"0%",
      right:"10%",
      //transform:"translate(-50%,-50%)",
      
    }
  },
  description: {
    
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    //color: "#999",
    color:"#616161",
    textAlign: "center !important",
    marginTop:"5%",
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-120px 0px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
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