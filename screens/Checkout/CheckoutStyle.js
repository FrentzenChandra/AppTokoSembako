import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import colors from '../../assets/colors/colors';

const checkoutStyle = StyleSheet.create({
  bgWhite: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    elevation: horizontalScale(5),
  },
  headerText: {
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(22),
    color: colors.blue,
    alignSelf: 'center',
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    alignItems: 'center',
    marginBottom: horizontalScale(20),
  },
  cartButton: {
    backgroundColor: colors.blueDark,
    width: '90%',
    bottom: verticalScale(10),
    height: verticalScale(45),
    borderRadius: horizontalScale(5),
    alignSelf: 'center',
    paddingHorizontal: horizontalScale(20),
    position: 'absolute',
    justifyContent: 'center',
    elevation: horizontalScale(5),
  },
  cartInfoText: {
    color: colors.white,
    fontFamily: findFonts('Rubik', 600),
    fontSize: fontScale(16),
    textAlign: 'center',
  },
  itemContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: horizontalScale(120),
    width: horizontalScale(320),
    borderRadius: horizontalScale(8),
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 4,
    marginBottom: verticalScale(20),
  },
  itemImage: {
    width: '30%',
    height: horizontalScale(120),
    objectFit: 'contain',
    marginRight: horizontalScale(10),
  },
  itemInfoCntr: {
    marginTop: verticalScale(10),
    width: horizontalScale(115),
  },
  itemPrice: {
    marginTop: 'auto',
    marginBottom: verticalScale(10),
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(16),
  },

  itemInfoTextStyle: {
    fontFamily: findFonts('Rubik', 500),
    fontSize: fontScale(17),
  },
  itemQty: {
    marginTop: 'auto',
    marginBottom: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: colors.green,
    padding: horizontalScale(5),
    borderRadius: horizontalScale(5),
    marginRight: 10,
    elevation: 2,
  },
  minusButton: {
    backgroundColor: colors.red,
    padding: horizontalScale(5),
    borderRadius: horizontalScale(5),
    marginLeft: 10,
    elevation: 2,
  },
  qtyInput: {
    borderColor: colors.black,
    borderWidth: 1,
    height: horizontalScale(35),
    width: horizontalScale(28),
    borderRadius: 5,
    color: colors.black,
    fontSize: fontScale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 0,
    fontFamily: findFonts('Rubik', 600),
  },
});

export default checkoutStyle;
