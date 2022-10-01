import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StyledPageProps {}

const StyledStyledPage = styled.div`
  color: pink;
`;

export function StyledPage(props: StyledPageProps) {
  return (
    <StyledStyledPage>
      <h1>Welcome to StyledPage!</h1>
    </StyledStyledPage>
  );
}

export default StyledPage;
