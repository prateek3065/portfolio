"use client";
import { StyleSheet, View, Text, Svg, Path } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillslabel: {
    color: "white",
    fontSize: 13,
    paddingLeft: 4,
    fontStyle: "italic",
  },
  skillItem: {
    display: "flex",
    height: 11, // h-4 => 4 * 4
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  skillText: {
    fontSize: 10,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#233b5f",
    columnGap: 5,
    marginTop: 4,
    maxWidth: "235px",
    paddingLeft: 11,
    paddingRight: 11,
    rowGap: 2,
  },
  bulletStyle: {
    backgroundColor: "white",
    display: "flex",
    width: 3,
    height: 3,
    borderRadius: "32px",
  },
  skillHeaderContianer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  skillLogoContainer: {
    display: "flex",
  },
});

const skills = [
  "NextJS (App Router)",
  "ReactJS",
  "TailwindCSS",
  "Redux",
  "Typescript",
  "React Context",
  "MobX",
  "Bootstrap",
  "SCSS",
  "Git",
  "Github",
  "Javascript",
  "HTML",
  "CSS",
  "SEO",
  "JAVA",
  "Spring Boot",
  "Microservices",
  "REST API",
  "JEST",
  "React Native",
  "React Query",
  "pnpm",
  "React Testing Library",
  "Google Analytics",
  "Sonar Cloud",
  "Figma",
  "AWS",
  "Jira",
  "Postman",
  "Agile Methodology",
  "Debugging",
  "C#",
  "ASP.NET",
  "PostgreSQL",
  "Test Driven Development",
  "etc",
];

const Skills: React.FC = () => {
  return (
    <View id="skills-section" style={styles.container}>
      <View style={styles.skillHeaderContianer}>
        <View style={styles.skillLogoContainer}>
          <Svg viewBox="0 0 24 24" fill="white" width="15" height="15">
            <Path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></Path>
          </Svg>
        </View>
        <Text style={styles.skillslabel}>Skills</Text>
      </View>

      <View id="skills-container" style={styles.skillsWrapper}>
        {skills.map((tech) => (
          <View key={tech} style={styles.skillItem}>
            <View style={styles.bulletStyle} />
            <Text style={styles.skillText}>{tech}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Skills;
