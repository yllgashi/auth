import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Constants from '../utils/Constants';

const PrimaryButton = props => {
  return (
    <TouchableOpacity
      style={[{...styles.container, ...props.style}]}
      onPress={props.callback}>
      <View style={styles.buttonView}>
        <Text style={styles.text}>{props.text}</Text>
        {/* <Icon /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1868D5',
    paddingVertical: '3%',
    paddingHorizontal: '1%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    color: 'white',
  }
});

export default PrimaryButton;
