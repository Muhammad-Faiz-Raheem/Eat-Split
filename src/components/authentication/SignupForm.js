import { useState } from "react";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const { signup, isSigningUp } = useSignup();

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match! Please try again.");
      return;
    }

    setError(""); // Clear any previous error
    console.log("Form submitted:", formData);
    signup(
      {
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
        onSettled: () => {
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        },
      }
    );
  };

  return (
    <div className="signup-container">
      <div>
        {error && <p className="error-message">{error}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <h1 className="signup-title">Sign Up</h1>

          <div className="form-field">
            <label htmlFor="name" className="signup-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="signup-input"
              required
              disabled={isSigningUp}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="signup-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              required
              disabled={isSigningUp}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="signup-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required
              disabled={isSigningUp}
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
              required
              disabled={isSigningUp}
            />
          </div>

          <button
            type="submit"
            className="signup-button"
            disabled={isSigningUp}
          >
            {isSigningUp ? <SpinnerMini /> : "Sign Up"}
            {/* Sign Up */}
          </button>
        </form>

        <div className="already-have-account">
          <p>Already have an account?</p> <span onClick={onSwitch}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
