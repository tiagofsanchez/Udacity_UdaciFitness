import React, { Component } from "react";
import { View } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  //increment run, bike and swim
  increment = metric => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState(state => {
      const count = state[metric] + step;
      return {
        ...state,
        [metric]: count > max ? max : count
      };
    });
  };

  // decrement run, bike and swim
  decrement = metric => {
    const { step } = getMetricMetaInfo(metric);

    this.setState(state => {
      const count = state[metric] - step;
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      };
    });
  };

  //slider that will increase and decrease sleep and eat
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }));
  };

  render() {
    return <View>{getMetricMetaInfo("bike").getIcon()}</View>;
  }
}
