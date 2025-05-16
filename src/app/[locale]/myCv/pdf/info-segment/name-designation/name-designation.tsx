"use client";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 4,
  },
  name: {
    fontSize: 16,
    color: "white",
  },
  designation: {
    fontSize: 11,
    color: "#c1c1c1",
    fontStyle: "italic",
  },
  experienceLength: {
    fontSize: 11,
    color: "white",
  },
});
const NameDesignation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Prateek Sharma</Text>
      <Text style={styles.designation}> Senior Software Developer</Text>
      <Text style={styles.experienceLength}>6+ years of Experience</Text>
    </View>
  );
};

export default NameDesignation;
