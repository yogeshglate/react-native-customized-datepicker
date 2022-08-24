import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth = 375;

const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const Metrics = {
  zero: 0,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  textFieldRadius: 5,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: StatusBar.currentHeight,
  imageRadius: 20,
  isAndroid: Platform.OS === "android",
};

export { horizontalScale, verticalScale, moderateScale, Metrics };
