"use client";
import { StyleSheet, View, Text, Svg, Path, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    columnGap: 4,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(91 104 122)",
    borderRadius: 5,
  },
  recommendationLabel: {
    fontSize: 10,
    color: "white",
    fontStyle: "italic",
    // textDecoration: "underline",
  },
});
const Recommendations: React.FC = () => {
  return (
    <Link href="https://www.linkedin.com/in/prateek-sharma-891721196/details/recommendations/">
      <View style={styles.container}>
        <Svg viewBox="0 0 24 24" fill="white" width="20" height="20">
          <Path d="M12.0001 8.5L14.1161 13.5875L19.6085 14.0279L15.4239 17.6125L16.7023 22.9721L12.0001 20.1L7.29777 22.9721L8.57625 17.6125L4.3916 14.0279L9.88403 13.5875L12.0001 8.5ZM8.00005 2V11H6.00005V2H8.00005ZM18.0001 2V11H16.0001V2H18.0001ZM13.0001 2V7H11.0001V2H13.0001Z"></Path>
        </Svg>
        <Text style={styles.recommendationLabel}>Recommendations</Text>
      </View>
    </Link>
  );
};
export default Recommendations;
