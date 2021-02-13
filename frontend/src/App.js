import { Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { client } from "./lib/graphql";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </ApolloProvider>
  );
};

export default App;
