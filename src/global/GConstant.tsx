import { Alert, Dimensions, Platform, Share } from "react-native";
import { showMessage } from "react-native-flash-message";
import { colors } from "../assets/colors/colors";

export const screenSize = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

export const fontFamily = {
  Bold: "Roboto-Bold",
  BoldItalic: "Roboto-BoldItalic",
  ExtraBoldItalic: "Roboto-ExtraBoldItalic",
  ExtraBold: "Roboto-ExtraBold",
  ExtraLight: "Roboto-ExtraLight",
  Italic: "Roboto-Italic",
  Light: "Roboto-Light",
  LightItalic: "Roboto-LightItalic",
  Medium: "Roboto-Medium",
  MediumItalic: "Roboto-MediumItalic",
  Regular: "Roboto-Regular",
  SemiBold: "Roboto-SemiBold",
};
//Global function
export function getWidth(size: any) {
  return (size / 375) * screenSize.width;
}
export function getHeight(size: any) {
  return (size / 812) * screenSize.height;
}

// fontSize

export const fontSize = {
  size2: getWidth(2),
  size4: getWidth(4),
  size5: getWidth(5),
  size6: getWidth(6),
  size7: getWidth(7),
  size8: getWidth(8),
  size9: getWidth(9),
  size10: getWidth(10),
  size11: getWidth(11),
  size12: getWidth(12),
  size13: getWidth(13),
  size14: getWidth(14),
  size15: getWidth(15),
  size16: getWidth(16),
  size17: getWidth(17),
  size18: getWidth(18),
  size19: getWidth(19),
  size20: getWidth(20),
  size21: getWidth(21),
  size22: getWidth(22),
  size23: getWidth(23),
  size24: getWidth(24),
  size25: getWidth(25),
  size26: getWidth(26),
  size27: getWidth(27),
  size28: getWidth(28),
  size30: getWidth(30),
  size32: getWidth(32),
  size33: getWidth(33),
  size34: getWidth(34),
  size35: getWidth(35),
  size36: getWidth(36),
  size37: getWidth(37),
  size38: getWidth(38),
  size42: getWidth(42),
  size40: getWidth(40),
  size48: getWidth(48),
  size56: getWidth(56),
  size62: getWidth(62),
  size63: getWidth(63),
  size70: getWidth(70),
  size80: getWidth(80),
  size84: getWidth(84),
  size86: getWidth(86),
  size100: getWidth(100),
  size105: getWidth(105),
  size107: getWidth(107),
  size116: getWidth(116),
  size136: getWidth(136),
  size170: getWidth(170),
  size186: getWidth(186),
};

// margin

export const height = {
  size2: getHeight(2),
  size3: getHeight(3),
  size4: getHeight(4),
  size5: getHeight(5),
  size6: getHeight(6),
  size7: getHeight(7),
  size8: getHeight(8),
  size9: getHeight(9),
  size10: getHeight(10),
  size11: getHeight(11),
  size12: getHeight(12),
  size13: getHeight(13),
  size14: getHeight(14),
  size15: getHeight(15),
  size16: getHeight(16),
  size17: getHeight(17),
  size18: getHeight(18),
  size19: getHeight(19),
  size20: getHeight(20),
  size21: getHeight(21),
  size22: getHeight(22),
  size23: getHeight(23),
  size24: getHeight(24),
  size25: getHeight(25),
  size26: getHeight(26),
  size27: getHeight(27),
  size28: getHeight(28),
  size30: getHeight(30),
  size31: getHeight(31),
  size32: getHeight(32),
  size33: getHeight(33),
  size34: getHeight(34),
  size35: getHeight(35),
  size36: getHeight(36),
  size38: getHeight(38),
  size40: getHeight(40),
  size43: getHeight(43),
  size44: getHeight(44),
  size48: getHeight(48),
  size49: getHeight(49),
  size52: getHeight(52),
  size54: getHeight(54),
  size55: getHeight(55),
  size56: getHeight(56),
  size58: getHeight(58),
  size63: getHeight(63),
  size66: getHeight(66),
  size68: getHeight(68),
  size69: getHeight(69),
  size75: getHeight(75),
  size77: getHeight(77),
  size79: getHeight(79),
  size80: getHeight(80),
  size86: getHeight(86),
  size96: getHeight(96),
  size100: getHeight(100),
  size109: getHeight(109),
  size114: getHeight(114),
  size117: getHeight(117),
  size119: getHeight(119),
  size123: getHeight(123),
  size134: getHeight(134),
  size145: getHeight(145),
  size158: getHeight(158),
  size165: getHeight(165),
  size176: getHeight(176),
  size189: getHeight(189),
  size269: getHeight(269),
  size275: getHeight(275),
  size313: getHeight(313),
  size482: getHeight(482),
};

// global opacity
export const opacity = 0.7;

export function showError(message: any) {
  showMessage({
    message: message,
    type: "danger",
    duration: 2000,
    titleStyle: {
      color: colors.white,
      fontSize: 14,
      fontFamily: fontFamily.Bold,
    },
    icon: "info",
    style: {
      paddingTop: 20,
    },
  });
}

export function showSuccess(message: any) {
  showMessage({
    message: message,
    type: "success",
    duration: 2000,
    titleStyle: {
      color: colors.white,
      fontSize: 16,
      fontFamily: fontFamily.Bold,
    },
    icon: "success",
    style: {
      paddingTop: 20,
    },
  });
}

export function showInfo(message: any) {
  showMessage({
    message: message,
    type: "info",
    duration: 2000,
    titleStyle: {
      color: colors.white,
      fontSize: 16,
      fontFamily: fontFamily.Bold,
    },
    icon: "info",
    style: {
      paddingTop: 20,
    },
  });
}