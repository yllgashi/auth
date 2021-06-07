import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Login')}
      />
      <Button
        title="Register"
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default Home;
