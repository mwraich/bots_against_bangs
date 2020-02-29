import React, { Component } from 'react';
import sample from 'lodash.sample';
import MagicBall from '../Images/MagicBall.svg';
import FortuneTellingBall from '../Images/FortuneTellingBall.svg';
import './style.css';

const FORTUNE_RESPONSE = [
  'It is not adviseable.',
  "It's a no for me, dog.",
  'Girl, no. ',
  "Don't you dare.",
  'Are you okay?',
  'This idea will pass.',
  'Not this again.',
  'Go to therapy. ',
  'Ask again later.',
  'Remember last time?',
  'Outlook not so good',
  'It is certain...ly a bad idea',
  "Let's sleep on it.",
  'Call your BFF.',
  "I'm not convinced.",
  'Noooooooooope.',
  'No, no, no.',
  'Learn from my mistakes',
];

class FortuneTelling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFortune: null,
    };
  }

  setFortune = () => {
    this.setState({ currentFortune: sample(FORTUNE_RESPONSE)});
  };

  render() {
    if (this.props.isVisible) {
      return(
      <div>
        <img
          src={FortuneTellingBall}
          onClick={this.setFortune}
          style={{ height: '360px' }}
          alt="fortune telling ball"
        />
        <div>
          <h2>{this.state.currentFortune}</h2>
        </div>
      </div>
      )
    }
    return null;
  }
}
export default FortuneTelling;
