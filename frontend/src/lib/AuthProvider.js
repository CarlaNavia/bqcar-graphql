import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, REGISTER } from "./gql-service";
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ login, register, user, logout, isLoggedin }) => {
            return (
              <WrappedComponent
                login={login}
                register={register}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

const AuthProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [registerUser] = useMutation(REGISTER);
  const [loginUser] = useMutation(LOGIN);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedin(true);
    }
  }, []);

  const register = (firstName, lastName, email, password, isDriver) => {
    registerUser({
      variables: { firstName, lastName, email, password, isDriver },
    }).then((result) => {
      if (result) {
        setUser(result.data.registerUser);
        localStorage.setItem("token", result.data.registerUser.token);
      }
    });
  };

  const login = (email, password) => {
    loginUser({
      variables: { email, password },
    }).then((result) => {
      if (result) {
        setUser(result.data.loginUser);
        localStorage.setItem("token", result.data.loginUser.token);
      }
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoading(false);
    setUser(null);
    setIsLoggedin(false);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Provider value={{ isLoggedin, user, login, logout, register }}>
      {props.children}
    </Provider>
  );
};

export { Consumer, withAuth };

export default AuthProvider;
