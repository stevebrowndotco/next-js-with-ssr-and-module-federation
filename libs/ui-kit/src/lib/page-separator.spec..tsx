import { render } from '@testing-library/react';

import UiKit, { PageSeparator } from './page-separator';

describe('UiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageSeparator>hi</PageSeparator>);
    expect(baseElement).toBeTruthy();
  });
});
