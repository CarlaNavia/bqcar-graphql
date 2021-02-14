import { Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { client } from "./lib/apollo";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./lib/AuthProvider";
import MyRides from "./pages/MyRides";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/myrides" component={MyRides} />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
