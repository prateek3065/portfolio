"use client";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

const detailHeaderStyles = StyleSheet.create({
  view1: {
    display: "flex",
    paddingTop: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  view2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "8px",
  },
  view4: {
    display: "flex",
    flexDirection: "column",
  },
  text1: {
    fontSize: "36px", // 4xl ≈ 36px
    color: "#233b5f",
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontStyle: "italic",
  },
  text3: {
    fontSize: 14, // text-sm ≈ 14px
    color: "#233b5f",
  },
  profileImage: {
    display: "flex",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  profileImageWrapper: {
    display: "flex",
    width: 90, // w-7 => 7 * 4
    height: 90, // h-[28px]
    backgroundColor: "#ede8e8",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 100, // rounded-2xl
    // boxShadow is NOT supported in react-pdf directly
  },
});

const DetailHeader: React.FC = () => {
  return (
    <View style={detailHeaderStyles.view1}>
      <View style={detailHeaderStyles.view2}>
        <View style={detailHeaderStyles.profileImageWrapper}>
          <Image
            src="/assets/my-photo.jpeg" // no need for `public/`
            style={detailHeaderStyles.profileImage}
          />
        </View>
        <View style={detailHeaderStyles.view4}>
          <Text style={detailHeaderStyles.text1}>Prateek Sharma</Text>
          <Text style={detailHeaderStyles.text2}>
            Senior Software Developer
          </Text>
          <Text style={detailHeaderStyles.text3}>+6 years Experience</Text>
        </View>
      </View>
    </View>
  );
};
export default DetailHeader;
