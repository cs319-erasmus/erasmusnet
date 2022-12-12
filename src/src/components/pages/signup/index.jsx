<<<<<<< HEAD

import React from 'react';
import styled from 'styled-components';
import Logo from "../../common/logo";

const OutsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: -10rem;
  @media (min-width: 640px) { 
    padding: 6rem;
  }`;
const TextContainer = styled.div`
  padding: 0 4px;
  text-align: center;
  @media (min-width: 640px) { padding: 0; }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 28rem;
  margin-top: 2rem;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(26, 35, 126, 0.1);
  padding: 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  box-shadow: 0 0 2.5px rgba(26, 35, 126, 0.85);
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(26, 35, 126, 0.1);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(145, 86, 235);
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(66, 55, 193);
  background: linear-gradient(58deg,
  rgba(66, 35, 193, 1) 20%,
  rgba(66, 35, 193, 1) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;

export default function signUp() {
    return (
            <OutsideContainer>
                <TextContainer>
                    <p className="text-sm font-semibold text-indigo-900 uppercase">
                        Sign up to your account
                    </p>
                  <Logo  className="text-6xl"/>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in
                        </a>
                    </p>
                </TextContainer>
                <FormContainer>
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                </FormContainer>
                <SubmitButton type="submit">Sign up</SubmitButton>
            </OutsideContainer>
    )

}
