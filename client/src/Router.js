import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import ForgotPass from "./component/forgotPass";

import HomePage from "./component/HomePage";
import RecoverPassword from "./component/RecoverPassword";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

const Routing = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/forgotPassword" element={<ForgotPass/>}/>
          <Route path="/recoverPassword" element={<RecoverPassword/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Routing;
