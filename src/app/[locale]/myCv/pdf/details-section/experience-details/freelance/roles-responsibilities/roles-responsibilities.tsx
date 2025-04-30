"use client";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { Bullet } from "../../../../pdf";

const style = StyleSheet.create({
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

const FREELANCING_RESPONSIBILITIES = [
  "Built UI-focused solutions for small-scale apps and client projects.",
  "Styled interfaces with complex animations using JavaScript and CSS for visually engaging pages.",
  "Coded Arduino in C/C++ to control hardware behavior across various projects.",

  "Handled various small freelance projects in web and hardware domains.",
];

const RolesResponsibilities: React.FC = () => {
  return (
    <View id="aba" style={style.section}>
      {FREELANCING_RESPONSIBILITIES.map((responsibility, key) => (
        <View key={key} style={style.lineItem}>
          <View style={style.bulletSpace}>
            <Bullet />
          </View>
          <Text style={style.descriptionText}>{responsibility}</Text>
        </View>
      ))}
    </View>
  );
};

export default RolesResponsibilities;
