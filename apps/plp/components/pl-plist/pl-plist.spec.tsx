import { render } from '@testing-library/react';

import PlPList from './pl-plist';

describe('PlPList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlPList />);
    expect(baseElement).toBeTruthy();
  });
});
