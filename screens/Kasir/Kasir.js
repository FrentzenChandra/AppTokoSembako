import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
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

const Kasir = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
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
  ]);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isDDownOpen, setIsDDownOpen] = useState(false);

  const productCard = () => {
    return <></>;
  };

  return (
    <SafeAreaView>
      <FlatList
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
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              autoScroll={true}
              style={kasirStyle.dropDown}
              textStyle={kasirStyle.dropDownText}
            />
          </View>
        }
        data={items}
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
    </SafeAreaView>
  );
};

export default Kasir;
