import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        © {new Date().getFullYear()} Eat & Split. All rights reserved. This
        project is licensed under the{" "}
        <a href="/LICENSE" style={linkStyle}>
          MIT License
        </a>
        .
      </p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "10px 20px",
  backgroundColor: "#f8f8f8",
  color: "#333",
  borderTop: "1px solid #e7e7e7",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default Footer;
