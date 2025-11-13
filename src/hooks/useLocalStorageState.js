import { useState } from 'react';

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageState = (value) => {
    setState((prevState) => {
      const newState = typeof value === 'function' ? value(prevState) : value;

      localStorage.setItem(key, JSON.stringify(newState));

      return newState;
    });
  };

  return [state, setLocalStorageState];
}
