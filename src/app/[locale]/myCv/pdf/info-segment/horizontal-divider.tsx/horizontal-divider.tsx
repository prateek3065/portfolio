"use client";
import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 12,
  },
  dividerStyle: {
    backgroundColor: "#858585",
    height: 1,
    display: "flex",
  },
});
const HorizontalDivider: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dividerStyle} />
    </View>
  );
};
export default HorizontalDivider;
