import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RightButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6363e7;
  background-image: linear-gradient(to right, transparent 0%, #db489b 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #db489b;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LeftButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #6363e7;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #6363e7;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #6363e7;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const login = () => {
    navigate("/login", { replace: true });
  };
  const signup = () => {
    navigate("/signup", { replace: true });
  };
  const appointments = () => {
    navigate("/appointments", { replace: true });
  };
  const profile = () => {
    navigate("/profile", { replace: true });
  };
  return user === null ? (
    <AccessibilityContainer>
      <LeftButton onClick={login}>Login</LeftButton>
      <RightButton onClick={signup}>Sign Up</RightButton>
    </AccessibilityContainer>
  ) : (
    <AccessibilityContainer>
     <LeftButton onClick={appointments}>Appointments</LeftButton>
      <RightButton onClick={profile}>Profile</RightButton>
    </AccessibilityContainer>
  );
}
