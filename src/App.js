import { Route, Routes } from "react-router-dom";
import Login from "./feature/login/login";
import Home from "./feature/home/home";
import * as ROUTE from "./navigation/index";
import CommonHeader from "./component/commonheader";
import Services from "./feature/services/services";

function App() {
  return (
    <div>

      
      <CommonHeader/>
      <Routes>
      
      <Route
        element={
          <ROUTE.RestrictedRoute>
            <Login />
          </ROUTE.RestrictedRoute>
        }
        path="/login"
        exact
      />
      <Route
        path="/"
        element={
          <ROUTE.PrivateRoute>
            <Home />
          </ROUTE.PrivateRoute>
        }
      />
       <Route
        path="/services"
        element={
          <ROUTE.PrivateRoute>
            <Services />
          </ROUTE.PrivateRoute>
        }
      />
    </Routes>
    </div>
    
  );
}

export default App;
