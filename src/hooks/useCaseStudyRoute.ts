import { useCallback, useEffect, useState } from 'react';

const PREFIX = '#/case/';

function readId(): string | null {
  if (typeof window === 'undefined') return null;
  const { hash } = window.location;
  return hash.startsWith(PREFIX) ? decodeURIComponent(hash.slice(PREFIX.length)) : null;
}

/**
 * Deep-linkable case studies without pulling in a router: the open panel is
 * encoded as `#/case/<id>`, so a case study can be shared or reloaded and the
 * browser back button closes it.
 */
export function useCaseStudyRoute() {
  const [openId, setOpenId] = useState<string | null>(readId);

  useEffect(() => {
    const onHashChange = () => setOpenId(readId());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const open = useCallback((id: string) => {
    window.history.pushState(null, '', `${PREFIX}${encodeURIComponent(id)}`);
    setOpenId(id);
  }, []);

  const close = useCallback(() => {
    // Prefer going back so the case study doesn't pile up in history.
    if (window.history.state !== null || window.location.hash.startsWith(PREFIX)) {
      window.history.back();
    }
    setOpenId(null);
  }, []);

  // Lock body scroll while the panel is open.
  useEffect(() => {
    document.body.classList.toggle('scroll-lock', openId !== null);
    return () => document.body.classList.remove('scroll-lock');
  }, [openId]);

  return { openId, open, close };
}
