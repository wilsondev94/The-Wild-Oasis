import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //  1. Load Authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //  3. if no auth. user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //  2. Show spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //  3. if auth. user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
