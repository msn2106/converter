import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import Nav from "./Nav";
import { SiConvertio } from "react-icons/si";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/converter">
        <div style={{display:'flex'}}>
          <SiConvertio fontSize="5em"/>
          <h2> Converter</h2>
        </div>
      </NavLink>
      {/* <Nav /> */}
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
