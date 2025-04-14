import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import colors from '../../assets/colors/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';

const kasirStyle = StyleSheet.create({
  bgWhite: {
    backgroundColor: colors.white,
    paddingBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  headerText: {
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(22),
    color: colors.blue,
    alignSelf: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    alignItems: 'center',
    marginBottom: horizontalScale(20),
  },
  searchInput: {
    position: 'absolute',
    top: 50,
    left: '43%',
    width: 200,
  },
  ruler: {
    borderWidth: 0.8,
    borderColor: colors.grey,
    height: 1,
    opacity: 0.5,
    width: '100%',
    marginBottom: 5,
  },
  dropDown: {
    borderWidth: 0,
    backgroundColor: colors.white,
    width: horizontalScale(100),
    padding: 0,
    alignSelf: 'center',
  },
  dropDownText: {
    fontSize: fontScale(15),
    textAlign: 'center',
  },
});

export default kasirStyle;
