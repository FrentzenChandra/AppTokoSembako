import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import addProdukStyle from './AddProdukStyle';
import colors from '../../../assets/colors/colors';
import globalStyle from '../../../assets/style/style';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const AddProduk = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={[addProdukStyle.bgWhite, addProdukStyle.headerContainer]}>
        <View style={addProdukStyle.headerTitleContainer}>
          <TouchableOpacity
            style={globalStyle.buttonPadding}
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faArrowLeft} color={colors.blue} size={24} />
          </TouchableOpacity>
          <Text style={addProdukStyle.headerText}>Tambah Produk</Text>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProduk;
