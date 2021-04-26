
import React, { Component } from 'react';
import MehirN from "./MehirN";
import Button from '@material-ui/core/Button';
import MehironDash from "./MehironDash";

import Mehironim from "./Mehironim";
class Mehiron extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
   
    render() {
        const {classes} = this.props;

        return (
            <div>
                 
             <Mehironim></Mehironim>
            </div>
        );

    }
}




export default Mehiron;

