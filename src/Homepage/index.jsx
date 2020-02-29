import React, { Component } from 'react';
import './homepage.css';
import { Button, Container, Row } from 'reactstrap';
import FortuneTelling from '../FortuneTelling';
import DecideMyOwnFate from '../DecideMyOwnFate';

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
    <Button className="mr-3" onClick={() => this.setState({ showFortuneTeller: true, showSelectionPath: false })}>
      Ask A fortune Teller
    </Button>
    )
  }

  decideMyOwnFate = () => {
    if ( this.state.showSelectionPath && !this.state.showFortuneTeller) {
      return <DecideMyOwnFate />
    }
    return(
      <Button onClick={() => this.setState({ showSelectionPath: true, showFortuneTeller: false })}>
      Decide My Own Fate
    </Button>
    )
  }

  render() {
    return (
      <div className="homepage fixed-top">
        {!this.state.showSelectionPath &&
        <h1 className='mt-3'> Should I get Bangs? </h1>
  }
          {this.askAFortuneTeller()}
          {this.decideMyOwnFate()}
      </div>
    );
  }
}
export default HomePage;
