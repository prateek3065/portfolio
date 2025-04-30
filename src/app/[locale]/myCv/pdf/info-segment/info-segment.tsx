"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  infoSegmentContainer: {
    width: "236px",
    flexShrink: 0,
    backgroundColor: "#233b5f",
  },
});

const InfoSegment: React.FC = () => {
  return (
    <View style={styles.infoSegmentContainer}>
      <Text>left</Text>
    </View>
  );
};

export default InfoSegment;
