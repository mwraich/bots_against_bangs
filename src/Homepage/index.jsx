import React, { Component } from 'react';
import './homepage.css';
import { Button } from 'reactstrap';
import FortuneTelling from '../FortuneTelling';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFortuneTeller: false,
      showSelectionPath: false,
    };
  }

  render() {
    return (
      <div className="homepage fixed-top">
        <h1> Should I get Bangs? </h1>
        <Button onClick={() => this.setState({ showFortuneTeller: true })}>Ask A fortune Teller</Button>
        <FortuneTelling isVisible={this.state.showFortuneTeller} />
      </div>
    );
  }
}
export default HomePage;
