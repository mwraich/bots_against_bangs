import React, { Component } from 'react';
import MagicBall from '../Images/MagicBall.svg'
import FortuneTellingBall from '../Images/FortuneTellingBall.svg'
import sample from 'lodash.sample';

const FORTUNE_RESPONSE = [
"It is not adviseable.",
"It's a no for me, dog.",
"Girl, no. ",
"Don't you dare.",
"Are you okay?",
"This idea will pass.",
"Not this again.",
"Go to therapy. ",
"Ask again later.",
"Remember last time?",
"Outlook not so good",
"It is certain...ly a bad idea",
"Let's sleep on it.",
"Call your BFF.",
"I'm not convinced.",
"Noooooooooope.",
"No, no, no.",
"Learn from my mistakes",
]

class FortuneTelling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFortune: null
    }
  }

  setFortune = () => {
    this.setState({ currentFortune: sample(FORTUNE_RESPONSE)});
  };

  render() {
  return(
    <div>
      <img src={FortuneTellingBall}
      onClick={this.setFortune}
      style={{'height': '360px'}}
      alt='fortune telling ball'
      />
      {this.state.currentFortune}
      </div>
  )
  }
}
export default FortuneTelling