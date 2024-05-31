import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useScrollRestoration = () => {
  const router = useRouter();

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;

    let shouldScrollRestore = false;
    window.history.scrollRestoration = 'manual';

    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', JSON.stringify({ x: window.scrollX, y: window.scrollY }));
    };

    const restoreScrollPosition = () => {
      const scrollPosition = JSON.parse(sessionStorage.getItem('scrollPosition') || 'null');
      if (scrollPosition) {
        window.scrollTo(scrollPosition.x, scrollPosition.y);
      }
    };

    const onBeforeUnload = () => {
      saveScrollPosition();
    };

    const onRouteChangeStart = () => {
      saveScrollPosition();
    };

    const onRouteChangeComplete = () => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;
        restoreScrollPosition();
      }
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
};


