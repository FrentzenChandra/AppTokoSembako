import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import colors from '../../assets/colors/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';

const produkStyle = StyleSheet.create({
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
    left: '25%',
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
    zIndex: 12,
    alignSelf: 'center',
  },
  addFloatingBtn: {
    padding: horizontalScale(10),
    backgroundColor: colors.blue,
    width: horizontalScale(52),
    height: horizontalScale(52),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 100,
    right: 30,
    bottom: 30,
    elevation: 2,
  },
  dropDownText: {
    fontSize: fontScale(15),
    textAlign: 'center',
  },
  productContainer: {
    marginHorizontal: horizontalScale(20),
    height: verticalScale(160),
    borderRadius: verticalScale(10),
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginBottom: verticalScale(20),
  },
  productImg: {
    height: verticalScale(90),
    width: '100%',
    objectFit: 'contain',
    backgroundColor: colors.whiteGrey,
    marginBottom: verticalScale(5),
  },
  productInfoCntr: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
  productTitle: {
    fontFamily: findFonts('Rubik', 500),
    color: colors.black,
    fontSize: 16,
  },
  productStock: {
    fontFamily: findFonts('Rubik', 500),
    fontSize: 14,
  },
  productPrice: {
    fontFamily: findFonts('Rubik', 700),
    color: colors.blue,
    fontSize: 18,
  },
  editContainer: {flexDirection: 'row', alignItems: 'center'},
  editIconContainer: {
    padding: horizontalScale(5),
    backgroundColor: colors.green,
    borderRadius: horizontalScale(4),
    overflow: 'hidden',
    marginRight: horizontalScale(7),
  },
  editText: {
    color: colors.green,
    fontSize: fontScale(16),
    fontFamily: findFonts('Rubik', 600),
  },
  deleteContainer: {flexDirection: 'row', alignItems: 'center'},
  deleteIconContainer: {
    padding: horizontalScale(5),
    backgroundColor: colors.red,
    borderRadius: horizontalScale(4),
    overflow: 'hidden',
    marginRight: horizontalScale(7),
  },
  deleteText: {
    color: colors.red,
    fontSize: fontScale(16),
    fontFamily: findFonts('Rubik', 600),
  },
});

export default produkStyle;
