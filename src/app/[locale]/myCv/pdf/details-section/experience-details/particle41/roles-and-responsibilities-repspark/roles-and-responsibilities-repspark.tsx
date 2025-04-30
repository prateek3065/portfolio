"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

// const REPSPARK_RESPONSIBILITIES = [
//   "Built and optimized B2B e-commerce features like digital catalogs, retailer portals, and virtual showrooms.",
//   "Developed reusable feature components with React.js and TypeScript to improve scalability and speed.",
//   "Handled backend API optimization for faster order management and real-time inventory updates.",
//   "Refactored legacy code to enhance performance, mobile responsiveness, and platform stability.",
//   "Improved dynamic search, filtering, and data loading for large product catalogs.",
//   "Modernized checkout flows and personalized catalog views for better B2B customer experience.",
// ];

const REPSPARK_RESPONSIBILITIES = [
  "Built and optimized B2B e-commerce features—including digital catalogs, retailer portals, virtual showrooms, and personalized checkout flows—to enhance scalability and customer experience.",
  "Developed reusable feature components, improving platform speed, maintainability, and mobile responsiveness.",
  "Optimized backend APIs for faster order management, real-time inventory updates, and dynamic catalog interactions, improving search and filtering performance.",
  "Refactored legacy codebases to boost platform stability, reduce technical debt, and modernize the user experience across web and mobile devices.",
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

const RolesAndResponsibilitiesRepspark: React.FC = () => {
  return (
    <View style={rolesAndResponsibilitiesRepsparkStyles.section}>
      <View style={rolesAndResponsibilitiesRepsparkStyles.header}>
        <View style={rolesAndResponsibilitiesRepsparkStyles.bulletSpace} />
        <View style={rolesAndResponsibilitiesRepsparkStyles.companyNameWrapper}>
          <Text style={rolesAndResponsibilitiesRepsparkStyles.clientLabel}>
            Client :
          </Text>
          <Text style={rolesAndResponsibilitiesRepsparkStyles.headerText}>
            Repspark
          </Text>
        </View>
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
