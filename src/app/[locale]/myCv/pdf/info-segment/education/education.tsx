"use client";
import { StyleSheet, View, Text, Svg, Path } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  educationBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: 5,
    paddingLeft: 3,
    paddingRight: 3,
    // backgroundColor: "white",
  },
  universityContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    columnGap: 4,
    rowGap: 5,
  },
  degreeHat: {},
  degreeDetailText: {
    fontSize: 9,
    color: "white",
    textAlign: "center",
  },
  universityLink: {
    color: "white",
    textDecoration: "none",
  },
  skillItem: {
    display: "flex",
    height: 11, // h-4 => 4 * 4
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    maxWidth: 150,
  },
  skillText: {
    fontSize: 10,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
    maxWidth: 150,
  },
  bulletStyle: {
    backgroundColor: "white",
    display: "flex",
    width: 3,
    height: 3,
    borderRadius: "32px",
  },
});

const degreeDetails = [
  "Bachelor of Technology",
  "MAKAUT University",
  "Electronics and Communication",
];

const Education: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.educationBox}>
        <View style={styles.universityContainer}>
          <DegreeHat />
          {degreeDetails.map((tech) => (
            <View key={tech} style={styles.skillItem}>
              <View style={styles.bulletStyle} />
              <Text style={styles.skillText}>{tech}</Text>
            </View>
          ))}
          <Text style={styles.skillText}>Engineering</Text>
        </View>
      </View>
    </View>
  );
};
export default Education;

const DegreeHat: React.FC = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="white" width="18" height="18">
      <Path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></Path>
    </Svg>
  );
};
