import { memo } from 'react';
import PageShell from '../components/PageShell';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';
import { FeaturedCard, FeaturedSlide, HomeWorkItem } from '../components/ProjectCards';
import { projects } from '../data/projects';
import css from './home.css?inline';
import { initHome } from '../legacy/home';

// Static markup converted from the Webflow export. It never re-renders: all the
// motion (GSAP / Lenis / Lottie / Swiper) is attached in initHome() by PageShell.
const Content = memo(function HomeContent() {
  return (
    <>
      <main className="page_w">
        <section className="h-hero_section">
          <div data-hidden="" className="h-hero_work-divider hide-tablet">
            <div className="txt-size-xs opacity60 txt-caps">
              {"featured works"}
            </div>
          </div>
          <div data-hidden="" className="h-hero_works hide-tablet">
            <div className="w is-h-hero">
              <div className="h-hero_works-cms w-dyn-list">
                <div role="list" className="h-hero_works-grid w-dyn-items">
                  {projects.map((p) => (
                    <FeaturedCard key={p.slug} p={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w div-relative">
            <div className="w-layout-grid grid">
              <div id="w-node-f1b6db6f-d215-9651-b2cd-aa92d73dd5b0-720a94b1" className="h-hero_content-wrap txt-align-center div-relative">
                <div className="h-hero_title-w">
                  <div className="h-hero_title-guide hide-mobile-l">
                    {"Crafting Bold & "}
                    <br />
                    {"Memorable Websites"}
                  </div>
                  <h1 data-hidden="" className="title-l_h-hero">
                    {"Crafting Bold &Memorable Websites"}
                  </h1>
                </div>
                <div className="h-hero_subtitle-wrap">
                  <p data-hidden="" className="txt-color-light-60o txt-size-s">
                    {"I’m Sam, a freelance developer building portfolio & e-commerce websites. 25+ happy clients."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-hidden="" className="h-hero_works-mob">
            <div className="w is-h-hero">
              <div className="txt-size-xs opacity60 txt-caps txt-align-center">
                {"featured works"}
              </div>
              <div className="swiper h_works w-dyn-list">
                <div className="swiper-wrapper h_works w-dyn-items" id="swiper-wrapper-31016bcf628435d7e">
                  {projects.map((p) => (
                    <FeaturedSlide key={p.slug} p={p} />
                  ))}
                </div>
              </div>
              <div className="swiper-nav">
                <a aria-label="Previous slide" data-w-id="1a34e56d-4a57-82a5-2703-a2d3e1df7c05" href="#" className="swiper-arrow_prev w-inline-block">
                  <div className="icon_embed24 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L13.2929 6.29289C13.6834 5.90237 14.3165 5.90237 14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3165 18.0976 13.6834 18.0976 13.2929 17.7071L8.46963 12.8839Z" fill="#FAFAFA" />
                    </svg>
                  </div>
                </a>
                <a aria-label="Next slide" data-w-id="1a34e56d-4a57-82a5-2703-a2d3e1df7c0b" href="#" className="swiper-arrow_next w-inline-block">
                  <div className="icon_embed24 w-embed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 12.8839C16.0185 12.3957 16.0185 11.6043 15.5303 11.1161L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.5303 12.8839Z" fill="#FAFAFA" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="h-hero_loader">
            <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d2e4a64cac3c5e7af06197_LogoMoves%20(1).json" className="h-hero_loader-lottie" />
          </div>
        </section>
        <section className="h-intro_section">
          <div className="w div-relative">
            <div className="h-intro_sticky-marquee">
              <div className="h-intro_sticky-c">
                <div className="w-layout-grid grid">
                  <div id="w-node-_12e52ff4-ac56-7214-2c91-11c64dee53d0-720a94b1">
                    <h2 className="txt-align-center">
                      <div>
                        {"I build websites"}
                      </div>
                      <div>
                        {"at the intersection of :"}
                      </div>
                    </h2>
                  </div>
                </div>
                <div className="circles_scroll-c">
                  <div className="circle_scroll-parent left">
                    <div className="circle_scroll">
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e5d5bfd1f50099e1700d0_e638d844f81708ca81bcca3af9b3c507_Circle%20Line%20%283%29.json" className="circle_lottie-line" />
                      <div className="circle_scroll-inner">
                        <div className="circle_lottie-w">
                          <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e49822cfd07ecabd095bf_1ffa86094af1297c46d4f83dcb9fe485_PF%20-%20Ovals%20Thin.json" className="circle_lottie-icon" />
                        </div>
                        <div className="txt-align-center txt-caps">
                          {"aesthetic"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circle_scroll-parent">
                    <div className="circle_scroll center">
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e5d5bfd1f50099e1700d0_e638d844f81708ca81bcca3af9b3c507_Circle%20Line%20%283%29.json" className="circle_lottie-line" />
                      <div className="circle_scroll-inner">
                        <div className="circle_lottie-w">
                          <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e461f283a2fefa73f8e95_7a6fef756c7bbff3b796f5edc27efa73_PF%20-%20Performance.json" className="circle_lottie-icon" />
                        </div>
                        <div className="txt-align-center txt-caps">
                          {"performance"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circle_scroll-parent right">
                    <div className="circle_scroll right">
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e5d5bfd1f50099e1700d0_e638d844f81708ca81bcca3af9b3c507_Circle%20Line%20%283%29.json" className="circle_lottie-line" />
                      <div className="circle_scroll-inner">
                        <div className="circle_lottie-w">
                          <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/678e461ecf612e66d1113eb5_5f84ffd74292b581e41f1f0683c12b6f_PF%20-%20Strategy.json" className="circle_lottie-icon" />
                        </div>
                        <div className="txt-align-center txt-caps">
                          {"strategy"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circle_shape-intersect-w">
                    <img src="/images/67d4075ace25276ca5db0c0a_circle-intersect.svg" loading="lazy" data-cursor="Your Project" alt="" className="shape_intersect" />
                  </div>
                </div>
                <div className="h-intro_scroll-indicator-w">
                  <div className="h-intro_scroll-indicator-bg">
                    <div className="h-intro_scroll-indicator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-about_section">
          <div className="w">
            <div className="w-layout-grid grid">
              <div id="w-node-_6a791763-17b2-c51a-d1c7-c64bd8fbfdae-720a94b1" className="h-about_title-track">
                <div className="h-about_content-sticky">
                  <h3 data-lottie-text="" className="h-about_content txt-align-center">
                    <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                      {"I work with wedding photographers"}
                    </div>
                    <div className="icon_lottie-element">
                      <div className="icon_lottie-bg" />
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67c5dabc82e923ed6e1bdf53_PF%20-%20People%20-%20160.json" className="icon_lottie" />
                    </div>
                    <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                      {"interior designers"}
                    </div>
                    <div className="icon_lottie-element">
                      <div className="icon_lottie-bg" />
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67c5e3837628d7c1077f6e66_PF%20-%20Ovals%20Large%20-%20160.json" className="icon_lottie" />
                    </div>
                    <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                      {"boutiques & gyms"}
                    </div>
                    <div className="icon_lottie-element">
                      <div className="icon_lottie-bg" />
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67c5e38382e923ed6e24b516_PF%20-%20Building%20-%20200.json" className="icon_lottie" />
                    </div>
                    <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                      {"25+ clients, turning their vision into powerful websites"}
                    </div>
                    <div className="icon_lottie-element">
                      <div className="icon_lottie-bg" />
                      <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67c5e383905870e1e8261303_PF%20-%20Globe%20-%20180.json" className="icon_lottie" />
                    </div>
                  </h3>
                  <div id="w-node-_791a0c35-5de3-9529-681f-26d0c4596b63-720a94b1" className="h-about_desc">
                    <TransitionLink to="/about" className="button-dark w-inline-block">
                      <div className="button_bg-dark" />
                      <div className="button_in is-lottie">
                        <div data-is-ix2-target="1" className="button_lottie" data-w-id="92c05a7b-a5b8-b3a6-15bb-7ae15911a42a" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d039a8ad0da35264fad49c_2d561dda5bccb42587ebad26cf2e59e4_profile.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="1.25" data-loading="eager" />
                        <div className="button_labels-wrap">
                          <div className="button_label-relative">
                            <div className="txt-button">
                              {"about me"}
                            </div>
                          </div>
                          <div className="button_label-absolute">
                            <div className="txt-button">
                              {"about me"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TransitionLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-work_section div-hide">
          <div className="w">
            <div className="w-layout-grid grid">
              <h3 id="w-node-_1e7900d6-45d1-9a22-921f-39f793373ee7-93373ee4" data-lottie-text="" className="h-work_head">
                <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                  {"Here is a selection of my most recent works"}
                </div>
                <div className="icon_lottie-element">
                  <div className="icon_lottie-bg" />
                  <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67c6e386af458257a1061bdb_c24d0545251b21a608f886ce9c0b7dda_PF%20-%20Works%20Stack%20-%20150.json" className="icon_lottie" />
                </div>
              </h3>
              <div id="w-node-_1e7900d6-45d1-9a22-921f-39f793373eed-93373ee4" className="h-work_subtitle hide-tablet">
                <p className="txt-color-light-60o txt-align-right txt-size-s">
                  {"Hover on names"}
                  <br />
                  {"for a closer look"}
                </p>
              </div>
            </div>
            <div className="h-work_cms w-dyn-list">
              <div role="list" className="h-work_list w-dyn-items">
                {projects.map((p) => (
                  <HomeWorkItem key={p.slug} p={p} />
                ))}
              </div>
            </div>
            <div className="h-work_callout">
              <div className="w-layout-grid grid">
                <div id="w-node-_1e7900d6-45d1-9a22-921f-39f793373f0d-93373ee4" className="div-flex">
                  <TransitionLink to="/works" className="button-dark w-inline-block">
                    <div className="button_bg-dark" />
                    <div className="button_in is-lottie">
                      <div data-is-ix2-target="1" className="button_lottie" data-w-id="1e7900d6-45d1-9a22-921f-39f793373f11" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d16870bbf30590983b5bac_works.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="1.25" data-loading="eager" />
                      <div className="button_labels-wrap">
                        <div className="button_label-relative">
                          <div className="txt-button">
                            {"see all works"}
                          </div>
                        </div>
                        <div className="button_label-absolute">
                          <div className="txt-button">
                            {"see all works"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer next={{ to: "/works", label: "Works" }} />
      </main>
    </>
  );
});

export default function Home() {
  return (
    <PageShell
      pageId="678a8007cb26ff76720a94b1"
      title="Sam - Freelance Developer | Portfolio & E-commerce Websites"
      description="Sam is a freelance developer building portfolio and e-commerce websites for wedding photographers, interior designers, boutiques, gyms and more. 25+ happy clients."
      transparentMenu={false}
      css={css}
      init={initHome}
    >
      <Content />
    </PageShell>
  );
}
