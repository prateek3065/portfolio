"use client";
import { StyleSheet, View, Text } from "@react-pdf/renderer";
import ExperienceDetails from "./experience-details/experience-details";

const styles = StyleSheet.create({
  detailSegmentContainer: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },
  detailSegmentContainer2: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
  },
});

const DetailsSegment: React.FC = () => {
  return (
    <View id="detail-section" style={styles.detailSegmentContainer}>
      <View style={styles.detailSegmentContainer2}>
        <Introduction />
        <ExperienceDetails />
      </View>
    </View>
  );
};
export default DetailsSegment;

const introStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingTop: 8,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8, // gap-x-2 => 2 * 4 = 8
    paddingLeft: 10,
    paddingRight: 10,
  },
  experienceText: {
    fontSize: 14, // text-sm
    fontWeight: "extrabold", // closest match, might need custom font weight registration
    color: "#233b5f",
    textDecoration: "underline",
  },
  divider: {
    width: "300px",
    backgroundColor: "#233b5f",
    height: 1,
    position: "relative", // top-1px equivalent
    top: 1,
  },
  descriptionText: {
    fontSize: 10, // text-xs
    color: "#233b5f",
    maxWidth: "396px",
    display: "flex",
    paddingLeft: 10,
    textAlign: "justify",
  },
});

const Introduction: React.FC = () => {
  return (
    <View id="intro" style={introStyles.container}>
      <View style={introStyles.header}>
        <Text style={introStyles.experienceText}>About Me</Text>
        <Text style={introStyles.descriptionText}>
          Lead Frontend Developer focused on building scalable, modular
          codebases and delivering high-quality, bug-free solutions. I’ve led
          multiple projects from scratch, creating user-engaging interfaces that
          drive revenue. Known for problem-solving, consistency, and
          performance-driven design. I boost team efficiency by organizing
          workflows, mentoring juniors, and accelerating delivery without
          sacrificing quality.
        </Text>
      </View>
    </View>
  );
};
