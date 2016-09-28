import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles.css';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import {CardTitle, CardMedia} from 'material-ui/Card'
import Divider from 'material-ui/Divider';
import {blue200, blue700, pinkA100, white} from 'material-ui/styles/colors'
import DateUtils from './DateUtils.js';
import PubUtils from './PubUtils.js';
import Cron from 'node-cron';

class Pub extends Component {
  state = {
    currentPubNumber: DateUtils.getCurrentPubNumber(),
    currentPubSource: PubUtils.getPubImageSource(DateUtils.getCurrentPubNumber()),
    currentPubName: PubUtils.getPubName(DateUtils.getCurrentPubNumber()),
    daysLeft: "",
    hoursLeft: "",
    minutesLeft: "",
    secondsLeft: "",
  }

  handleSlider(event, value) {
    this.setState({
      currentPubNumber: value,
      currentPubSource: PubUtils.getPubImageSource(value),
      currentPubName: PubUtils.getPubName(value),
    });
  }

  updateTimeLeft() {
    this.setState({
      daysLeft: DateUtils.getDaysLeft().toString(),
      hoursLeft: DateUtils.getHoursLeft().toString(),
      minutesLeft: DateUtils.getMinutesLeft().toString(),
      secondsLeft: DateUtils.getSecondsLeft().toString(),
    });
  }

  render() {

    Cron.schedule('*/10 * * * * *', () => {
      console.log('running a task every 10 second');
      this.updateTimeLeft();
    });

    return (
      <div className="Pub">

        <p className="App-intro">
          Current time: {(new Date).toString()}
        </p>

        <FlatButton label={"Days left: " + this.state.daysLeft} backgroundColor={blue200} />
        <FlatButton label={"Hours left: " + this.state.hoursLeft} backgroundColor={blue200} />
        <FlatButton label={"Minutes left: " + this.state.minutesLeft} backgroundColor={blue200} />

        <div className="Divider"/>

        <div>
          <FlatButton label={"See the whole route"} href={PubUtils.getRouteUrl()} backgroundColor={pinkA100} />
          <FlatButton label={"Route to " + this.state.currentPubName} href={PubUtils.getCurrentPubRouteUrl(this.state.currentPubNumber)} backgroundColor={pinkA100} />
        </div>

        <div className="PubImage" auto>
          <CardMedia
            overlay={<CardTitle title={this.state.currentPubName} subtitle={PubUtils.getCurrentPubSubtitle(this.state.currentPubNumber)} />}
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
