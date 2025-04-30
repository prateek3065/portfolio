"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

const REPSPARK_RESPONSIBILITIES = [
  "Built and optimized B2B e-commerce features like digital catalogs, retailer portals, and virtual showrooms.",
  "Developed reusable feature components with React.js and TypeScript to improve scalability and speed.",
  "Handled backend API optimization for faster order management and real-time inventory updates.",
  "Refactored legacy code to enhance performance, mobile responsiveness, and platform stability.",
  "Improved dynamic search, filtering, and data loading for large product catalogs.",
  "Modernized checkout flows and personalized catalog views for better B2B customer experience.",
];

const rolesAndResponsibilitiesRepsparkStyles = StyleSheet.create({
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
    fontSize: 14, // text-sm
    fontWeight: "extrabold",
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
    fontSize: 10,
    color: "#233b5f",
    maxWidth: "340px",
  },
});

const RolesAndResponsibilitiesRepspark: React.FC = () => {
  return (
    <View style={rolesAndResponsibilitiesRepsparkStyles.section}>
      <View style={rolesAndResponsibilitiesRepsparkStyles.header}>
        <View style={rolesAndResponsibilitiesRepsparkStyles.bulletSpace} />
        <Text style={rolesAndResponsibilitiesRepsparkStyles.headerText}>
          Repspark
        </Text>
      </View>

      {REPSPARK_RESPONSIBILITIES.map((responsibility, key) => (
        <View key={key} style={rolesAndResponsibilitiesRepsparkStyles.lineItem}>
          <View style={rolesAndResponsibilitiesRepsparkStyles.bulletSpace}>
            <Bullet />
          </View>
          <Text style={rolesAndResponsibilitiesRepsparkStyles.descriptionText}>
            {responsibility}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default RolesAndResponsibilitiesRepspark;
