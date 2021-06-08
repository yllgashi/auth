import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import firebase from 'firebase';
import AuthContext from '../context/AuthContext';
import Profile from '../components/Profile';

const Home = props => {
  const {userContext, logoutContext} = useContext(AuthContext);

  console.log(userContext);
  const email = userContext ? userContext.email : null;
  console.log(email);

  const authComponent = (
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

  const logoutComponent = (
    <View style={styles.container}>
      <Profile email={email} />
      <Button
        title="Log out"
        onPress={logoutContext}
      />
    </View>
  );

  return userContext ? logoutComponent : authComponent;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default Home;
