import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import LoginSignupLayout from "./pages/LoginSignupLayout";
import Login from "./pages/Login";
import LoginDisplay from "./pages/LoginDisplay";
import Signup from "./pages/Signup";
import SignupDisplay from "./pages/SignupDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login-signup" element={<LoginSignupLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="login/welcome" element={<LoginDisplay />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/signup-welcome" element={<SignupDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
