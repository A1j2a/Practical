import {StyleSheet} from 'react-native';
import {
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  screenSize,
} from '../../global/GConstant';
import {colors} from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

  input: {
    height: 40,
    paddingLeft: 8,
    flex: 1,
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  image: {
    borderRadius: 10,
    height: getHeight(140),
    aspectRatio: 1,
  },
  vwTextInpute: {
    height: 50,
    backgroundColor: `${colors.white}99`,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  lblEmail: {
    fontFamily: fontFamily.ExtraLight,
    textAlign: 'left',
    color: `${colors.black}`,
    fontSize: fontSize.size17,
    marginTop: getHeight(10),
    marginLeft: getWidth(35),
  },
  vWUploadImage: {
    alignSelf: 'center',
    borderRadius: 10,
    height: getHeight(150),
    borderWidth: 1,
    borderColor: 'gray',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getHeight(30),
  },
  lblUploadImage: {
    fontFamily: fontFamily.BoldItalic,
    textAlign: 'left',
    color: 'gray',
    fontSize: fontSize.size16,
    marginBottom: getHeight(10),
  },
  vwTextInputeContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    marginLeft:getWidth(10),
    borderRadius:10,
    flexDirection:'row',
    alignItems:"center",
    paddingRight:getWidth(10)
  },
});
