"use client";

import { StyleSheet, Page, Document, View } from "@react-pdf/renderer";
import InfoSegment from "./info-segment/info-segment";
import DetailsSegment from "./details-section/details-section";

const styles = StyleSheet.create({
  page: { width: "100%" },
  cvContainer: {
    // width: "750px",
    // height: "1060px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    maxWidth: 604,
  },
  infoSegmentContainer: {
    width: "236px",
    flexShrink: 0,
    backgroundColor: "#233b5f",
  },
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
  pageContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export const PDFcv: React.FC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.pageContainer}>
        <View style={styles.cvContainer}>
          <InfoSegment />
          <DetailsSegment />
        </View>
      </Page>
    </Document>
  );
};

export default Page;

const bulletStyles = StyleSheet.create({
  container: {
    backgroundColor: "#4d74ae",
    width: 6,
    height: 6,
    borderRadius: "32px",
    position: "relative",
    top: "21%",
    left: "42%",
  },
});

export const Bullet: React.FC = () => {
  return <div style={bulletStyles.container}></div>;
};
