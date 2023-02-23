import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useGetProduct from './use-get-product-fragments';

describe('useGetProduct', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGetProduct());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
