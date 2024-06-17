import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors/colors';
import {
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  screenSize,
} from '../../global/GConstant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  vwHeader: {
    backgroundColor: colors.globalColor,
    height: getHeight(80),
    width: screenSize.width,
    justifyContent: 'center',
  },
  lblHeaderTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.size20,
  },
  lblTitleOfKey: {
    fontFamily: fontFamily.Medium,
    color: `${colors.black}99`,
    marginHorizontal: getWidth(10),
    fontSize: fontSize.size16,
    marginTop: getHeight(10),
  },
  lblkeyofTitles: {
    fontFamily: fontFamily.Bold,
    color: `${colors.globalColor}`,
    fontSize: fontSize.size18,
  },
});
