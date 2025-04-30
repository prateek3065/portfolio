"use client";
import { StyleSheet, View } from "@react-pdf/renderer";
import DetailHeader from "./detail-header/detail-header";
import ExperienceDetails from "./experience-details/experience-details";

const styles = StyleSheet.create({
  detailSegmentContainer: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  detailSegmentContainer2: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    rowGap: "8px",
    backgroundColor: "white",
  },
});

const DetailsSegment: React.FC = () => {
  return (
    <View style={styles.detailSegmentContainer}>
      <View style={styles.detailSegmentContainer2}>
        <DetailHeader />
        <ExperienceDetails />
      </View>
    </View>
  );
};
export default DetailsSegment;
