import {useEffect, useRef} from 'react';

export function useInterval(callback: () => void, refreshKey: number | null) {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (refreshKey !== null) {
      let id = setInterval(tick, 60000);
      return () => clearInterval(id);
    }
  }, [refreshKey]);
}
