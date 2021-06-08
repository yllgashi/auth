import React from 'react';
import firebase from 'firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

  const loginContext = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      return error;
    }
  };

  const signupContext = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return error;
    }
  };

  const logoutContext = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{loginContext: loginContext, logoutContext: logoutContext, signupContext: signupContext}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
