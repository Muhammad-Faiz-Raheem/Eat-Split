import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useMain } from "../../context/MainContext";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout } = useLogout();
  const { isLoadingUser, user, isSmall } = useMain();

  if (isLoadingUser) return <SpinnerMini />;

  const userData = user.user_metadata;

  // function info() {
  //   console.log(user.user_metadata);
  // }

  return (
    // <div className="logout-button" onClick={logout}>
    <div
      className="logout-container"
      onClick={() => {
        logout();
      }}
    >
      <h5 style={{ fontSize: isSmall ? "20px" : "30px" }}>
        {userData.fullName}
      </h5>
      <div className="logout-button">
        {!isLoadingUser ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </div>
    </div>
  );
}

export default Logout;
