import { memo } from 'react';
import PageShell from '../components/PageShell';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';
import { HomeWorkItem } from '../components/ProjectCards';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import Logo from '../components/Logo';
import css from './about.css?inline';
import { initAbout } from '../legacy/about';

// Static markup converted from the Webflow export. It never re-renders: all the
// motion (GSAP / Lenis / Lottie / Swiper) is attached in initAbout() by PageShell.
const Content = memo(function AboutContent() {
  return (
    <>
      <div className="page_w">
        <section className="hero-about_section">
          <div className="hero-about_img">
            <div className="hero-about_overlay" />
            <img className="hide-mobile-l" src="/images/about-hero.webp" width="1480" height="720" alt="Collage of website projects" data-hidden="" hero-img="" sizes="(max-width: 991px) 100vw, 1480px" loading="eager" />
            <img className="show-mobile-l" hero-img-mob="" src="/images/about-hero-mobile.webp" width="750" height="1100" alt="Collage of website projects" data-hidden="" sizes="100vw" loading="eager" />
          </div>
          <div className="hero-about_logo-w hide-mobile-l">
            <div data-hidden="" className="hero-about_logo-sticky">
              <div className="hero-about_logo-component">
                <div className="hero-about_logo-inner">
                  <div className="hero-about_lottie"><Logo className="about-logo-svg" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-about_w">
            <div className="hero-about_content">
              <h1 data-hidden="" className="hero-about_title title-l">
                <div className="title-line">
                  {"I’m Sam, Freelance Developer"}
                </div>
                <div className="title-line">
                  {"Portfolio & E-commerce"}
                </div>
                <div className="title-line">
                  {"25+ clients served"}
                </div>
              </h1>
              <div data-hidden="" id="w-node-_30daf77c-9785-d2c9-95b1-6ed0b0f58c18-3870c491" className="hero-about_button">
                <a href="#services" className="button-ghost w-inline-block">
                  <div className="button_in is-lottie">
                    <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/6821e71380a549c8868b87a5_Scroll%20Indicator.json" className="button_lottie" />
                    <div className="button_labels-wrap">
                      <div className="button_label-relative">
                        <div className="txt-button">
                          {"scroll to explore"}
                        </div>
                      </div>
                      <div className="button_label-absolute">
                        <div className="txt-button">
                          {"scroll to explore"}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="services" className="hero-about_services">
            <div className="hero-about_track">
              <h2 className="txt-align-center_mob">
                {"i can help you with"}
              </h2>
              <div className="services_c">
                <div className="w-layout-grid grid">
                  <div id="w-node-aa6513b5-0af3-8b20-85af-d1225e6e0e20-3870c491" className="service_item">
                    <div className="service_number opacity60">
                      <div>
                        {"01"}
                      </div>
                      <div className="icon_embed16">
                        <div className="svg-icon w-embed">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="service_item-main">
                      <div className="service_item-heading">
                        <h3 className="title-s">
                          {"Portfolio"}
                          <br />
                          {"Websites"}
                        </h3>
                      </div>
                      <div className="service_video hide-mobile-l">
                        <div className="h-work_embed w-embed">
                          <video muted loop preload="none" playsInline style={{"width": "100%", "height": "100%", "objectFit": "cover"}}>
                            <source src="https://eliotbesson.b-cdn.net/Services/01%20-%20WEBDESIGN.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <p className="txt-color-light-60o">
                        {"I build portfolio websites that showcase your work beautifully, from wedding photographers to interior designers. Clean layouts, smooth animations and a seamless experience on any device."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid grid div-relative">
                  <div id="w-node-_6f5c5f46-3d4a-97e0-ff93-d7c78c02eba8-3870c491" className="service_item is-mid">
                    <div className="service_number opacity60">
                      <div className="trigger1">
                        {"02"}
                      </div>
                      <div className="icon_embed16">
                        <div className="svg-icon w-embed">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="service_item-main">
                      <div className="service_item-heading">
                        <h3 className="title-s">
                          {"E-commerce Websites"}
                        </h3>
                      </div>
                      <div className="service_video hide-mobile-l">
                        <div className="h-work_embed w-embed">
                          <video muted loop preload="none" playsInline style={{"width": "100%", "height": "100%", "objectFit": "cover"}} className="h-work_embed">
                            <source src="https://eliotbesson.b-cdn.net/Services/02%20-%20WEBDEV.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <p className="txt-color-light-60o">
                        {"I build online stores for boutiques and growing brands, with product catalogs, cart, checkout and payments, fast on mobile and simple to manage."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid grid">
                  <div id="w-node-_57a8f2ea-0b01-52b4-6da1-6b2daeee33c8-3870c491" className="service_item">
                    <div className="service_number opacity60">
                      <div className="trigger1">
                        {"03"}
                      </div>
                      <div className="icon_embed16">
                        <div className="svg-icon w-embed">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="service_item-main">
                      <div className="service_item-heading">
                        <h3 className="title-s">
                          {"Design & Development"}
                        </h3>
                      </div>
                      <div className="service_video hide-mobile-l">
                        <div className="h-work_embed w-embed">
                          <video muted loop preload="none" playsInline style={{"width": "100%", "height": "100%", "objectFit": "cover"}} className="h-work_embed">
                            <source src="https://eliotbesson.b-cdn.net/Services/03%20-%20DESIGN%20DEV.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <p className="txt-color-light-60o">
                        {"From idea to launch, I handle both design and development for gyms, studios and small businesses, creating sites at the intersection of performance, aesthetics, and strategy."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-flex center">
              <div fade-in="" className="icon_embed16">
                <div className="svg-icon w-embed">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.45312 2.5V12.293L12.5996 8.14648L13.3066 8.85352L7.95312 14.207L2.59961 8.85352L3.30664 8.14648L7.45312 12.293V2.5H8.45312Z" fill="#FAFAFA" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients_section">
          <div className="w">
            <div className="txt-align-center txt-caps">
              {"25+ clients i’ve worked with"}
            </div>
            <div className="txt-align-center txt-caps txt-color-light-60o" style={{ marginTop: "1em" }}>
              {"wedding photographers / interior designers / boutiques / gyms"}
            </div>
          </div>
        </section>

        
        <section className="testi_section">
          <div className="w">
            <div className="w-layout-grid grid">
              <h3 id="w-node-_593c09e9-e166-087e-18a7-0e2eb0b5e79a-3870c491" data-lottie-text="" className="testi_head">
                <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                  {"Kind words"}
                </div>
                <div className="icon_lottie-element">
                  <div className="icon_lottie-bg" />
                  <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/681c7595dfab3bdb851fd8ca_PF%20-%20Testimonial%20160.json" className="icon_lottie" />
                </div>
                <div className="title-m txt-inline" style={{"display": "inline", "position": "relative"}}>
                  {"from peers, partners & clients!"}
                </div>
              </h3>
              <div id="w-node-_5d99f5ea-6779-e695-9cd4-ebcc21186cd7-3870c491" className="testi_cms w-dyn-list">
                <div role="list" className="testi_list w-dyn-items">
                  {testimonials.map((t, i) => (
                    <div role="listitem" className="testi_item w-dyn-item" key={t.name}>
                      <div className="testi_infos-top">
                        <div className="testi_number opacity60">
                          <div className="trigger1 w-embed">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div className="icon_embed16">
                            <div className="svg-icon w-embed">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.707 8L8.35352 13.3535L7.64648 12.6465L11.793 8.5H2V7.5H11.793L7.64648 3.35352L8.35352 2.64648L13.707 8Z" fill="#FAFAFA" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="testi_txt">
                            {"\u201C" + t.quote + "\u201D"}
                          </p>
                          <div className="testi_infos">
                            <div className="testi_img testi_initial" aria-hidden="true">
                              {t.name.trim().charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="txt-size-s txt-caps">
                                {t.name}
                                {t.featured && (
                                  <span className="tag-xs testi_featured">{"Featured"}</span>
                                )}
                              </div>
                              <div className="testi_rich-text txt-size-s opacity60 w-richtext">
                                <p>{t.type}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
        <div className="spacer_section-m" />
        <Footer next={{ to: "/", label: "Home" }} />
      </div>
    </>
  );
});

export default function About() {
  return (
    <PageShell
      pageId="681212c407299be73870c491"
      title="About - Sam | Freelance Developer"
      description="About Sam, a freelance developer building portfolio and e-commerce websites for 25+ clients."
      transparentMenu={true}
      css={css}
      init={initAbout}
    >
      <Content />
    </PageShell>
  );
}
