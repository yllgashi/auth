import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import firebase from 'firebase';

import TouchableText from '../components/TouchableText';
import AuthInput from '../components/AuthInput';
import Constants from '../utils/Constants';
import PrimaryButton from '../components/PrimaryButton';

const Register = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); // for error message

  const register = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      // show error message
      setError(true);
    }
  };

  // each time user modify email or password, error message is removed
  useEffect(() => {
    setError(false);
  }, [email, password]);

  // error message
  const errorText = error ? (
    <Text style={{color: 'red'}}>Try another email or password</Text>
  ) : null;

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <AuthInput
          value={email}
          placeholder={'email'}
          changeValue={setEmail}
          secureText={false}
        />
        <AuthInput
          value={password}
          placeholder={'password'}
          changeValue={setPassword}
          secureText={true}
        />
        {/* error message */}
        {errorText}
        <PrimaryButton text="Register" callback={register} />

        <TouchableText
          text="Login instead..."
          callback={() => props.navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  loginContainer: {
    height: Constants.windowHeight * 0.2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Register;
