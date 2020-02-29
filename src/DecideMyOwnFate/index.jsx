import React, { Component } from 'react';
import sample from 'lodash.sample';
import MagicBall from '../Images/MagicBall.svg';
import FortuneTellingBall from '../Images/FortuneTellingBall.svg';
import './style.css';
import { Button } from 'reactstrap'

const NOT_OKAY = 'NOT_OKAY'
const IM_OKAY = 'IM_OKAY'
const IM_POSITIVE = 'IM_POSITIVE'
const STOP_ASKING = 'STOP_ASKING'
const I_GOT_DUMPED = 'I_GOT_DUMPED'
const FOREVER_ALONE = 'FOREVER_ALONE'


class DecideMyOwnFate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  myDecisions = () => {
    if (this.state.step === 0) {
      return(
        <div>
          <h3>Are you Doing Alright?</h3>
          <Button onClick={() => this.setState({step: IM_OKAY})}
          className='mr-3'>Yes</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No</Button>
        </div>
      )
    }
    if (this.state.step === NOT_OKAY) {
      return(
        <h1>DON'T GET BANGS</h1>
      )
    }
    if (this.state.step === IM_OKAY) {
      return(
        <div>
          <h3>Are you SURE</h3>
          <Button onClick={() => this.setState({step: IM_POSITIVE})}
          className='mr-3'>Yes, I'm Positive</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No</Button>
        </div>
      )
    }
    if (this.state.step === IM_POSITIVE) {
      return(
        <div>
          <h3>Are you REALLY REALLY SURE</h3>
          <Button onClick={() => this.setState({step: STOP_ASKING})}
          className='mr-3'>Yes, STOP ASKING</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No</Button>
        </div>
      )
    }
    if (this.state.step === STOP_ASKING) {
      return(
        <div>
          <h2>Wow, just wanted to make sure, jeeze</h2>
          <h2>Did you get out of a relationship recently?</h2>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          className='mr-3'>Maybe. I don't want to talk about it</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No, I've been forever alone</Button>
          <Button></Button>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div>
        <h1> I think we need to talk</h1>
        {this.myDecisions()}
      </div>
    );
  }
}
export default DecideMyOwnFate;
