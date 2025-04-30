"use client";
import { Text, StyleSheet, View, Link } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

const rolesAndResponsibilitiesABAStyles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  lineItem: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  bulletSpace: {
    display: "flex",
    flexDirection: "row",
    width: 28, // w-7 => 7 * 4
    flexShrink: 0,
  },
  companyNameWrapper: {
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
  },
  clientLabel: {
    color: "#757575",
    fontSize: 10.5,
  },
  companyName: {
    fontSize: 10.5, // text-sm
    fontWeight: "bold",
    color: "#233b5f",
    fontStyle: "italic",
  },
  descriptionText: {
    fontSize: 10, // text-xs
    color: "#233b5f",
    maxWidth: "365px",
    display: "flex",
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#233b5f",
    columnGap: 5,
    marginTop: 4,
    maxWidth: "340px",
  },
  skillItem: {
    display: "flex",
    height: 12, // h-4 => 4 * 4
    flexDirection: "row",
    alignItems: "center",
  },
  skillText: {
    fontSize: 10,
    color: "#757575",
  },
  link: {
    textDecoration: "underline",
    fontWeight: "extrabold",
    color: "#233b5f",
  },
  skillLabelContainer: {
    height: 12,
    display: "flex",
    alignItems: "center",
  },
});

const ABATechStack = [
  "NextJS (App Router)",
  "Typescript",
  "Redux",
  "TailwindCSS",
  "JEST",
  "React Testing Library",
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
];

const RolesAndResponsibilitiesABA: React.FC = () => {
  return (
    <View id="aba" style={rolesAndResponsibilitiesABAStyles.section}>
      {/* Company Name */}
      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace} />
        <View style={rolesAndResponsibilitiesABAStyles.companyNameWrapper}>
          <Text style={rolesAndResponsibilitiesABAStyles.clientLabel}>
            Client :
          </Text>
          <Text style={rolesAndResponsibilitiesABAStyles.companyName}>
            Anderson Business Advisors
          </Text>
        </View>
      </View>

      {/* Responsibilities */}
      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Delivered a scalable SaaS product from scratch, in 12 months,
          generating $1M+ revenue through improved user engagement, conversion
          rates, and{" "}
          <Link
            style={rolesAndResponsibilitiesABAStyles.link}
            href="https://www.linkedin.com/in/prateek-sharma-891721196/details/recommendations/?detailScreenTabIndex=0"
          >
            client satisfaction
          </Link>
          .
        </Text>
      </View>

      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Led the design and development of a high-conversion client-facing
          marketplace for tax, legal, and consulting services, focusing on UX/UI
          best practices, performance optimization to enhance user experience
          and retention.
        </Text>
      </View>

      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Implemented analytics to track user behavior, boosting in sales
          through data-driven UI improvements.
        </Text>
      </View>

      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Mentored junior developers, conducting code reviews, best practices,
          and ceremonies to ensure timely feature releases.
        </Text>
      </View>

      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Collaborated with stakeholders to align frontend strategy with
          business goals, ensuring seamless cross-browser compatibility.
        </Text>
      </View>

      {/* Skills */}
      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace} />
        <View style={rolesAndResponsibilitiesABAStyles.skillsWrapper}>
          <Text style={rolesAndResponsibilitiesABAStyles.skillLabelContainer}>
            Skills
          </Text>
          {ABATechStack.map((tech, index) => (
            <View
              key={tech}
              style={rolesAndResponsibilitiesABAStyles.skillItem}
            >
              <Text style={rolesAndResponsibilitiesABAStyles.skillText}>
                {tech}
                {index !== ABATechStack.length - 1 ? "," : ""}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default RolesAndResponsibilitiesABA;
