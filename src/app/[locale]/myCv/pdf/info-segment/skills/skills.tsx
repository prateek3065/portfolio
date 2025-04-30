"use client";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillslabel: {
    color: "white",
    fontSize: 12,
    paddingLeft: 10,
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
      <Text style={styles.skillslabel}>Skills</Text>
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
