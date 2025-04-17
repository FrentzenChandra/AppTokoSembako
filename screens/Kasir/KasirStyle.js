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
  },
  headerContainer: {
    marginBottom: verticalScale(20),
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
  productListContainer: {
    borderRadius: verticalScale(5),
    paddingBottom: verticalScale(5),
    overflow: 'hidden',
    marginHorizontal: horizontalScale(14),
    marginBottom: verticalScale(20),
    zIndex: 1,
  },
  productImg: {
    height: verticalScale(88),
    width: horizontalScale(146),
    objectFit: 'cover',
  },
  productTitle: {
    fontFamily: findFonts('Rubik', 500),
    display: 'flex',
    width: horizontalScale(146),
    marginTop: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
    marginBottom: verticalScale(20),
  },
  productInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(5),
    justifyContent: 'space-between',
  },
  productStock: {
    fontFamily: findFonts('Rubik', 500),
  },
  productPrice: {
    fontFamily: findFonts('Rubik', 500),
    color: colors.blueDark,
  },
});

export default kasirStyle;
