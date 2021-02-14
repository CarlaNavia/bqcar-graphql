import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN, REGISTER, PROFILE } from "./gql-auth-service";
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
  const { refetch: refetchProfilUser } = useQuery(PROFILE);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedin(true);
      if (!user) {
        profileUser();
      }
    }
  }, []);

  const register = (firstName, lastName, email, password, isDriver) => {
    registerUser({
      variables: { firstName, lastName, email, password, isDriver },
    }).then((result) => {
      if (result) {
        setUser(result.data.registerUser);
        setIsLoggedin(true);
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
        setIsLoggedin(true);
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

  const profileUser = () => {
    refetchProfilUser().then((result) => {
      if (result) {
        setUser(result.data.profile);
        setIsLoggedin(true);
      }
    });
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
