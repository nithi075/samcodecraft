import { memo } from 'react';
import PageShell from '../components/PageShell';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';
import { WorkListItem } from '../components/ProjectCards';
import { projects } from '../data/projects';
import css from './works.css?inline';
import { initWorks } from '../legacy/works';

// Static markup converted from the Webflow export. It never re-renders: all the
// motion (GSAP / Lenis / Lottie / Swiper) is attached in initWorks() by PageShell.
const Content = memo(function WorksContent() {
  return (
    <>
      <div className="page_w">
        <section className="works-list_section">
          <div className="works_hero-mob">
            <div data-hidden="" className="works_hero-mob-w">
              <div mobile-heading="" className="txt-caps txt-color-light-60o txt-align-center txt-size-s">
                {"explore works"}
              </div>
              <div className="icon_embed16">
                <div className="svg-icon txt-color-light-60o w-embed">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.8536 8.85355L7.50004 14.2071L2.14648 8.85355L2.85359 8.14645L7.00004 12.2929L7.00004 2.5L8.00004 2.5L8.00004 12.2929L12.1465 8.14645L12.8536 8.85355Z" fill="#FAFAFA" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="works_list-track">
            <div data-hidden="" className="w">
              <div className="works_cms w-dyn-list">
                <div fs-list-element="list" role="list" className="works_list w-dyn-items">
                  {projects.map((p) => (
                    <WorkListItem key={p.slug} p={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer next={{ to: "/about", label: "About" }} />
    </>
  );
});

export default function Works() {
  return (
    <PageShell
      pageId="67ee3f1926cc76ba7a6ed237"
      title="Works - Sam | Freelance Developer"
      description="Selected portfolio and e-commerce websites built by Sam, freelance developer."
      transparentMenu={false}
      css={css}
      init={initWorks}
    >
      <Content />
    </PageShell>
  );
}
