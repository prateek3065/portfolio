"use client";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import RolesAndResponsibilitiesWebbey from "./roles-and-responsibilities-webbey/roles-and-responsibilities-webbey";

const webbeyTechnologiesStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 5,
    paddingRight: 14,
    marginTop: 12, // mt-3 => 3 * 4
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
    gap: 8, // gap-x-2 => 2 * 4
  },
  logoWrapper: {
    width: 28, // w-7 => 7 * 4
    height: 28, // h-[28px]
    aspectRatio: 1, // aspect-square
    backgroundColor: "#ede8e8",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: 2,
    // borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 15, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
  },
  logoImage: {
    width: 24, // w-7 => 7 * 4
    height: 24, // h-[28px]
    position: "absolute",
    left: 2,
    top: 3, // relative top-[2px]
    // bottom: 2,
    display: "flex",
    // width: "100%",
    // height: "100%",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "column",
    color: "#233b5f",
  },
  companyName: {
    fontWeight: "bold",
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
    fontSize: 14, // text-sm
    flexGrow: 1,
    paddingTop: 8, // pt-2 => 2 * 4
    gap: 4, // gap-y-1 => 1 * 4
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
  "ReactJS",
  "Typescript",
  "React Context",
  "MobX",
  "Bootstrap",
  "SCSS",
  "Git",
  "Github",
  "Postman",
  "Javascript",
  "HTML",
  "CSS",
  "SEO",
  "JAVA",
  "Spring Boot",
  "Microservices",
  "REST API",
];

const WebbeyTechnologies: React.FC = () => {
  return (
    <View id="webbey" style={webbeyTechnologiesStyles.container}>
      <View style={webbeyTechnologiesStyles.header}>
        <View style={webbeyTechnologiesStyles.leftSection}>
          <View style={webbeyTechnologiesStyles.logoWrapper}>
            <Image
              src="/assets/webbey-tech-logo.jpeg"
              style={webbeyTechnologiesStyles.logoImage}
            />
          </View>
          <View style={webbeyTechnologiesStyles.companyInfo}>
            <Text style={webbeyTechnologiesStyles.companyName}>
              Webey Technologies
            </Text>
            <Text style={webbeyTechnologiesStyles.role}>
              Software Developer
            </Text>
          </View>
        </View>
        <View style={webbeyTechnologiesStyles.rightSection}>
          <Text>Kolkata, India</Text>
          <Text>Oct 2019 - Aug 2021</Text>
        </View>
      </View>
      <View style={webbeyTechnologiesStyles.details}>
        <RolesAndResponsibilitiesWebbey />
      </View>
      {/* <View style={webbeyTechnologiesStyles.lineItem}>
        <View style={webbeyTechnologiesStyles.bulletSpace} />
        <View style={webbeyTechnologiesStyles.skillsWrapper}>
          <Text style={webbeyTechnologiesStyles.skillLabelContainer}>
            Skills aquired at Particle41:
          </Text>
          {Skills.map((tech, index) => (
            <View key={tech} style={webbeyTechnologiesStyles.skillItem}>
              <Text style={webbeyTechnologiesStyles.skillText}>
                {tech}
                {index !== Skills.length - 1 ? "," : ""}
              </Text>
            </View>
          ))}
        </View>
      </View> */}
    </View>
  );
};
export default WebbeyTechnologies;
