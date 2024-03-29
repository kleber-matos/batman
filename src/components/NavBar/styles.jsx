import styled from "styled-components";

export const NavBar = styled.header`
  /* border: solid 2px blue; */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  h2 {
    margin-left: 10px;
  }
`;

export const Nav = styled.nav`
  /* border: solid; */

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    max-width: 300px;
    display: flex;
    margin-right: 10px;
  }

  a {
    color: white;
    font-weight: bold;
  }
`;
