import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";

import Navbar from "./components/NaveBar/NavBar";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserGoodDeedsPage from "./pages/UserGoodDeedsPage/UserGoodDeedsPage";
import GlobalGoodDeedsPage from "./pages/GlobalGoodDeedsPage/GlobalGoodDeedsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage/AdminDashboardPage";

import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {" "}
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user-good-deeds" component={UserGoodDeedsPage} />
          <Route path="/global-good-deeds" component={GlobalGoodDeedsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/admin-dashboard" component={AdminDashboardPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
