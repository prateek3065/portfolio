"use client";
import { StyleSheet, View, Svg, Path, Ellipse } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -20,
    left: -40,
    // backgroundColor: "white",
    // height: 20,
    // width: 20,
  },
});

const FileBinding: React.FC = () => {
  return (
    <View style={styles.container}>
      <Svg width="100" height="70" viewBox="0 0 100 100">
        <Path
          d="M70,90 
           A40,40 0 0,0 30,50"
          stroke="#999"
          stroke-width="8"
          fill="none"
          stroke-linecap="round"
        />

        <Ellipse cx="70" cy="90" rx="8" ry="4" fill="#ccc" />
      </Svg>
    </View>
  );
};
export default FileBinding;
