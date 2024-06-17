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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getWidth(15),
  },
  lblHeaderTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.size20,
    flex: 1,
    marginLeft: getWidth(40),
  },
  vwMoreModal: {
    height: getHeight(130),
    width: getWidth(150),
    backgroundColor: colors.white,
    position: 'absolute',
    top: getHeight(38),
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    right: getWidth(28),
    borderRadius: 5,
    padding: 15,
  },
  vwinnerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getHeight(6),
  },
  lblInnerModal: {
    fontFamily: fontFamily.Medium,
    color: 'gray',
    fontSize: fontSize.size16,
  },
  lblFieldTitle: {
    fontFamily: fontFamily.Bold,
    color: 'blue',
    fontSize: fontSize.size20,
    marginTop: getHeight(20),
    marginLeft: getWidth(20),
  },
  vwComponent: {
    height: getHeight(180),
  
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: getWidth(20),
    marginTop: getHeight(20),
    shadowOffset: {height: -20, width: 0},
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between"
  },vwNumbers:{
    alignItems:"flex-end",
    flexDirection:"row"
  },lblInnerContainerTitle:{
    fontFamily: fontFamily.Regular,
    color: colors.globalColor,
    fontSize: fontSize.size16,
    marginTop:getHeight(5)
  },lblNumbers:{
    fontFamily: fontFamily.Bold,
    color: colors.globalColor,
    fontSize: fontSize.size62,
    marginLeft:getWidth(20)
  },vwBottom:{
    justifyContent:"space-between",
    marginHorizontal:getWidth(20),
    marginTop:getHeight(20),
    flexDirection:'row',
    marginBottom:getHeight(20)
  },lblBottom:{
    fontFamily: fontFamily.Regular,
    color: colors.globalColor,
    fontSize: fontSize.size16,
    marginTop:5
  },vwInnerBottomView:{
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
    backgroundColor: colors.white,
    borderRadius: 8,
    width:screenSize.width/2 -getWidth(35),
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:getHeight(20)
  }
});
