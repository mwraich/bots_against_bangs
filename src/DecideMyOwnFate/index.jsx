import React, { Component } from 'react';
import sample from 'lodash.sample';
import MagicBall from '../Images/MagicBall.svg';
import FortuneTellingBall from '../Images/FortuneTellingBall.svg';
import './style.css';

class DecideMyOwnFate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isVisible) {
      return ('decide my own fate');
    }
    return null;
  }
}
export default DecideMyOwnFate;
