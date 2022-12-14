import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const NavLinksContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  color: rgb(107 114 128);

  &:hover {
    border-top: 2px solid #6363e7;
  }
`;

const Link = styled.div`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
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
        <LinksWrapper>
          <LinkItem>
            <Link onClick={home}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={about}>About Us</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={contact}>Contact</Link>
          </LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
  );
}
