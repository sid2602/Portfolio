import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3em;
  background-color: ${({ active }) =>
    active ? "rgba(120, 190, 255,1)" : "rgba(120, 190, 255,0)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  z-index: 1000;
`;

export const NavLink = styled.a`
  color: white;
  font-size: ${({ name }) => (name ? "1.5em" : "1.2em")};
  padding: 0.5em;
  transition: 0.2s;

  &:hover {
    color: #dedede;
  }

  @media (max-width: 350px) {
    font-size: 1em;
  }
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  font-size: 2em;
  color: white;
  display: none;
  outline: none;

  @media (max-width: 750px) {
    display: block;
    z-index: 1001;
  }

  @media (max-width: 350px) {
    font-size: 1.5em;
  }
`;

export const List = styled.ul`
  display: flex;
  left: 0;
  background-color: rgba(120, 190, 255, 0);
  li {
    margin: 0 1em;
    transition: 0.2;
  }

  @media (max-width: 750px) {
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    left: ${({ active }) => (active ? "0" : "100%")};
    background-color: rgba(120, 190, 255, 0.9);
    transition: 0.2s 0.2s;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;

    li {
      padding: 0.5em;
      font-size: 2em;
      opacity: 1;
    }
  }
`;
