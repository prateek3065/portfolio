"use client";
import { StyleSheet, View, Image } from "@react-pdf/renderer";
import NameDesignation from "./name-designation/name-designation";
import Skills from "./skills/skills";
import Email from "./email/email";
import Phone from "./phone/phone";
import Location from "./location/location";
import Education from "./education/education";
import Footer from "./footer/footer";
import Recommendations from "./recommendations/recommendations";
import OnlineIcon from "./online-icon/online-icon";

const styles = StyleSheet.create({
  infoSegmentContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    flexShrink: 0,
    backgroundColor: "#233b5f",
    paddingTop: 10,
    // borderRadius: "0% 100% 0% 100% / 100% 24% 76% 0% ",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
  },
  profileImage: {
    display: "flex",
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: 90, // w-7 => 7 * 4
    height: 90, // h-[28px]
    transform: "scale(1.15)",
  },
  profileImageWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100, // w-7 => 7 * 4
    height: 100, // h-[28px]
    backgroundColor: "white",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 100, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
  },
  profileImageWrapperContainer: {
    display: "flex",
    delxDirection: "row",
    backgroundColor: "white",
    padding: 2,
    borderRadius: 60,
    marginTop: 10,
    position: "relative",
  },
  infoSectionItemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const InfoSegment: React.FC = () => {
  return (
    <View id="info-section" style={styles.infoSegmentContainer}>
      <View style={styles.infoSectionItemsContainer}>
        <View style={styles.profileImageWrapperContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              src="/assets/my-photo.jpeg" // no need for `public/`
              style={styles.profileImage}
            />
          </View>
          <OnlineIcon />
        </View>
        <NameDesignation />

        <Skills />
        <Recommendations />
        <Education />
        <Email />
        <Phone />
        <Location />
      </View>
      <Footer />
    </View>
  );
};

export default InfoSegment;
