import Logout from "../components/authentication/Logout";
import { useMain } from "../context/MainContext";

function Header() {
  const { isSmall, isAuthenticated } = useMain();

  return (
    <div className="header">
      <span
        className="logo"
        style={{
          marginTop: isSmall ? "-10px" : "-18px",
        }}
      >
        <img src="/logo.png" alt="logo" width={80} />
      </span>

      <span className="name">
        <img src="/name.png" alt="logo" width={300} />
      </span>

      <span className="text">
        <p
          className="text-p"
          style={{
            fontSize: isSmall ? 13 : 20,
          }}
        >
          Split you bill with friends in easy steps
        </p>

        {isAuthenticated && <Logout />}
      </span>
    </div>
  );
}

export default Header;
