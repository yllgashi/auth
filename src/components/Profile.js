import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Constants from '../utils/Constants';

const Profile = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Email: </Text>
        <Text style={styles.text}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: Constants.windowWidth * 0.5,
    height: Constants.windowHeight * 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: 'grey',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {fontSize: 15, color: 'grey'},
  text: {fontSize: 15},
});

export default Profile;
