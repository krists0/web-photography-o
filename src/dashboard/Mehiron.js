
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import MehironDash from "./MehironDash";
import { BrowserView, MobileView } from 'react-device-detect';
import Mehironim from "./Mehironim";
import MehironimMobile from './MehironimMobile';
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
    const { classes } = this.props;

    return (
      <div>
        <BrowserView>
          <Mehironim></Mehironim>
        </BrowserView>

        <MobileView>
          <MehironimMobile>

          </MehironimMobile>
        </MobileView>
      </div>
    );

  }
}




export default Mehiron;

