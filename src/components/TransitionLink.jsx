import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

/**
 * Replacement for the old "fade the page out, then window.location = href" script.
 * Also reproduces Webflow's automatic `w--current` / aria-current on the active link.
 */
export default function TransitionLink({ to, className, children, onClick, target, ...rest }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = pathname === to;
  const cls = [className, current ? 'w--current' : ''].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === '_blank') return;
    e.preventDefault();
    if (current) {
      if (window.lenis) window.lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.body.style.cursor = 'progress';
    gsap.to(['.page_w', '.menu_inner', '.cursor'], {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        document.body.style.cursor = '';
        navigate(to);
      },
    });
  };

  return (
    <a href={to} className={cls} aria-current={current ? 'page' : undefined} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
