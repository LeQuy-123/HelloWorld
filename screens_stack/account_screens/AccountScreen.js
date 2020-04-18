/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function AccountScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Account</Text>
          <View style={styles.infocontainer}>
            <View style={styles.images} />
            <View style={styles.info}>
              <Text style={styles.infoText}> Họ tên: </Text>
              <Text style={styles.infoText}> Tuổi: </Text>
              <Text style={styles.infoText}> Biệt danh: </Text>
            </View>
          </View>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.inputs}>
            <Text style={styles.baseText}> Số điện thoại: </Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Chua cap nhat!"
            />
            <Text style={styles.baseText}> Ngày sinh: </Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Chua cap nhat!"
            />
            <Text style={styles.baseText}> Giới tính: </Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Chua cap nhat!"
            />
            <Text style={styles.baseText}> Email: </Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Chua cap nhat!"
            />
            <Text style={styles.baseText}> Địa chỉ: </Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Chua cap nhat!"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B2BF',
  },
  inputcontainer: {
    flex: 6.8,
    backgroundColor: '#FBBD00',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titlecontainer: {
    flex: 3.2,
    backgroundColor: '#00B2BF',
  },
  title: {
    flex: 1,
    //backgroundColor: 'white',
    fontSize: 35,
    fontFamily: 'Times New Roman',
    paddingStart: 20,
    textAlignVertical: 'center',
    color: 'white',
  },
  infocontainer: {
    flex: 2,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 30,
  },
  images: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputs: {
    width: '90%',
    height: 330,
    //backgroundColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  baseText: {
    fontFamily: 'Times New Roman',
    fontSize: 18,
  },
  infoText: {
    fontFamily: 'Times New Roman',
    fontSize: 18,
    width: '95%',
    height: 25,
    backgroundColor: '#AEECEF',
    borderRadius: 15,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    flex: 1,
    textAlignVertical: 'bottom',
    fontFamily: 'Times New Roman',
    fontSize: 18,
  },
});
