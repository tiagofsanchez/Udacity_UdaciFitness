import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import MetricCard from "./MetricCard";
import { white } from "../utils/colors";

class EntryDetails extends Component {
  render() {
    console.log(this.props);
    const { metrics } = this.props;
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />
      </View>
    );
  }
}

function mapStateToProps(entries, { route }) {
  const { entryId } = route.params;
  return {
    metrics: entries[entryId],
    entryId
  };
}

export default connect(mapStateToProps)(EntryDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 10
  }
});
