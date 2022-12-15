import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-date-picker";
import { CustomButton } from "../components";
import { Colors, verticalScale } from "../theme";
import { DatePickerProps } from "../types";
import { DatePickerStyles } from "./styles";

const DatePicker = ({
  date,
  visible,
  onCancel,
  onConfirm,
  pickerTitleColor = Colors.black,
  pickerTitle = "Select Date",
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
  confirmButtonBackground = Colors.primary,
  cancelButtonBackground = Colors.secondary,
  cancelButtonTextColor = Colors.black,
  confirmButtonTextColor = Colors.white,
  backgroundColor = Colors.white,
  maximumDate = new Date(),
  minimumDate,
  theme = "auto",
  androidVariant = "nativeAndroid",
  modalAnimationType = "slide",
  cancelButtonBorderColor = "transparent",
  mode = "date",
  cancelButtonStyle,
  confirmButtonStyle,
  buttonTextSize,
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);

  function dismissModal() {
    onCancel(false);
    setSelectedDate(date);
  }

  function setDate() {
    onConfirm(selectedDate);
    dismissModal();
  }

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  return (
    <Modal
      transparent={true}
      animationType={modalAnimationType}
      visible={visible}
      supportedOrientations={["portrait"]}
      onRequestClose={dismissModal}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={DatePickerStyles.container}
          activeOpacity={1}
          onPress={dismissModal}
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
                <Text
                  style={[
                    DatePickerStyles.datePickerTitle,
                    { color: pickerTitleColor },
                  ]}
                >
                  {pickerTitle}
                </Text>
              </View>
              <View style={DatePickerStyles.dateContainer}>
                <DateTimePicker
                  date={selectedDate}
                  onDateChange={setSelectedDate}
                  fadeToColor={backgroundColor}
                  mode={mode}
                  {...{ maximumDate, minimumDate, theme, androidVariant }}
                  style={{ ...{ backgroundColor } }}
                />
              </View>
              <View style={DatePickerStyles.buttonContainer}>
                <CustomButton
                  {...{
                    title: cancelButtonText,
                    buttonStyle: [
                      DatePickerStyles.cancelButton,
                      {
                        backgroundColor: cancelButtonBackground,
                        borderColor: cancelButtonBorderColor,
                      },
                      cancelButtonStyle,
                    ],
                    titleStyle: [
                      DatePickerStyles.cancelButtonTitle,
                      {
                        color: cancelButtonTextColor,
                        fontSize: buttonTextSize,
                      },
                    ],
                    onPress: dismissModal,
                  }}
                />
                <CustomButton
                  {...{
                    title: confirmButtonText,
                    buttonStyle: [
                      DatePickerStyles.confirmButton,
                      { backgroundColor: confirmButtonBackground },
                      confirmButtonStyle,
                    ],
                    titleStyle: [
                      DatePickerStyles.confirmButtonTitle,
                      {
                        color: confirmButtonTextColor,
                        fontSize: buttonTextSize,
                      },
                    ],
                    onPress: setDate,
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
