import { StyleSheet } from "react-native";
import {
  Colors,
  horizontalScale,
  Metrics,
  moderateScale,
  verticalScale,
} from "../../theme";

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
    borderWidth: Metrics.borderLineWidth,
    borderColor: Colors.gray,
    height: verticalScale(30),
    width: horizontalScale(100),
    backgroundColor: Colors.secondary,
  },
  confirmButton: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(30),
    width: horizontalScale(100),
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginHorizontal: horizontalScale(10),
  },
  confirmButtonTitle: { color: Colors.white, fontWeight: "bold" },
  cancelButtonTitle: { color: Colors.black, fontWeight: "bold" },
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
    color: Colors.black,
    fontWeight: "bold",
    fontSize: moderateScale(18),
    paddingHorizontal: horizontalScale(20),
  },
  datePickerModal: {
    height: verticalScale(340),
    width: horizontalScale(340),
    maxWidth: horizontalScale(350),
    borderRadius: 5,
  },
});
