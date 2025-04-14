import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/style/style';
import LoginStyle from './LoginStyle';
import Routes from '../../navigation/Routes';

const Login = ({navigation}) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <ImageBackground
        style={LoginStyle.headerBgImage}
        source={require('../../assets/images/UI_Header_Design.png')}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.SignUp);
          }}
          style={[globalStyle.button, LoginStyle.signInBtn]}>
          <Text style={globalStyle.buttonTxt}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={LoginStyle.headerTxt}>Sign In To Continue</Text>
      <View style={LoginStyle.iconsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={LoginStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-facebook-96.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <Image
            style={LoginStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-google-96.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <Image
            style={LoginStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-twitter-96.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={LoginStyle.rulerContainer}>
        <View style={LoginStyle.ruler} />
        <Text style={{color: '#828282', fontSize: 18}}>OR</Text>
        <View style={LoginStyle.ruler} />
      </View>
      <View style={LoginStyle.inputsContainer}>
        <Text style={globalStyle.infoInput}>Email ID*</Text>
        <TextInput
          onChange={input => {
            setemail(input);
          }}
          value={email}
          placeholderTextColor={'#828282'}
          placeholder="Email"
          style={globalStyle.input}></TextInput>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={globalStyle.infoInput}>Password*</Text>
          <TouchableOpacity>
            <Text style={globalStyle.infoInput}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          onChange={input => {
            setpassword(input);
          }}
          secureTextEntry={true}
          value={password}
          placeholderTextColor={'#828282'}
          placeholder="Password*"
          style={globalStyle.input}></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Kasir);
        }}
        style={[globalStyle.button, LoginStyle.loginButton]}>
        <Text style={[globalStyle.buttonTxt, {color: 'white'}]}>Sign In</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/UI_Footer_Design.png')}
        style={LoginStyle.footerImg}></Image>
    </SafeAreaView>
  );
};

export default Login;
