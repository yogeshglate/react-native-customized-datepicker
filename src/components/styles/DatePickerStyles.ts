import { StyleSheet } from "react-native";
import {
  horizontalScale,
  Metrics,
  moderateScale,
  verticalScale,
} from "../../theme/Metrics";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  cancelButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#8B8B8B",
    borderWidth: Metrics.borderLineWidth,
    height: verticalScale(30),
    width: horizontalScale(100),
  },
  confirmButton: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(30),
    width: horizontalScale(100),
    borderRadius: 5,
    backgroundColor: "#FF0066",
    marginHorizontal: horizontalScale(10),
  },
  buttonTitle: { color: "#FFFFFF", fontWeight: "bold" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  dateContainer: {
    height: verticalScale(195),
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: moderateScale(18),
    paddingHorizontal: horizontalScale(20),
  },
  datePickerModal: {
    height: verticalScale(320),
    width: horizontalScale(340),
    maxWidth: 350,
    borderRadius: 5,
  },
});
