import React from 'react';

type AuthProps = {
  isAuthenticated: boolean;
  authenticate: Function;
  signout: Function;
};

export const AuthContext = React.createContext({} as AuthProps);

const isValidToken = () => {
  const token = localStorage.getItem('AdminToken');
  // JWT decode & check token validity & expiration.
      

  if (token) return true;
  return false;
};

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = React.useState(isValidToken());
  function authenticate(token, cb) {
    makeAuthenticated(true);
    localStorage.setItem('AdminToken', token);
    setTimeout(cb, 100); // fake async
  }
  function signout(cb) {
    makeAuthenticated(false);
    localStorage.removeItem('AdminToken');
    setTimeout(cb, 100);
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
