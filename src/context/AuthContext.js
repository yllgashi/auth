import React from 'react';

const AuthContext = React.createContext();

export const AuthProvider = children => {
    const login = async (email, password) => {
        // ...
    }

    const signup = async (email, password) => {
        // ...
    }

    const logout = async () => {
        // ...
    }

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContext;
