import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { CustomButton } from "../components";
import { DatePickerProps } from "../types/pickerTypes";
import { DatePickerStyles } from "./styles";
import { verticalScale } from "../theme/Metrics";

const DatePicker = ({
  visible,
  onCancel,
  onConfirm,
  pickerTitleStyle = DatePickerStyles.datePickerTitle,
  pickerTitle = "Select Date",
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
  cancelButtonStyle = DatePickerStyles.cancelButton,
  confirmButtonStyle = DatePickerStyles.confirmButton,
  cancelButtonTextStyle = DatePickerStyles.buttonTitle,
  confirmButtonTextStyle = DatePickerStyles.buttonTitle,
  backgroundColor = "#2F2D35",
}: DatePickerProps) => {
  return (
    <Modal
      transparent={true}
      animationType={"slide"}
      visible={visible}
      supportedOrientations={["portrait"]}
      onRequestClose={onCancel}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={DatePickerStyles.container}
          activeOpacity={1}
          onPress={onCancel}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            activeOpacity={1}
          >
            <View
              style={[
                DatePickerStyles.datePickerModal,
                {
                  backgroundColor: backgroundColor,
                },
              ]}
            >
              <View
                style={{
                  marginVertical: verticalScale(20),
                }}
              >
                <Text style={pickerTitleStyle}>{pickerTitle}</Text>
              </View>
              <View style={DatePickerStyles.dateContainer}>
                <Text style={DatePickerStyles.buttonTitle}>
                  Date Selector Here
                </Text>
              </View>
              <View style={DatePickerStyles.buttonContainer}>
                <CustomButton
                  {...{
                    title: cancelButtonText,
                    buttonStyle: cancelButtonStyle,
                    titleStyle: cancelButtonTextStyle,
                    onPress: onCancel,
                  }}
                />
                <CustomButton
                  {...{
                    title: confirmButtonText,
                    buttonStyle: confirmButtonStyle,
                    titleStyle: confirmButtonTextStyle,
                    onPress: () => {
                      if (onConfirm) {
                        onConfirm();
                        onCancel();
                      }
                    },
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DatePicker;
