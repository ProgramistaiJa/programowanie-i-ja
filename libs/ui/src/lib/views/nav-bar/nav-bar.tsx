import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavBarProps {}

const StyledNavBar = styled.div`
  color: pink;
`;

export function NavBar(props: NavBarProps) {
  return (
    <StyledNavBar>
      <h1>Welcome to NavBar!</h1>
    </StyledNavBar>
  );
}

export default NavBar;