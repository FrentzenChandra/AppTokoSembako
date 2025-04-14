import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import colors from '../../assets/colors/colors';

const LoginStyle = StyleSheet.create({
  headerBgImage: {
    height: verticalScale(175),
  },
  signInBtn: {
    marginTop: verticalScale(50),
    marginLeft: 'auto',
    marginRight: verticalScale(30),
  },
  headerTxt: {
    textAlign: 'center',
    fontFamily: findFonts('Rubik', 300),
    fontSize: fontScale(24),
  },
  iconsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  socmedIconLgn: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    padding: horizontalScale(8),
    objectFit: 'contain',
  },
  rulerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  ruler: {
    borderWidth: 0.7,
    borderColor: colors.grey,
    height: 1,
    width: '40%',
  },
  inputsContainer: {
    marginHorizontal: horizontalScale(30),
    marginTop: verticalScale(10),
  },
  loginButton: {
    backgroundColor: colors.blue,
    marginHorizontal: horizontalScale(30),
  },
  footerImg: {marginTop: 50},
});

export default LoginStyle;
