"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

// const PODIUM_RESPONSIBILITIES = [
//   "Developed and styled highly responsive audiobook marketplace and online bookstore interfaces for Podium Entertainment, enhancing user engagement through visually rich, book-focused layouts.",
//   "Implemented advanced SEO best practices across web platforms, significantly boosting organic discoverability for books and audiobooks.",
//   "Designed and managed a heavy-style, animation-rich frontend architecture to deliver immersive browsing experiences for book promotions and sales campaigns.",
//   "Built and optimized user dashboards and author portals with a strong focus on performance optimization and cross-browser compatibility.",
//   "Collaborated with marketing and product teams to develop sales-driven UI/UX strategies, leading to increased book sales through improved site speed, accessibility, and mobile-first design.",
//   "Integrated payment gateway solutions and enhanced search/filter functionalities to streamline user purchasing journeys in the e-commerce platform.",
// ];

const WEBBEY_RESPONSIBILITIES = [
  "Contributed as a Full Stack Developer across multiple web projects using Java Spring Boot and Angular in a startup environment under tight deadlines.",
  "Integrated third-party services such as payment gateways, analytics platforms, and CRM tools.",
  "Built reusable frontend components and modular backend endpoints to streamline development across projects.",
];

const rolesAndResponsibilitiesWebbeyStyles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 8, // mt-2
    alignItems: "center",
  },
  headerText: {
    fontSize: 10.5, // text-sm
    fontWeight: "bold",
    color: "#233b5f",
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
  lineItem: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  bulletSpace: {
    display: "flex",
    flexDirection: "row",
    width: 28,
    flexShrink: 0,
  },
  descriptionText: {
    fontSize: 10, // text-xs
    color: "#233b5f",
    maxWidth: "365px",
    display: "flex",
    textAlign: "justify",
  },
});

const RolesAndResponsibilitiesWebbey: React.FC = () => {
  return (
    <View id="podium" style={rolesAndResponsibilitiesWebbeyStyles.section}>
      {/* <View style={rolesAndResponsibilitiesWebbeyStyles.header}>
        <View style={rolesAndResponsibilitiesWebbeyStyles.bulletSpace} />
        <View style={rolesAndResponsibilitiesWebbeyStyles.companyNameWrapper}>
          <Text style={rolesAndResponsibilitiesWebbeyStyles.clientLabel}>
            Client :
          </Text>
          <Text style={rolesAndResponsibilitiesWebbeyStyles.headerText}>
            Podium Entertainment
          </Text>
        </View>
      </View> */}

      {WEBBEY_RESPONSIBILITIES.map((responsibility, key) => (
        <View key={key} style={rolesAndResponsibilitiesWebbeyStyles.lineItem}>
          <View style={rolesAndResponsibilitiesWebbeyStyles.bulletSpace}>
            <Bullet />
          </View>
          <Text style={rolesAndResponsibilitiesWebbeyStyles.descriptionText}>
            {responsibility}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default RolesAndResponsibilitiesWebbey;
