"use client";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 16,
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
});
const NameDesignation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Prateek Sharma</Text>
      <Text style={styles.designation}> Senior Software Developer</Text>
    </View>
  );
};

export default NameDesignation;
