"use client";
import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#01754f",
    padding: 2,
    width: 13,
    height: 13,
    borderRadius: 100,
    border: "2px solid white",
    bottom: 3,
    right: 17,
  },
});

const OnlineIcon: React.FC = () => {
  return <View style={styles.container}></View>;
};
export default OnlineIcon;
