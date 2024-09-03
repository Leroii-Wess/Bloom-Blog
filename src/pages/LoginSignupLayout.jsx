import { Outlet } from "react-router-dom";
import LoginSignupNav from "../components/LoginSignupNav";
import PageNav from "../components/PageNav";

function LoginSignupLayout() {
  return (
    <>
      <PageNav />
      <LoginSignupNav />
      <>
        <Outlet />
      </>
    </>
  );
}

export default LoginSignupLayout;
