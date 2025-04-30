import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';
import {fontScale, horizontalScale, verticalScale} from './scaling';
import colors from '../colors/colors';

const globalStyle = StyleSheet.create({
  whiteBg: {
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: horizontalScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(4),
  },
  buttonTxt: {
    color: colors.blue,
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(20),
  },
  infoInput: {
    fontFamily: findFonts('Rubik', 400),
    marginBottom: verticalScale(5),
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: horizontalScale(6),
    paddingVertical: horizontalScale(5),
    paddingHorizontal: horizontalScale(10),
    fontSize: fontScale(15),
    marginBottom: verticalScale(15),
    color: 'black',
    backgroundColor: colors.white,
  },
  buttonPadding: {
    padding: 10,
    flex: 1,

  },
});

export default globalStyle;
