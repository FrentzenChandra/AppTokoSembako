import React, {useState, useEffect} from 'react';
import {
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

const Kasir = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  return (
    <SafeAreaView>
      <View style={kasirStyle.bgWhite}>
        <View style={kasirStyle.headerTitleContainer}>
          <TouchableOpacity style={globalStyle.buttonPadding}>
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
    </SafeAreaView>
  );
};

export default Kasir;
