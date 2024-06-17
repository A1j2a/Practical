import { Platform, StyleSheet } from "react-native";
import { fontFamily, fontSize, getHeight, getWidth } from "../global/GConstant";
import { colors } from "../assets/colors/colors";

export const style = StyleSheet.create({
  lblTitle: {
    fontSize: fontSize.size12,
    paddingBottom: Platform.OS == "ios" ? null : getHeight(20),
    textAlign: "center",
    fontFamily: fontFamily.Bold,
    // marginBottom:getHeight(-3)
  },
  imageStyle: {
    height: getHeight(20),
    aspectRatio: 1,
  },
});
