import { Redirect, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { client } from "./lib/apollo";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./lib/AuthProvider";



const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={Home} />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
