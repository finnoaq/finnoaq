'use client';
import { useEffect, useState } from 'react';

interface StickyState {
  sticky: boolean;
}

function useSticky(): StickyState {
  const [sticky, setSticky] = useState(false);

  function stickyHeader(): void {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);

    return (): void => {
      window.removeEventListener('scroll', stickyHeader);
    };
  }, []);

  return {
    sticky,
  };
}

export default useSticky;
