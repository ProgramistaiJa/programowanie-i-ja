import { render } from '@testing-library/react';

import StyledPage from './styled-page';

describe('StyledPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledPage />);
    expect(baseElement).toBeTruthy();
  });
});
