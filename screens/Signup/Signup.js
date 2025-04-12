import React, {useState, useEffect} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/style/style';
import signupStyle from './SignupStyle';
import Routes from '../../navigation/Routes';

const Signup = ({navigation}) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();
  return (
    <SafeAreaView style={globalStyle.whiteBg}>
      <ImageBackground
        style={signupStyle.headerBgImage}
        source={require('../../assets/images/UI_Header_Design.png')}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={[globalStyle.button, signupStyle.signInBtn]}>
          <Text style={globalStyle.buttonTxt}>Back ?</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={signupStyle.headerTxt}>New User? Let's SignUp</Text>
      <View style={signupStyle.iconsContainer}>
        <TouchableOpacity onPress={{}}>
          <Image
            style={signupStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-facebook-96.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <Image
            style={signupStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-google-96.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={{}}>
          <Image
            style={signupStyle.socmedIconLgn}
            source={require('../../assets/images/icons8-twitter-96.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={signupStyle.rulerContainer}>
        <View style={signupStyle.ruler} />
        <Text style={{color: '#828282', fontSize: 18}}>OR</Text>
        <View style={signupStyle.ruler} />
      </View>
      <View style={signupStyle.inputsContainer}>
        <Text style={globalStyle.infoInput}>Email*</Text>
        <TextInput
          onChange={input => {
            setemail(input);
          }}
          value={username}
          placeholderTextColor={'#828282'}
          placeholder="Email"
          style={globalStyle.input}></TextInput>
        <Text style={globalStyle.infoInput}>Username*</Text>
        <TextInput
          onChange={input => {
            setusername(input);
          }}
          value={email}
          placeholderTextColor={'#828282'}
          placeholder="Username"
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
          placeholder="Password"
          style={globalStyle.input}></TextInput>
      </View>
      <TouchableOpacity style={[globalStyle.button, signupStyle.signupButton]}>
        <Text style={[globalStyle.buttonTxt, {color: 'white'}]}>Sign Up</Text>
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/UI_Footer_Design.png')}
        style={signupStyle.footerImg}></Image>
    </SafeAreaView>
  );
};

export default Signup;
