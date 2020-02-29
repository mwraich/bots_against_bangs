import React, { Component } from 'react';
import './homepage.css';
import { Button, Container, Row } from 'reactstrap';
import FortuneTelling from '../FortuneTelling';
import DecideMyOwnFate from '../DecideMyOwnFate';
import clippy from '../Images/clippy.png';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFortuneTeller: false,
      showSelectionPath: false,
    };
  }

  askAFortuneTeller = () => {
    if (this.state.showFortuneTeller && !this.state.showSelectionPath) {
      return <FortuneTelling />
    }
    if (this.state.showSelectionPath) {
      return null
    }
    return(
    <Button style={{marginTop: 40}} className="mr-3" onClick={() => this.setState({ showFortuneTeller: true, showSelectionPath: false })}>
      Ask A Fortune Teller
    </Button>
    )
  }

  decideMyOwnFate = () => {
    if ( this.state.showSelectionPath && !this.state.showFortuneTeller) {
      return <DecideMyOwnFate />
    }
    return(
      <Button style={{marginTop: 40}} onClick={() => this.setState({ showSelectionPath: true, showFortuneTeller: false })}>
      Decide My Own Fate
    </Button>
    )
  }

  render() {
    return (
      <div className="homepage fixed-top">
        {!this.state.showSelectionPath &&
        <h1 className='mt-3' style={{fontSize: 100}}> Should I Get Bangs? </h1>
        }
        
        <div>
          {this.askAFortuneTeller()}
          {this.decideMyOwnFate()}
        </div>
          
      </div>
    );
  }
}
export default HomePage;
