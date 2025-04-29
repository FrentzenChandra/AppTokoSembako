import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/style/style';
import kasirStyle from './KasirStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import colors from '../../assets/colors/colors';

import DropDownPicker from 'react-native-dropdown-picker';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import {horizontalScale} from '../../assets/style/scaling';

const items = [
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 1, label: 'Banana', value: 'banana'},
  {id: 2, label: 'Banana', value: 'banana'},
  {id: 3, label: 'Banana', value: 'banana'},
  {id: 4, label: 'Banana', value: 'banana'},
  {id: 5, label: 'Banana', value: 'banana'},
  {id: 6, label: 'Banana', value: 'banana'},
  {id: 7, label: 'Banana', value: 'banana'},
  {id: 8, label: 'Banana', value: 'banana'},
  {id: 9, label: 'Banana', value: 'banana'},
  {id: 10, label: 'Banana', value: 'banana'},
  {id: 11, label: 'Banana', value: 'banana'},
  {id: 12, label: 'Banana', value: 'banana'},
  {id: 13, label: 'Banana', value: 'banana'},
];

const pageSize = 6;

const Kasir = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isDDownOpen, setIsDDownOpen] = useState(false);

  const [loadingProduct, setloadingProduct] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedItem, setrenderedItem] = useState([]);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setloadingProduct(true);
    setCurrentPage(1);
    setrenderedItem(pagination(items, 1, pageSize));
    setloadingProduct(false);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        onEndReachedThreshold={0.7}
        onEndReached={() => {
          setloadingProduct(true);

          const dataToAppend = pagination(items, currentPage + 1, pageSize);

          if (dataToAppend.length > 0) {
            setCurrentPage(currentPage + 1);
            setrenderedItem([...renderedItem, ...dataToAppend]);
          }
        }}
        ListHeaderComponent={
          <View style={[kasirStyle.bgWhite, kasirStyle.headerContainer]}>
            <View style={kasirStyle.headerTitleContainer}>
              <TouchableOpacity
                style={globalStyle.buttonPadding}
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <FontAwesomeIcon icon={faBars} color={colors.blue} size={24} />
              </TouchableOpacity>
              <Text style={kasirStyle.headerText}>Kasir</Text>
              <TouchableOpacity
                style={globalStyle.buttonPadding}
                onPress={() => {
                  setIsSearchVisible(false);
                }}>
                <FontAwesomeIcon
                  size={20}
                  icon={faMagnifyingGlass}
                  color={colors.blue}
                />
              </TouchableOpacity>
              <TextInput
                onSubmitEditing={() => {
                  setIsSearchVisible(true);
                  // terjadi penginputan get filter
                }}
                style={[
                  isSearchVisible ? {display: 'none'} : {display: 'flex'},
                  globalStyle.input,
                  kasirStyle.searchInput,
                ]}
              />
            </View>
            <View style={kasirStyle.ruler}></View>
            <DropDownPicker
              containerProps={{
                style: {
                  height: isDDownOpen === true ? 220 : null,
                },
              }}
              onClose={() => setIsDDownOpen(false)}
              onOpen={() => setIsDDownOpen(true)}
              open={open}
              // Seharus nya diubah menjadi kategori
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              autoScroll={true}
              style={kasirStyle.dropDown}
              textStyle={kasirStyle.dropDownText}
            />
          </View>
        }
        data={renderedItem}
        numColumns={2}
        key={({item}) => {
          return item.id;
        }}
        renderItem={() => {
          return (
            <TouchableOpacity
              style={[kasirStyle.productListContainer, kasirStyle.bgWhite]}>
              <Image
                style={kasirStyle.productImg}
                source={require('../../assets/images/404Error.png')}
              />
              <Text style={kasirStyle.productTitle} numberOfLines={2}>
                Ayam Goreng Enak
              </Text>
              <View style={kasirStyle.productInfoContainer}>
                <Text style={kasirStyle.productStock}>Stok : 30</Text>
                <Text style={kasirStyle.productPrice}>Rp.50.000</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity style={kasirStyle.cartButton}>
        <View style={kasirStyle.cartInfoContainer}>
          <FontAwesomeIcon
            size={horizontalScale(20)}
            icon={faCartShopping}
            color={colors.white}
            style={kasirStyle.cartIcon}
          />
          <Text style={kasirStyle.cartInfoText}>8 Produk</Text>
        </View>
        <Text style={kasirStyle.cartInfoText}>Total : Rp. 500.000</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Kasir;
