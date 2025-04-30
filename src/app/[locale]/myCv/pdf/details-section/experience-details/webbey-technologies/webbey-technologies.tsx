"use client";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

const webbeyTechnologiesStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
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
    width: 27, // w-7 => 7 * 4
    height: 27, // h-[28px]
    aspectRatio: 1, // aspect-square
    backgroundColor: "#ede8e8",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    // borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 10, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
  },
  logoImage: {
    width: 24, // w-7 => 7 * 4
    height: 24, // h-[28px]
    position: "absolute",
    left: 2,
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
    fontSize: 14, // text-sm ≈ 14px
    color: "#757575",
    fontStyle: "italic",
  },
  rightSection: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10, // text-xs ≈ 10px
    color: "#233b5f",
    textAlign: "right",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14, // text-sm
    flexGrow: 1,
    paddingTop: 8, // pt-2 => 2 * 4
    gap: 4, // gap-y-1 => 1 * 4
  },
});

const WebbeyTechnologies: React.FC = () => {
  return (
    <View style={webbeyTechnologiesStyles.container}>
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
          <Text>Kolkata</Text>
          <Text>Oct 2019 - Aug 2021</Text>
        </View>
      </View>
      <View style={webbeyTechnologiesStyles.details}>
        {/* Fill your details here later */}
      </View>
    </View>
  );
};
export default WebbeyTechnologies;
