"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import Particle41 from "./particle41/particle41";
import WebbeyTechnologies from "./webbey-technologies/webbey-technologies";
import Freelance from "./freelance/freelance";

const experienceDetailsStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // gap-x-2 => 2 * 4 = 8
    paddingBottom: 8, // pb-2 => 2 * 4 = 8
    paddingLeft: 10,
    paddingRight: 10,
  },
  experienceText: {
    fontSize: 14, // text-sm
    fontWeight: "extrabold", // closest match, might need custom font weight registration
    color: "#233b5f",
  },
  divider: {
    width: "300px",
    backgroundColor: "#233b5f",
    height: 1,
    position: "relative", // top-1px equivalent
    top: 1,
  },
});

const ExperienceDetails: React.FC = () => {
  return (
    <View id="ExperienceDetails" style={experienceDetailsStyles.container}>
      <View style={experienceDetailsStyles.header}>
        <Text style={experienceDetailsStyles.experienceText}>Experience</Text>
      </View>
      <Particle41 />
      <WebbeyTechnologies />
      <Freelance />
    </View>
  );
};
export default ExperienceDetails;
