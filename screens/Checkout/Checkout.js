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
import {
  formatCurrency,
  getSupportedCurrencies,
} from 'react-native-format-currency';

const Checkout = ({navigation}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [itemsList, setitemsList] = useState([
    {id: 0, name: 'Beras SPHP', stock: '20', qty: '10', harga: 250000},
    {id: 1, name: 'Beras SPHP', stock: '20', qty: '10', harga: 250000},
  ]);
  const [inputValue, setinputValue] = useState();
  const [refresh, setrefresh] = useState();
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
        data={itemsList}
        renderItem={data => {
          const [
            valueFormattedWithSymbol,
            valueFormattedWithoutSymbol,
            symbol,
          ] = formatCurrency({
            amount: Number(data.item.harga),
            code: 'IDR',
          });
          return (
            <View style={checkoutStyle.itemContainer}>
              <Image
                style={checkoutStyle.itemImage}
                source={require('../../assets/images/bulog.jpg')}
              />
              <View style={checkoutStyle.itemInfoCntr}>
                <Text style={checkoutStyle.itemInfoTextStyle}>
                  {data.item.name}
                </Text>
                <Text style={checkoutStyle.itemInfoTextStyle}>
                  Stok : {data.item.stock}
                </Text>
                <Text style={checkoutStyle.itemPrice}>
                  {valueFormattedWithSymbol}
                </Text>
              </View>
              <View style={checkoutStyle.itemQty}>
                <TouchableOpacity
                  style={checkoutStyle.plusButton}
                  onPress={() => {
                    let newData = itemsList;
                    newData[data.index].qty = newData[data.index].qty + 1;
                    if (newData[data.index].qty > data.item.stock) {
                      newData[data.index].qty = data.item.stock;
                    }
                    setitemsList(newData);
                    setrefresh(Math.random());
                  }}>
                  <FontAwesomeIcon icon={faPlus} color={colors.white} />
                </TouchableOpacity>
                <TextInput
                  keyboardType="numeric"
                  style={checkoutStyle.qtyInput}
                  onChangeText={input => {
                    let newData = itemsList;
                    newData[data.index].qty = Number(input);

                    if (Number(input) > data.item.stock) {
                      newData[data.index].qty = data.item.stock;
                    }

                    setitemsList(newData);
                    setrefresh(Math.random());
                  }}
                  value={itemsList[data.index].qty.toString()}
                />
                <TouchableOpacity
                  style={checkoutStyle.minusButton}
                  onPress={() => {
                    let newData = itemsList;
                    newData[data.index].qty = newData[data.index].qty - 1;
                    if (newData[data.index].qty < 0) {
                      newData[data.index].qty = 0;
                    }
                    setitemsList(newData);
                    setrefresh(Math.random());
                  }}>
                  <FontAwesomeIcon icon={faMinus} color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>
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
