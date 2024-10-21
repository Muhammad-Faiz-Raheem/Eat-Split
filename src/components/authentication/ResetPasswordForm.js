import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match! Please try again.");
      return;
    }

    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Error resetting password:", error.message);
      toast.error("Failed to reset password");
    } else {
      toast.success("Password reset successful");
      console.log(data);
      navigate("/home"); // Redirect the user to the home page
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        minHeight: "540px",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{error && <p className="error-message">{error}</p>}</div>
      <div
        style={{
          marginTop: "120px",
        }}
      >
        <form
          onSubmit={handleResetPassword}
          style={{
            padding: "20px",
            height: "350px",
            width: "320px",
            backgroundColor: "#583005",
            borderRadius: "25px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 className="login-title">Reset Password</h2>

          <div className="login-field" style={{ gap: "5px" }}>
            <label className="login-label">Enter New Password</label>
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
              }}
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-field" style={{ gap: "5px" }}>
            <label className="login-label">Confirm Password</label>
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="signup-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
