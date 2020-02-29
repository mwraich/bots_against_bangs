import React, { Component } from 'react';
import sample from 'lodash.sample';
import MagicBall from '../Images/MagicBall.svg';
import FortuneTellingBall from '../Images/FortuneTellingBall.svg';
import './style.css';
import { Button, Row, Container } from 'reactstrap'

const NOT_OKAY = 'NOT_OKAY'
const IM_OKAY = 'IM_OKAY'
const IM_POSITIVE = 'IM_POSITIVE'
const STOP_ASKING = 'STOP_ASKING'
const DONT_WANNA_TALK_ABOUT_IT = 'DONT_WANNA_TALK_ABOUT_IT'
const EVERYTHING_IS_FINE = 'EVERYTHING_IS_FINE'
const AMAZING = 'AMAZING'
const NOT_LYING = 'NOT_LYING'
const WONDERFUL = 'WONDERFUL'
const FINAL = 'FINAL'

const NO_BANGS = [
  "https://thumbs.gfycat.com/UniformZanyGoitered-size_restricted.gif",
  "https://media.giphy.com/media/g0pZt4jizASYVkRPRi/giphy.gif",
  "https://media.giphy.com/media/Ntbuf4wCW5EzK/giphy.gif",
  "https://media.giphy.com/media/8rElpbqvEqnxAoGai4/giphy.gif",
  "https://media.giphy.com/media/3gXGp5spKXwr2SwpIQ/giphy.gif"
]
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
          <h1> I think we need to talk</h1>
          <img src="https://media.giphy.com/media/xT5LMywOTMWtK7iqSA/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: IM_OKAY})}
          className='mr-3'>I'm really good</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >I feel like shit</Button>
          </Row>
        </div>
      )
    }
    if (this.state.step === NOT_OKAY) {
      return(
        <div>
        <img src={sample(NO_BANGS)}/>
        <h1>DON'T GET BANGS</h1>
        </div>
      )
    }
    if (this.state.step === IM_OKAY) {
      return(
        <div>
          <h3>Are you SURE</h3>
          <img src="https://media.giphy.com/media/NXOF5rlaSXdAc/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: IM_POSITIVE})}
          className='mr-3'>Yes, I'm Positive</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No</Button>
          </Row>
        </div>
      )
    }
    if (this.state.step === IM_POSITIVE) {
      return(
        <div>
          <h3>Are you REALLY REALLY SURE</h3>
          <img src="https://media.giphy.com/media/KtbPylMXJ6IPS/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: STOP_ASKING})}
          className='mr-3'>Yes, STOP ASKING</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No</Button>
          </Row>
        </div>
      )
    }
    if (this.state.step === STOP_ASKING) {
      return(
        <div>
          <h2>Wow, just wanted to make sure, jeeze</h2>
          <h2>Did you get out of a relationship recently?</h2>
          <img src="https://media.giphy.com/media/3gNotAoIRZsb9UHPnj/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: DONT_WANNA_TALK_ABOUT_IT})}
          className='mr-3'>Maybe. I don't want to talk about it</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >No, I've been forever alone</Button>
          </Row>
        </div>
      )
    }
    if (this.state.step === DONT_WANNA_TALK_ABOUT_IT) {
      return(
        <div>
          <h3>Okay, touch touchy</h3>
          <h2>How are things at home?</h2>
          <img src="https://media.giphy.com/media/3osxY8lmLf0SvhYbBe/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: EVERYTHING_IS_FINE})}
          className='mr-3'>Everything is Fine</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >Not gonna lie, it's been rough</Button>
          </Row>
        </div>
      )
    }
    if (this.state.step === EVERYTHING_IS_FINE) {
      return(
        <div>
          <h3>So nothing weird or emotional is happening with you right now?</h3>
          <img src="https://media.giphy.com/media/hrX2NS8WDYCCdlof8w/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: AMAZING})}
          className='mr-3'>My life is AMAZING</Button>
          <Button onClick={() => this.setState({step: NOT_OKAY})}
          >There was that one thing...</Button>
          </Row>
        </div>
      )
    }
      if (this.state.step === AMAZING) {
        return(
          <div>
            <h3>Why are you lying to me?</h3>
            <img src="https://media.giphy.com/media/11q2f8tniG9Rwk/giphy.gif"/>
            <Row className='justify-content-center mt-2'>
            <Button onClick={() => this.setState({step: NOT_LYING})}
            className='mr-3'>I'M NOT LYING</Button>
            </Row>
          </div>
        )
      }
        if (this.state.step === NOT_LYING) {
          return(
            <div>
              <h3>Why are you lying to YOURSELF?!</h3>
              <img src="https://media.giphy.com/media/cmn4UMlgUlYVG/giphy.gif"/>
              <Row className='justify-content-center mt-2'>
              <Button onClick={() => this.setState({step: WONDERFUL})}
              className='mr-3'>EVERYTHING IS WONDERFUL</Button>
              </Row>
            </div>
          )
    }
    if (this.state.step === WONDERFUL) {
      return(
        <div>
          <h3>Bangs won't make the hurt go away</h3>
          <img src="https://media.giphy.com/media/TIPGPI8EW5ZjZ6ed21/giphy.gif"/>
          <Row className='justify-content-center mt-2'>
          <Button onClick={() => this.setState({step: FINAL})}
          className='mr-3'>Okay, you're right</Button>
          </Row>
        </div>
      )
  }
  if (this.state.step === FINAL) {
    return(
      <div>
    <h3>For real, don't get bangs</h3>
    <h3>Talk to a therapist or a loved one if you get the urge again</h3>
    <img src='https://media1.tenor.com/images/3459d967a807130e5e36d267a8c9eb52/tenor.gif'/>
    </div>
    )
  }
    return null
  }

  render() {
    return (
      <div>
        {(this.state.step != 0) &&
      <Container>
      <Button onClick={() => this.setState({step: 0})}>LETS START OVER</Button>
      </Container>
  }
      <Container style={{'margin-top': '5%'}}>
        {this.myDecisions()}
      </Container>
      </div>
    );
  }
}
export default DecideMyOwnFate;
