import { useEffect, useState } from 'react';

export function useKeyPress(target: string[], controllable: boolean = true): boolean {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: KeyboardEvent) => {
    if (target.includes(key)) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }: KeyboardEvent) => {
    if (target.includes(key)) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    if (!controllable) {
      return;
    }
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []);

  return keyPressed
}