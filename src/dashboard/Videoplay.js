//https://youtu.be/2fANyOAMIuI

import React, { Component } from 'react';

import ReactPlayer from 'react-player';







class Videoplay extends Component {


    render() {
        const {classes} = this.props;

        return (
            <div style={{position: "relative",
                paddingTop: "5% "/* Player ratio: 100 / (1280 / 720) */}}>
                   
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/2fANyOAMIuI'
              width='100%'
              height='200%'
            />
          </div>
        );

    }
}




export default Videoplay;

