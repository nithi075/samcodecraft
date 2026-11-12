import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import lottie from 'lottie-web';
import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';

/**
 * Collects everything the legacy (imperative) animation code creates so it can be
 * torn down when React unmounts a page.
 */
export function createScope() {
  const disposers = [];
  const add = (fn) => { disposers.push(fn); return fn; };
  return {
    add,
    on(target, type, handler, opts) {
      target.addEventListener(type, handler, opts);
      add(() => target.removeEventListener(type, handler, opts));
    },
    matchMedia() {
      const mm = gsap.matchMedia();
      add(() => mm.revert());
      return mm;
    },
    split(...args) {
      const s = new SplitType(...args);
      add(() => { try { s.revert(); } catch (e) { /* DOM already gone */ } });
      return s;
    },
    lottie(opts) {
      const anim = lottie.loadAnimation(opts);
      add(() => { try { anim.destroy(); } catch (e) { /* noop */ } });
      return anim;
    },
    swiper(el, opts) {
      const s = new Swiper(el, { modules: [Navigation, A11y], ...opts });
      add(() => { try { s.destroy(true, true); } catch (e) { /* noop */ } });
      return s;
    },
    observer(cb) {
      const o = new MutationObserver(cb);
      add(() => o.disconnect());
      return o;
    },
    dispose() {
      disposers.splice(0).reverse().forEach((fn) => {
        try { fn(); } catch (e) { console.warn('[scope] cleanup failed', e); }
      });
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.getChildren(true, true, true).forEach((t) => t.kill());
    },
  };
}
