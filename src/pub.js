import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles.css';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import {CardTitle, CardMedia} from 'material-ui/Card'
import DateUtils from './DateUtils.js';
import PubUtils from './PubUtils.js';

class Pub extends Component {
  state = {
    currentPubNumber: DateUtils.getCurrentPubNumber(),
    currentPubSource: PubUtils.getPubImageSource(DateUtils.getCurrentPubNumber()),
    currentPubName: PubUtils.getPubName(DateUtils.getCurrentPubNumber()),
  }

  handleSlider(event, value) {
    this.setState({
      currentPubNumber: value,
      currentPubSource: PubUtils.getPubImageSource(value),
      currentPubName: PubUtils.getPubName(value),
    });
  }

  render() {

    console.log("current src: " + this.state.currentPubSource);

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

        <div className="PubImage" auto>
          <CardMedia
            overlay={<CardTitle title={this.state.currentPubName} subtitle="Something clever here" />}
          >
            <img src={this.state.currentPubSource} />
          </CardMedia>
        </div>

        <div>
          <Slider
            defaultValue={DateUtils.getCurrentPubNumber()}
            value={this.state.currentPubNumber}
            min={0}
            max={4}
            step={1}
            onChange={this.handleSlider.bind(this)}
          />
        </div>

      </div>
    );
  }
}

export default Pub;
