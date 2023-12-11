import { useEffect } from 'react';

export default function useUploadDoc(setListId, setCurBlockType, setDocIdForRequest) {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setListId(+e.target.closest('ul').id);
        if (e.target.closest('fieldset').id === 'document') {
          setCurBlockType(e.target.closest('input').name || '');
        }
      }
    };

    setDocIdForRequest('');

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [setListId, setCurBlockType, setDocIdForRequest]);
}
