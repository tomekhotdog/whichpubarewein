import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles.css';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import DateUtils from './DateUtils.js';
import PubUtils from './PubUtils.js';

class Pub extends Component {
  state = {
    currentPubNumber: 0,
 
  }

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }
  render() {

    //var currentPubNumber = DateUtils.getCurrentPubNumber();
    var currentTimeString = (Date.now()).toString()

    return (
      <div className="Pub">

        <p className="App-intro">
          Current time: {(new Date).toString()}
        </p>

        <p className="App-intro">
          Time left until the start:
        </p>

        <FlatButton label={"Days left: " + DateUtils.getDaysLeft().toString()} />
        <FlatButton label={"Hours left: " + DateUtils.getHoursLeft().toString()} />
        <FlatButton label={"Minutes left: " + DateUtils.getMinutesLeft().toString()} />
        <FlatButton label={"Seconds left: " + DateUtils.getSecondsLeft().toString()} />

        <FlatButton label={"Current pub : " + PubUtils.getPubName(DateUtils.getCurrentPubNumber())} />


        <div>
          <Slider
            defaultValue={DateUtils.getCurrentPubNumber()}
            value={this.state.firstSlider}
            min={0}
            max={5}
            step={1}
            onChange={this.handleFirstSlider.bind(this)}
          />
        </div>

      </div>
    );
  }
}

export default Pub;
