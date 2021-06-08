import React, {useState} from 'react';
import firebase from 'firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [userContext, setUserContext] = useState();

  const loginContext = async (email, password) => {
    try {
      var userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      // initialize user
      setUserContext(firebase.auth().currentUser);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const signupContext = async (email, password) => {
    try {
      var userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // initialize user
      setUserContext(firebase.auth().currentUser);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const logoutContext = async () => {
    try {
      firebase.auth().signOut();
      setUserContext(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userContext: userContext,
        setUserContext: setUserContext,
        loginContext: loginContext,
        logoutContext: logoutContext,
        signupContext: signupContext,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
