import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useMain } from "../context/MainContext";
import Spinner from "../ui/Spinner";

function WelcomeContent() {
  const { isMobile } = useMain();
  const navigate = useNavigate();

  const { isLoadingUser, user, isSmall } = useMain();

  if (isLoadingUser) return <Spinner />;

  const userData = user.user_metadata;

  return (
    <div className="welcome">
      <div className="back-img"></div>
      <div className="content">
        <div>
          <h3
            style={{
              textAlign: isMobile ? "center" : "",
            }}
          >
            Welcome
          </h3>
          <h1
            style={{
              fontSize: isSmall ? "60px" : "80px",
            }}
          >
            {userData.fullName}
          </h1>
        </div>
        <Button onClick={() => navigate("/home")}>start</Button>
      </div>
    </div>
  );
}

export default WelcomeContent;
