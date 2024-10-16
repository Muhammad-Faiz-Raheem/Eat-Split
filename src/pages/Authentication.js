import { useState } from "react";
import LoginForm from "../components/authentication/LoginForm";
import SignupForm from "../components/authentication/SignupForm";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  function handleSwitch() {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        {isLogin ? (
          <LoginForm onSwitch={handleSwitch} />
        ) : (
          <SignupForm onSwitch={handleSwitch} />
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Authentication;
