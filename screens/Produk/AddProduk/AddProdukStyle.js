import {StyleSheet} from 'react-native';

import colors from '../../../assets/colors/colors';
import findFonts from '../../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/style/scaling';

const addProdukStyle = StyleSheet.create({
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
    textAlign: 'center',
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    alignItems: 'center',
    marginBottom: horizontalScale(20),
  },
});

export default addProdukStyle;
