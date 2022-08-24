import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface DatePickerProps {
  visible: boolean;
  pickerTitleStyle?: StyleProp<TextStyle>;
  pickerTitle?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  backgroundColor?: string;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonTextStyle?: StyleProp<TextStyle>;
  confirmButtonTextStyle?: StyleProp<TextStyle>;
  onCancel: () => void;
  onConfirm?: () => void;
}

export interface CustomButtonProps {
  title: string;
  buttonStyle: StyleProp<ViewStyle>;
  titleStyle: StyleProp<TextStyle>;
  onPress?: () => void;
}
