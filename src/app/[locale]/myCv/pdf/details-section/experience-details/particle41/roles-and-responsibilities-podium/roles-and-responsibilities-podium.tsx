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

const PODIUM_RESPONSIBILITIES = [
  "Developed and styled responsive audiobook marketplace and bookstore interfaces, enhancing engagement through rich, book-focused layouts.",
  "Applied SEO best practices to boost book and audiobook discoverability.",
  "Designed and managed an animation-rich frontend for immersive browsing.",
  "Built and optimized dashboards and author portals for performance and cross-browser compatibility.",
  "Collaborated with marketing and product teams to drive book sales via sales-driven UI/UX, improved site speed, accessibility, and mobile-first design.",
  "Integrated payment gateways and enhanced search/filter functionalities to streamline the e-commerce purchasing journey.",
];

// const PODIUM_RESPONSIBILITIES = [
//   "Built and styled responsive audiobook marketplace and bookstore UIs to boost engagement.",
//   "Implemented SEO best practices to improve discoverability of books and audiobooks.",
//   "Developed animation-rich frontend for immersive browsing experiences.",
//   "Optimized dashboards and author portals for performance and cross-browser compatibility.",
//   "Collaborated with product and marketing teams to drive sales through UI/UX, speed, accessibility, and mobile-first design.",
//   "Integrated payment gateways and refined search/filter for a smoother e-commerce experience.",
// ];


const rolesAndResponsibilitiesPodiumStyles = StyleSheet.create({
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
});


const RolesAndResponsibilitiesPodium: React.FC = () => {
  return (
    <View id="podium" style={rolesAndResponsibilitiesPodiumStyles.section}>
      <View style={rolesAndResponsibilitiesPodiumStyles.header}>
        <View style={rolesAndResponsibilitiesPodiumStyles.bulletSpace} />
        <View style={rolesAndResponsibilitiesPodiumStyles.companyNameWrapper}>
          <Text style={rolesAndResponsibilitiesPodiumStyles.clientLabel}>
            Client :
          </Text>
          <Text style={rolesAndResponsibilitiesPodiumStyles.headerText}>
            Podium Entertainment
          </Text>
        </View>
      </View>

      {PODIUM_RESPONSIBILITIES.map((responsibility, key) => (
        <View key={key} style={rolesAndResponsibilitiesPodiumStyles.lineItem}>
          <View style={rolesAndResponsibilitiesPodiumStyles.bulletSpace}>
            <Bullet />
          </View>
          <Text style={rolesAndResponsibilitiesPodiumStyles.descriptionText}>
            {responsibility}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default RolesAndResponsibilitiesPodium;
