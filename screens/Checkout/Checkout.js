import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import globalStyle from '../../assets/style/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../assets/colors/colors';

import checkoutStyle from './CheckoutStyle';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {horizontalScale, verticalScale} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';

const items = [
  {id: 0, label: 'Apple', value: 'apple'},
  // {id: 1, label: 'Banana', value: 'banana'},
  // {id: 2, label: 'Banana', value: 'banana'},
  // {id: 3, label: 'Banana', value: 'banana'},
  // {id: 4, label: 'Banana', value: 'banana'},
  // {id: 5, label: 'Banana', value: 'banana'},
  // {id: 6, label: 'Banana', value: 'banana'},
  // {id: 7, label: 'Banana', value: 'banana'},
  // {id: 8, label: 'Banana', value: 'banana'},
  // {id: 9, label: 'Banana', value: 'banana'},
  // {id: 10, label: 'Banana', value: 'banana'},
  // {id: 11, label: 'Banana', value: 'banana'},
  // {id: 12, label: 'Banana', value: 'banana'},
  // {id: 13, label: 'Banana', value: 'banana'},
];

const Checkout = ({navigation}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[checkoutStyle.bgWhite, checkoutStyle.headerContainer]}>
        <View style={checkoutStyle.headerTitleContainer}>
          <TouchableOpacity
            style={globalStyle.buttonPadding}
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faArrowLeft} color={colors.blue} size={24} />
          </TouchableOpacity>
          <Text style={checkoutStyle.headerText}>Checkout</Text>
          <View style={{flex: 1}}></View>
        </View>
      </View>
      <FlatList
        data={items}
        renderItem={() => {
          return (
            <TouchableOpacity style={checkoutStyle.itemContainer}>
              <Image
                style={checkoutStyle.itemImage}
                source={require('../../assets/images/bulog.jpg')}
              />
              <View style={checkoutStyle.itemInfoCntr}>
                <Text style={checkoutStyle.itemInfoTextStyle}>
                  Beras SPHP 5 Kg
                </Text>
                <Text style={checkoutStyle.itemInfoTextStyle}>
                  Stok : <Text>30</Text>
                </Text>
                <Text style={checkoutStyle.itemPrice}>
                  Rp. <Text>250.000</Text>
                </Text>
              </View>
              <View style={checkoutStyle.itemQty}>
                <TouchableOpacity style={checkoutStyle.plusButton}>
                  <FontAwesomeIcon icon={faPlus} />
                </TouchableOpacity>
                <TouchableOpacity style={checkoutStyle.minusButton}>
                  <FontAwesomeIcon icon={faMinus} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          // Ganti jadi routes Pembayaran
          //   navigation.navigate(Routes.Checkout);
        }}
        style={checkoutStyle.cartButton}>
        <Text style={checkoutStyle.cartInfoText}>Selesai</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;
