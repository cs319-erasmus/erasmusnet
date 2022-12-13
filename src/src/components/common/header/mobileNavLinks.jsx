import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import {useNavigate} from "react-router-dom";
import {MenuToggle} from "./menuToggle";

const NavLinksContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 18%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 65px;
  left: 0;
  align-items: center;
`;

const LinkItem = styled.li`
&:hover {
    border-top: 2px solid #6363e7;
  }
  `;

const Link = styled.div`
  text-decoration: none;
  color: rgb(107 114 128);
  font-size: 16px;
  width: 100%;
  padding: 0 1.1em;
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;


export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    const home = () => {
        navigate("/", { replace: true });
        document.getElementById("hero").scrollIntoView();
    };
    const about = () => {
        navigate("/", { replace: true });
        document.getElementById("about").scrollIntoView();
    };
    const contact = () => {
        navigate("/", { replace: true });
        document.getElementById("contact").scrollIntoView();
    };
  return (
    <NavLinksContainer aria-label="Site Nav" class="hidden md:block" >
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
            <LinkItem>
                <Link href="#" onClick={home}>Home</Link>
            </LinkItem>
            <LinkItem>
                <Link href="#" onClick={about}>About Us</Link>
            </LinkItem>
            <LinkItem>
                <Link href="#" onClick={contact}>Contact</Link>
            </LinkItem>
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
