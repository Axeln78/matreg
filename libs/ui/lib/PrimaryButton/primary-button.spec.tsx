import { render } from '@testing-library/react';

import PrimaryButton from '.';

describe('PrimaryButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrimaryButton />);
    expect(baseElement).toBeTruthy();
  });
});
