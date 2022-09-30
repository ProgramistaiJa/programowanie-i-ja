import { NavBar } from '@programowanie-i-ja/ui';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
      <NavBar />
        <div className="container">
          <NavBar />
          <div id="welcome">
            <h1>
              Welcome javascript-i-ja 👋
            </h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
