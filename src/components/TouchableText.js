import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Constants from '../utils/Constants';

const TouchableText = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.callback}>
        <Text style={[{...styles.text, ...props.style}]}>{props.text}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: Constants.windowWidth,
  },
});

export default TouchableText;
