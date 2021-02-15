import { Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { client } from "./lib/apollo";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./lib/AuthProvider";
import MyRides from "./pages/MyRides";
import MyCar from "./pages/MyCar/MyCar";
import AddCar from "./pages/AddCar/AddCar";
import Confirm from "./pages/Confirm/Confirm";
import Navbar from "./components/Navbar/Navbar";
import ActionBar from "./components/ActionBar/ActionBar";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Navbar />
        <ActionBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/myrides" component={MyRides} />
        <PrivateRoute exact path="/mycar" component={MyCar} />
        <PrivateRoute exact path="/addcar" component={AddCar} />
        <PrivateRoute exact path="/confirm" component={Confirm} />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
