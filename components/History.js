import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { fetchCalendarResult } from "../utils/api";
import { timeToString, getDailyReminderValue } from "../utils/helpers";
import { receiveEntries, addEntry } from "../actions";
import UdaciFitnessCalendar from "udacifitness-calendar";

class History extends Component {
  //gets all the entries and put's them in the store
  componentDidMount() {
    const { dispatch } = this.props;
    fetchCalendarResult()
      .then(entries => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(
            addEntry({
              [timeToString()]: getDailyReminderValue()
            })
          );
        }
      })
      .then(() => this.setState(() => ({ ready: true })));
  }

  //QUESTION: where { today, ... metrics} comes from?
  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View>
      {today ? (
        <Text>{JSON.stringify(today)}</Text>
      ) : (
        <Text>{JSON.stringify(metrics)}</Text>
      )}
    </View>
  );
  renderEmptyDate(formattedDate) {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>No Data for this day</Text>
      </View>
    );
  }

  render() {
    const { entries } = this.props;
    return (
      <View>
        <UdaciFitnessCalendar
          items={entries}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
        />
      </View>
    );
  }
}

function mapStateToProps(entries) {
  return { entries };
}

export default connect(mapStateToProps)(History);
