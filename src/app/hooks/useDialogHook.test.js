import { renderHook, act } from '@testing-library/react';
import useDialog from './useDialog.hook';

describe('useDialog hook', () => {
  it('should toggle open state', () => {
    const { result } = renderHook(() => useDialog());

    expect(result.current.open).toBe(false);

    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.open).toBe(true);

    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.open).toBe(false);
  });
});
