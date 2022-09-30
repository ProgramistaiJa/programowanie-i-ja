import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      Welcome Button!
    </StyledButton>
  );
}

export default Button;
