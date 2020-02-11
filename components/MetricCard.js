import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getMetricMetaInfo } from "../utils/helpers";
import { gray } from "../utils/colors";

const MetricCard = props => {
  const { metrics } = props;
  return (
    <View style={{ marginTop: 20 }}>
      {Object.keys(metrics).map(metric => (
        <View key={metric} style={[styles.container, { marginBottom: 15 }]}>
          <View>{getMetricMetaInfo(metric).getIcon()}</View>
          <View>
            <Text style={{ fontSize: 20 }}>{metric}</Text>
            <Text style={{ color: gray }}>
              {metrics[metric]} {getMetricMetaInfo(metric).unit}{" "}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default MetricCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
