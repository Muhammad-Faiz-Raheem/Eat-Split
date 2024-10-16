import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import { useForgetPass } from "./useForgetPass";

function LoginForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useLogin();
  const { forgotPass } = useForgetPass();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) return;

    login(
      { email: formData.email, password: formData.password },
      {
        onSuccess: () => {
          setFormData({
            email: "",
            password: "",
          });
        },
      }
    );
  };

  function handleResetPassword() {
    console.log("handleResetPassword: " + formData.email);

    forgotPass(
      { email: formData.email },
      {
        onSettled: () => {
          setFormData({
            email: "",
            password: "",
          });
        },
      }
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Login</h1>

          <div className="login-field">
            <label className="login-label" htmlFor="email">
              Email:
            </label>
            <input
              className="login-input"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="login-field">
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot-password" onClick={handleResetPassword}>
            <p>Forgot password?</p>
          </div>

          <div className="login-button">
            <Button type="submit" disabled={isLoading}>
              {!isLoading ? "Login" : <SpinnerMini />}
            </Button>
          </div>

          <div className="register-link">
            <p onClick={onSwitch}>
              Don't have an account? Click here to register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
