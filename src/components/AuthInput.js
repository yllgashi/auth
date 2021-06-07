import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Constants from '../utils/Constants';

const AuthInput = props => {
  return (
    <View>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.changeValue}
        style={[{...styles.textInput, ...props.style}]}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={props.secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: Constants.windowHeight * 0.05,
    width: Constants.windowWidth * 0.8,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    fontSize: 18,
  },
});

export default AuthInput;
