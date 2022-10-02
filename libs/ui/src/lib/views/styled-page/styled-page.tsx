import { ReactElement } from 'react';
import styled from 'styled-components';

export interface StyledPageProps {
  children: ReactElement
}

const StyledStyledPage = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export function StyledPage({children}: StyledPageProps) {
  return (
    <StyledStyledPage>
      { children }
    </StyledStyledPage>
  );
}

export default StyledPage;
