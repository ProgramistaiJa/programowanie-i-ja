import styled from 'styled-components';
import UiLink, { UiLinkProps } from '../../components/link/link';


export interface NavBarProps {
  links: UiLinkProps[]
}

const StyledNavBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;
const NavBarLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  column-gap: 10px;
  
`

export function NavBar({links}: NavBarProps) {
  return (
    <StyledNavBar>
      <NavBarLinks>
        {links && links.map(({href, text}) => (
          <li key={text}><UiLink href={href} text={text}/></li>
        ))}
      </NavBarLinks>
      <h1>Welcome to NavBar!</h1>
      <div>User name</div>
    </StyledNavBar>
  );
}

export default NavBar;
