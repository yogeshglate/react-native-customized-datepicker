import { Dispatch, SetStateAction } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface DatePickerProps {
  date: Date;
  visible: boolean;
  onCancel: Dispatch<SetStateAction<boolean>>;
  onConfirm: Dispatch<SetStateAction<Date>>;
  pickerTitleColor?: string;
  pickerTitle?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  backgroundColor?: string;
  confirmButtonBackground?: string;
  cancelButtonBackground?: string;
  cancelButtonTextColor?: string;
  confirmButtonTextColor?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  theme?: "dark" | "light" | "auto";
  androidVariant?: "nativeAndroid" | "iosClone";
  modalAnimationType?: "fade" | "none" | "slide";
  cancelButtonBorderColor?: string;
  mode?: "date" | "time" | "datetime";
  cancelButtonStyle?: StyleProp<ViewStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  buttonTextSize?: number;
  modalHeight?:number;
  modalWidth?:number;
}

export interface CustomButtonProps {
  title: string;
  buttonStyle: StyleProp<ViewStyle>;
  titleStyle: StyleProp<TextStyle>;
  onPress?: () => void;
}
