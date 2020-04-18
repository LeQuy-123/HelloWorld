/* eslint-disable react/no-string-refs */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styleslogin.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView
          keyboardVerticalOffset={-500}
          behavior="padding"
          style={styleslogin.container}>
          <TouchableWithoutFeedback
            style={styleslogin.container}
            onPress={Keyboard.dismiss}>
            <View style={styleslogin.background} blurOnSubmit={false}>
              <View style={styleslogin.header1}>
                <Text style={styleslogin.header_text1_1}> Genealogy </Text>
                <TouchableOpacity>
                  <Text style={styleslogin.header_text1_2}> Sign in </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styleslogin.header_text1_2}> Sign up </Text>
                </TouchableOpacity>
              </View>
              <View style={styleslogin.header2}>
                <Text style={styleslogin.header_text2_1}> Welcome back! </Text>
                <Text style={styleslogin.header_text2_2}>
                  {' '}
                  Sign in to continue{' '}
                </Text>
              </View>
              <View style={styleslogin.body}>
                <View style={styleslogin.text_container}>
                  <Text style={styleslogin.text}>Email address: </Text>
                  <TextInput
                    textContentType="emailAddress"
                    style={styleslogin.input_text}
                    onSubmitEditing={() => {
                      this.secondTextInput.focus();
                    }}
                    editable
                    //placeholder="Email address"
                    autoCorrect={false}
                  />
                  <Text style={styleslogin.text}>Password: </Text>
                  <TextInput
                    secureTextEntry={true}
                    textContentType="password"
                    style={styleslogin.input_text}
                    ref={input => {
                      this.secondTextInput = input;
                    }}
                    editable
                    //placeholder="Password"
                    autoCorrect={false}
                  />
                </View>
                <View style={styleslogin.button_group}>
                  <TouchableOpacity style={styleslogin.buttonContainer}>
                    <Text style={styleslogin.text_in_button}> SIGN IN </Text>
                  </TouchableOpacity>
                  <Text>---Or you can also---</Text>
                  <TouchableOpacity style={styleslogin.buttonContainer}>
                    <Text style={styleslogin.text_in_button}>
                      Sign in with Google
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styleslogin = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#00B2BF',
  },
  header1: {
    width: '100%',
    flex: 1.9,
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  header2: {
    width: '100%',
    flex: 2.1,
  },
  body: {
    width: '100%',
    flex: 6,
    backgroundColor: 'white',
    borderRadius: 36,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
  },
  text_container: {
    flex: 4,
    width: '100%',
    //paddingBottom: 30,
    //backgroundColor: 'green',
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
    fontFamily: 'serif',
  },
  input_text: {
    padding: 10,
    fontSize: 18,
    height: 40,
    borderBottomWidth: 1,
    fontFamily: 'serif',
  },
  button_group: {
    width: '100%',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'blue',
    paddingTop: 150,
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#00B2BF',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 5.0,
    elevation: 10,
  },
  text_in_button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    opacity: 0.8,
    fontFamily: 'serif',
  },
  header_text2_1: {
    fontSize: 30,
    paddingTop: 20,
    paddingStart: 40,
    //fontFamily: 'serif',
    color: 'white',
    fontWeight: 'bold',
  },
  header_text2_2: {
    fontSize: 15,
    paddingTop: 5,
    paddingStart: 45,
    //fontFamily: 'serif',
    color: 'white',
    fontWeight: 'bold',
  },
  header_text1_1: {
    fontSize: 40,
    flex: 6,
    paddingTop: 40,
    paddingStart: 40,
    fontFamily: 'serif',
    color: '#FFD555',
    fontWeight: 'bold',
  },
  header_text1_2: {
    paddingTop: 30,
    fontSize: 15,
    flex: 1.5,
    fontFamily: 'serif',
    color: 'white',
    fontWeight: 'bold',
  },
});
