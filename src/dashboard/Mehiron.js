
import React, { Component } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';
import Mehironim from "./Mehironim";

import MehironDialog from './MehironDialog';


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
   

    return (
      <div>
        <BrowserView>
          <Mehironim></Mehironim>
        </BrowserView>

        <MobileView>
         <MehironDialog></MehironDialog>
        </MobileView>
      </div>
    );

  }
}




export default Mehiron;

