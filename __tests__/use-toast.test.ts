import {reducer} from '@/hooks/use-toast';

describe('Toast Reducer', () => {
  const initialState = {toasts: []};
  const mockToast = {
    id: '1',
    title: 'Test Toast',
    description: 'This is a test toast',
    open: true,
  };

  it('adds a toast correctly', () => {
    const action = {
      type: 'ADD_TOAST' as const,
      toast: mockToast,
    };

    const newState = reducer(initialState, action);

    expect(newState.toasts).toHaveLength(1);
    expect(newState.toasts[0]).toEqual(mockToast);
  });

  it('updates a toast correctly', () => {
    const stateWithToast = {
      toasts: [mockToast],
    };

    const updatedToast = {
      id: '1',
      title: 'Updated Toast',
    };

    const action = {
      type: 'UPDATE_TOAST' as const,
      toast: updatedToast,
    };

    const newState = reducer(stateWithToast, action);

    expect(newState.toasts).toHaveLength(1);
    expect(newState.toasts[0].title).toBe('Updated Toast');
    expect(newState.toasts[0].description).toBe('This is a test toast'); // Original value preserved
  });

  it('dismisses a toast correctly', () => {
    const stateWithToast = {
      toasts: [mockToast],
    };

    const action = {
      type: 'DISMISS_TOAST' as const,
      toastId: '1',
    };

    const newState = reducer(stateWithToast, action);

    expect(newState.toasts).toHaveLength(1);
    expect(newState.toasts[0].open).toBe(false);
  });

  it('dismisses all toasts when no id is provided', () => {
    const stateWithMultipleToasts = {
      toasts: [
        mockToast,
        {...mockToast, id: '2', title: 'Second Toast'},
      ],
    };

    const action = {
      type: 'DISMISS_TOAST' as const,
    };

    const newState = reducer(stateWithMultipleToasts, action);

    expect(newState.toasts).toHaveLength(2);
    expect(newState.toasts[0].open).toBe(false);
    expect(newState.toasts[1].open).toBe(false);
  });

  it('removes a toast correctly', () => {
    const stateWithToast = {
      toasts: [mockToast],
    };

    const action = {
      type: 'REMOVE_TOAST' as const,
      toastId: '1',
    };

    const newState = reducer(stateWithToast, action);

    expect(newState.toasts).toHaveLength(0);
  });

  it('removes all toasts when no id is provided', () => {
    const stateWithMultipleToasts = {
      toasts: [
        mockToast,
        {...mockToast, id: '2', title: 'Second Toast'},
      ],
    };

    const action = {
      type: 'REMOVE_TOAST' as const,
    };

    const newState = reducer(stateWithMultipleToasts, action);

    expect(newState.toasts).toHaveLength(0);
  });

  it('respects the toast limit when adding toasts', () => {
    // The TOAST_LIMIT is set to 1 in the hook
    const stateWithToast = {
      toasts: [mockToast],
    };

    const newToast = {
      id: '2',
      title: 'New Toast',
      description: 'This is a new toast',
      open: true,
    };

    const action = {
      type: 'ADD_TOAST' as const,
      toast: newToast,
    };

    const newState = reducer(stateWithToast, action);

    // Should only keep the newest toast
    expect(newState.toasts).toHaveLength(1);
    expect(newState.toasts[0].id).toBe('2');
  });
});