import { render } from '@testing-library/react';

import InfoCard from '.';

describe('InfoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoCard />);
    expect(baseElement).toBeTruthy();
  });
});
