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
import produkStyle from './ProdukStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import colors from '../../assets/colors/colors';

import DropDownPicker from 'react-native-dropdown-picker';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import {faPencil, faPlus} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

const items = [
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
  {id: 0, label: 'Apple', value: 'apple'},
];

const Produk = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isDDownOpen, setIsDDownOpen] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [productCurrentPage, setproductCurrentPage] = useState(1);
  const [productRenderedData, setproductRenderedData] = useState([]);
  const pageSize = 4;
  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setProductLoading(true);
    setproductCurrentPage(1);
    setproductRenderedData(pagination(items, 1, pageSize));
    setProductLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity style={produkStyle.addFloatingBtn}>
        <FontAwesomeIcon
          icon={faPlus}
          color={colors.white}
          size={horizontalScale(30)}
        />
      </TouchableOpacity>
      <FlatList
        onEndReachedThreshold={0.7}
        onEndReached={() => {
          setProductLoading(true);
          const dataToAppend = pagination(
            items,
            productCurrentPage + 1,
            pageSize,
          );
          if (dataToAppend.length > 0) {
            setproductCurrentPage(productCurrentPage + 1);
            setproductRenderedData([...productRenderedData, ...dataToAppend]);
          }
        }}
        ListHeaderComponent={
          <View style={[produkStyle.bgWhite, produkStyle.headerContainer]}>
            <View style={produkStyle.headerTitleContainer}>
              <TouchableOpacity
                style={globalStyle.buttonPadding}
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <FontAwesomeIcon icon={faBars} color={colors.blue} size={24} />
              </TouchableOpacity>
              <Text style={produkStyle.headerText}>List Produk</Text>
              <TouchableOpacity
                style={globalStyle.buttonPadding}
                onPress={() => {
                  setIsSearchVisible(false);
                }}>
                <FontAwesomeIcon
                  size={20}
                  icon={faMagnifyingGlass}
                  color={colors.blue}
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TextInput
                onSubmitEditing={() => {
                  setIsSearchVisible(true);
                }}
                style={[
                  isSearchVisible ? {display: 'none'} : {display: 'flex'},
                  produkStyle.searchInput,
                  globalStyle.input,
                ]}
              />
            </View>
            <View style={produkStyle.ruler}></View>
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
              autoScroll={true}
              style={produkStyle.dropDown}
              textStyle={produkStyle.dropDownText}
            />
          </View>
        }
        data={productRenderedData}
        key={({item}) => {
          return item.id;
        }}
        renderItem={() => {
          return (
            <TouchableOpacity style={produkStyle.productContainer}>
              <Image
                source={require('../../assets/images/bulog.jpg')}
                style={produkStyle.productImg}
              />
              <View style={produkStyle.productInfoCntr}>
                <View>
                  <Text style={produkStyle.productTitle}>Beras SPHP 5KG</Text>
                  <Text style={produkStyle.productStock}>
                    Stok :{' '}
                    <Text
                      style={{
                        color: colors.red,
                      }}>
                      30
                    </Text>
                  </Text>
                </View>
                <Text style={produkStyle.productPrice}>Rp.160.000</Text>
              </View>
              <View style={produkStyle.productInfoCntr}>
                <TouchableOpacity style={produkStyle.editContainer}>
                  <View style={produkStyle.editIconContainer}>
                    <FontAwesomeIcon
                      color={colors.white}
                      icon={faPencil}></FontAwesomeIcon>
                  </View>
                  <Text style={produkStyle.editText}>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={produkStyle.deleteContainer}>
                  <View style={produkStyle.deleteIconContainer}>
                    <FontAwesomeIcon color={colors.white} icon={faTrash} />
                  </View>
                  <Text style={produkStyle.deleteText}>Ubah</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Produk;
