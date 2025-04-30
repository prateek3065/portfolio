"use client";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import RolesAndResponsibilitiesABA from "./roles-and-responsibilities-aba/roles-and-responsibilities-aba";
import RolesAndResponsibilitiesPodium from "./roles-and-responsibilities-podium/roles-and-responsibilities-podium";
import RolesAndResponsibilitiesRepspark from "./roles-and-responsibilities-repspark/roles-and-responsibilities-repspark";

const particle41Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // paddingHorizontal: 20, // px-5
    paddingLeft: 5,
    paddingRight: 14,
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
    gap: 8, // gap-x-2
  },
  logoWrapper: {
    width: 28, // w-7 => 7 * 4
    height: 28, // h-[28px]
    aspectRatio: 1, // aspect-square
    backgroundColor: "#ede8e8",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 16, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
    position: "relative",
    left: 2,
  },
  logoImage: {
    top: 2, // relative top-[2px]
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "column",
    color: "#233b5f",
  },
  companyName: {
    fontWeight: 700,
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
  },
  details: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    flexGrow: 1,
    paddingTop: 4, // pt-2
    gap: 4, // gap-y-1
  },
});

const Particle41: React.FC = () => {
  return (
    <View id="Particle41" style={particle41Styles.container}>
      <View id="p41-header" style={particle41Styles.header}>
        <View style={particle41Styles.leftSection}>
          <View style={particle41Styles.logoWrapper}>
            <Image
              src="/assets/particle41_logo.jpeg"
              style={particle41Styles.logoImage}
            />
          </View>
          <View style={particle41Styles.companyInfo}>
            <Text style={particle41Styles.companyName}>Particle41</Text>
            <Text style={particle41Styles.role}>Frontend Lead</Text>
          </View>
        </View>
        <View style={particle41Styles.rightSection}>
          <Text>Pune</Text>
          <Text>Aug 2021 - Present</Text>
        </View>
      </View>
      <View id="p41-projects" style={particle41Styles.details}>
        <RolesAndResponsibilitiesABA />
        <RolesAndResponsibilitiesPodium />
        <RolesAndResponsibilitiesRepspark />
      </View>
    </View>
  );
};
export default Particle41;
