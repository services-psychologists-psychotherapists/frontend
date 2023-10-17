import { useMemo } from 'react';

export default function usePagination(pageCount) {
  const buttonCount = useMemo(() => {
    const pages = [];

    for (let i = 0; i < pageCount; i += 1) {
      pages.push(i + 1);
    }

    return pages;
  }, [pageCount]);

  return buttonCount;
}
