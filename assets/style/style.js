import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';
import {fontScale, horizontalScale, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  whiteBg: {
    backgroundColor: '#FDFAF6',
    flex: 1,
  },
  button: {
    backgroundColor: '#FDFAF6',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: horizontalScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(4),
  },
  buttonTxt: {
    color: '#2F80ED',
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(20),
  },
  infoInput: {
    fontFamily: findFonts('Rubik', 400),
    marginBottom: verticalScale(5),
  },
  input: {
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: horizontalScale(6),
    paddingVertical: horizontalScale(5),
    paddingHorizontal: horizontalScale(10),
    fontSize: fontScale(15),
    marginBottom: verticalScale(15),
    color: 'black',
  },
});

export default globalStyle;
