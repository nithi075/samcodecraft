import { useLayoutEffect } from 'react';
import Contact from './Contact';
import Cursor from './Cursor';
import Menu from './Menu';
import GlobalStyles from './GlobalStyles';
import { createScope } from '../lib/scope';
import { initShared } from '../legacy/shared';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

/**
 * Everything that used to be repeated on each exported Webflow page:
 * contact drawer, cursor, menu, global styles + the shared scripts (Lenis, fade-ins,
 * footer credits, contact drawer…) and the page specific animation script.
 */
export default function PageShell({ pageId, title, description, transparentMenu = false, css, init, children }) {
  useLayoutEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');

    // Re-initialise the Webflow runtime (IX2 interactions + Lottie) for the new DOM.
    document.documentElement.setAttribute('data-wf-page', pageId);
    const wf = window.Webflow;
    if (wf) {
      try {
        wf.destroy();
        wf.ready();
        const ix2 = wf.require && wf.require('ix2');
        if (ix2 && ix2.init) ix2.init();
      } catch (e) { console.warn('[webflow] re-init failed', e); }
    }

    const scope = createScope();
    initShared(scope);
    if (init) init(scope);
    return () => scope.dispose();
  }, []);

  return (
    <>
      {css ? <style>{css}</style> : null}
      <Contact />
      <Cursor />
      <Menu transparent={transparentMenu} />
      <GlobalStyles />
      {children}
    </>
  );
}
