"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

const PODIUM_RESPONSIBILITIES = [
  "Developed and styled highly responsive audiobook marketplace and online bookstore interfaces for Podium Entertainment, enhancing user engagement through visually rich, book-focused layouts.",
  "Implemented advanced SEO best practices across web platforms, significantly boosting organic discoverability for books and audiobooks.",
  "Designed and managed a heavy-style, animation-rich frontend architecture to deliver immersive browsing experiences for book promotions and sales campaigns.",
  "Built and optimized user dashboards and author portals with a strong focus on performance optimization and cross-browser compatibility.",
  "Collaborated with marketing and product teams to develop sales-driven UI/UX strategies, leading to increased book sales through improved site speed, accessibility, and mobile-first design.",
  "Integrated payment gateway solutions and enhanced search/filter functionalities to streamline user purchasing journeys in the e-commerce platform.",
];

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
  },
});

const RolesAndResponsibilitiesPodium: React.FC = () => {
  return (
    <View id="podium" style={rolesAndResponsibilitiesPodiumStyles.section}>
      <View style={rolesAndResponsibilitiesPodiumStyles.header}>
        <View style={rolesAndResponsibilitiesPodiumStyles.bulletSpace} />
        <Text style={rolesAndResponsibilitiesPodiumStyles.headerText}>
          Podium Entertainment
        </Text>
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
