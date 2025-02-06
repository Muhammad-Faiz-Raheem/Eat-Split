import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useMain } from "../context/MainContext";

function ProtectedLoginRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  // const { user, isLoading, isAuthenticated } = useUser();
  const { isLoadingUser, isAuthenticated } = useMain();

  // 2. If there is NO authenticated user, then redirect to the /login
  useEffect(
    function () {
      if (isAuthenticated && !isLoadingUser) navigate("/home");
    },
    [isAuthenticated, isLoadingUser, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoadingUser)
    return (
      <div className="protected-route">
        <Spinner />
      </div>
    );

  // 4. If there is a user render the app

  if (!isAuthenticated) return children;
}

export default ProtectedLoginRoute;
