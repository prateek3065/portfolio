"use client";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import RolesResponsibilities from "./roles-responsibilities/roles-responsibilities";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // paddingHorizontal: 20, // px-5
    paddingLeft: 5,
    paddingRight: 14,
    marginTop: 12,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // gap-x-2
  },
  logoWrapper: {
    width: 28, // w-7 => 7 * 4
    height: 28, // h-[28px]
    aspectRatio: 1, // aspect-square
    backgroundColor: "white",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 16, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
    position: "relative",
    left: 2,
  },
  logoImage: {
    top: 2, // relative top-[2px]
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "column",
    color: "#233b5f",
  },
  companyName: {
    fontWeight: 700,
    color: "#233b5f",
    fontSize: 12,
  },
  role: {
    fontSize: 10,
    color: "#757575",
    fontStyle: "italic",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
    color: "#233b5f",
    textAlign: "right",
    marginRight: 8,
    alignItems: "flex-end",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    flexGrow: 1,
    paddingTop: 4, // pt-2
    gap: 4, // gap-y-1
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#233b5f",
    columnGap: 5,
    marginTop: 4,
    maxWidth: "365px",
  },
  skillItem: {
    display: "flex",
    height: 11, // h-4 => 4 * 4
    flexDirection: "row",
    alignItems: "center",
  },
  skillText: {
    fontSize: 10,
    color: "#757575",
  },
  skillLabelContainer: {
    height: 12,
    display: "flex",
    alignItems: "center",
  },
  lineItem: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    marginTop: 8,
  },
  bulletSpace: {
    display: "flex",
    flexDirection: "row",
    width: 28,
    flexShrink: 0,
  },
});

const Skills = [
  "NextJS (App Router)",
  "Typescript",
  "Redux",
  "TailwindCSS",
  "JEST",
  "React Native",
  "React Query",
  "pnpm",
  "React Testing Library",
  "Google Analytics",
  "Sonar Cloud",
  "Figma",
  "AWS",
  "Git",
  "Github",
  "Jira",
  "Postman",
  "Javascript",
  "HTML",
  "CSS",
  "Agile Methodology",
  "SEO",
  "Debugging",
  "C#",
  "ASP.NET",
  "PostgreSQL",
  "Test Driven Development",
];

const Freelance: React.FC = () => {
  return (
    <View id="Particle41" style={styles.container}>
      <View id="p41-header" style={styles.header}>
        <View style={styles.leftSection}>
          <View style={styles.logoWrapper}>
            <Image src="/assets/fl.png" style={styles.logoImage} />
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Freelancing</Text>
            <Text style={styles.role}>Developer</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          {/* <Text></Text> */}
          <Text>Sept 2017 - Oct 2019</Text>
        </View>
      </View>
      <View id="p41-projects" style={styles.details}>
        <RolesResponsibilities />
      </View>
    </View>
  );
};
export default Freelance;
