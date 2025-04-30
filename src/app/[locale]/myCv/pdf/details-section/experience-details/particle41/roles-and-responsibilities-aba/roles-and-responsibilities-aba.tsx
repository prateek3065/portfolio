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
          Delivered a scalable SaaS product in 12 months, generating $1M+
          revenue through enhanced engagement, conversions and client
          satisfaction.
        </Text>
      </View>

      <View style={rolesAndResponsibilitiesABAStyles.lineItem}>
        <View style={rolesAndResponsibilitiesABAStyles.bulletSpace}>
          <Bullet />
        </View>
        <Text style={rolesAndResponsibilitiesABAStyles.descriptionText}>
          Led high-conversion marketplace design for tax, legal, and consulting
          services, optimizing UX/UI and performance to boost user retention.
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
    </View>
  );
};
export default RolesAndResponsibilitiesABA;
