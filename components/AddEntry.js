import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet
} from "react-native";
import {
  getMetricMetaInfo,
  timeToString,
  getDailyReminderValue
} from "../utils/helpers";
import UdacitySlider from "./UdacitySlider";
import UdacityStepper from "./UdacityStepper";
import DateHeader from "./DateHeader";
import { Ionicons } from "@expo/vector-icons";
import TextButton from "./TextButton";
import { submitEntry, removeEntry } from "../utils/api";
import { addEntry, receiveEntries } from "../actions";
import { connect } from "react-redux";
import { white, purple } from "../utils/colors";

//Created the Submit button here, that will be used by
//rendering AddEntry
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn
      }
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

class AddEntry extends Component {
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

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    //update redux
    this.props.dispatch(
      addEntry({
        [key]: entry
      })
    );

    //reset controlled component state
    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    }));

    //navigate to home

    //update "DB"
    submitEntry({ entry, key });

    //clear local notification
  };

  reset = () => {
    const key = timeToString();

    // Update Redux
    this.props.dispatch(
      addEntry({
        [key]: getDailyReminderValue()
      })
    );

    // Route to Home

    // Update "DB" (how will this work?)
    removeEntry(key);
  };

  render() {
    const metaInfo = getMetricMetaInfo();
    console.log(this.state);

    if (this.props.alreadyLogged) {
      return (
        <View style={styles.center}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-happy" : "md-happy"}
            size={100}
          />
          <Text>You already logged your information for today</Text>
          <TextButton onPress={this.reset}>reset</TextButton>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key} style={styles.row}>
              {getIcon()}
              {type === "slider" ? (
                <UdacitySlider
                  value={value}
                  onChange={value => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <UdacityStepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: white
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 30
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginRight: 40,
    marginLeft: 40
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 45,
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

export default connect()(AddEntry);
