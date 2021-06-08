import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import AuthContext from '../context/AuthContext';
import Profile from '../components/Profile';

const Home = props => {
  const {userContext, logoutContext} = useContext(AuthContext);
  const [email, setEmail] = useState(null);

  // setEmail is executed only when userContext changes
  useEffect(() => {
    setEmail(userContext ? userContext.email : null);
  }, [userContext]);

  // view when user is not authenticated
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

  // view when user is authenticated
  const logoutComponent = (
    <View style={styles.container}>
      <Profile email={email} />
      <Button title="Log out" onPress={logoutContext} />
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
