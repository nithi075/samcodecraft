import TransitionLink from './TransitionLink';
import Logo from './Logo';

export default function Footer({ next }) {
  return (
      <footer className="footer">
        <div className="footer_inner txt-color-dark div-hide">
          <div className="section_noise is-footer">
            <div className="hide w-embed" />
            <div className="noise_embed-footer" />
          </div>
          <div className="footer_top">
            <a data-scroll="stop" contact-trigger="" href="#" className="footer_callout w-inline-block">
              <div className="footer_next-overlay hide-tablet" />
              <div className="footer_callout-txt div-relative">
                {"have a project in mind?"}
              </div>
              <div className="footer_callout-hover-w div-relative">
                <div className="footer_callout-txt">
                  {"let's "}
                </div>
                <div className="div-relative div-hide">
                  <div className="footer_callout-txt default">
                    {"talk about it!"}
                  </div>
                  <div className="footer_callout-txt absolute hide-tablet">
                    {"get in touch!"}
                  </div>
                </div>
              </div>
            </a>
            <TransitionLink to={next.to} data-w-id="ecf0ca98-64c3-3757-2fd1-8e7486e87306" className="footer_next hide-tablet w-inline-block">
              <div className="footer_next-overlay" />
              <div className="footer_next-top opacity60 div-relative">
                <div className="txt-caps">
                  {"next page"}
                </div>
                <div className="icon_embed20 hide">
                  <div className="svg-icon w-embed">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.35355 2.64648L13.7071 8.00004L8.35355 13.3536L7.64645 12.6465L11.7929 8.50004H2V7.50004H11.7929L7.64645 3.35359L8.35355 2.64648Z" fill="#171717" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="footer_next-btm div-relative">
                <div className="footer_next-title-w">
                  <h3>
                    {next.label}
                  </h3>
                </div>
                <div>
                  <div className="button-light_footer">
                    <div className="button_bg-light" />
                    <div className="button_in is-lottie">
                      <div data-is-ix2-target="1" className="button_lottie" data-w-id="ecf0ca98-64c3-3757-2fd1-8e7486e87315" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d05e7f168c28fdb45a78c7_62218f96854679355d2b35cacc36cc1a_Arrow.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="1.25" data-loading="eager" />
                      <div className="button_labels-wrap">
                        <div className="button_label-relative">
                          <div className="txt-button txt-color-dark">
                            {"discover"}
                          </div>
                        </div>
                        <div className="button_label-absolute">
                          <div className="txt-button txt-color-dark">
                            {"discover"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_line-v" />
            </TransitionLink>
            <div className="footer_line-h hide-tablet" />
          </div>
          <div className="footer_btm">
            <div className="footer_main">
              <div className="footer_main-top">
                <div className="footer_sitemap-w">
                  <div className="footer_sitemap-label">
                    <p className="txt-size-xs opacity60">
                      {"sitemap"}
                    </p>
                  </div>
                  <div className="sitemap_links">
                    <TransitionLink to="/" className="footer_link w-inline-block">
                      <p>
                        {"home"}
                      </p>
                    </TransitionLink>
                    <TransitionLink to="/works" className="footer_link w-inline-block">
                      <p>
                        {"works"}
                      </p>
                    </TransitionLink>
                    <TransitionLink to="/about" className="footer_link w-inline-block">
                      <p>
                        {"about"}
                      </p>
                    </TransitionLink>
                    <a data-scroll="stop" contact-trigger="" href="#" className="footer_link w-inline-block">
                      <p>
                        {"contact"}
                      </p>
                    </a>
                  </div>
                </div>
                <div className="footer_social-links">
                  <a aria-label="Instagram" href="https://www.instagram.com/sam.codecraft/" target="_blank" className="footer_social-link w-inline-block">
                    <div className="icon_embed20">
                      <div className="svg-icon w-embed">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" stroke="#171717" strokeWidth="1.6" />
                      <circle cx="10" cy="10" r="3.5" stroke="#171717" strokeWidth="1.6" />
                      <circle cx="14.6" cy="5.4" r="1" fill="#171717" />
                    </svg>
                      </div>
                    </div>
                    <div className="social_link-tag-w">
                      <div className="social-link-tag">
                        <p>
                          {"instagram"}
                        </p>
                      </div>
                    </div>
                  </a>
                  <a aria-label="Call Sam" href="tel:+918667041407" className="footer_social-link w-inline-block">
                    <div className="icon_embed20">
                      <div className="svg-icon w-embed">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" fill="#171717" />
                    </svg>
                      </div>
                    </div>
                    <div className="social_link-tag-w">
                      <div className="social-link-tag">
                        <p>
                          {"call"}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer_main-btm hide-mobile-l">
                <div className="txt-size-xs txt-caps opacity60">
                  {"Sam © 2026"}
                </div>
                <a open-credits="" href="#" className="txt-size-xs txt-caps opacity60 txt-underline">
                  {"infos & credits"}
                </a>
              </div>
              <div className="footer_credits pointer-events_none hide-mobile-l">
                <div className="txt-size-xs txt-caps pointer-events_auto">
                  <span className="txt-size-s">
                    {"01/fonts used"}
                  </span>
                  <br />
                  <br />
                  <a href="https://blazetype.eu/typefaces/arges" target="_blank" className="txt-underline">
                    <span className="opacity60">
                      {"arges"}
                    </span>
                  </a>
                  <span className="opacity60">
                    {" by blazetype "}
                    <br />
                  </span>
                  <a href="https://cotypefoundry.com/our-fonts/aeonik" target="_blank" className="txt-underline">
                    <span className="opacity60">
                      {"aeonik"}
                    </span>
                  </a>
                  <span className="opacity60">
                    {" by cotype foundry"}
                    <br />
                  </span>
                  <a href="https://vercel.com/font" target="_blank" className="txt-underline">
                    <span className="opacity60">
                      {"Geist mono"}
                    </span>
                  </a>
                  <span className="opacity60">
                    {" by Vercel"}
                  </span>
                </div>
                <div className="txt-size-xs txt-caps pointer-events_auto">
                  <span className="txt-size-s">
                    {"02/infos"}
                  </span>
                  <br />
                  {"‍"}
                  <br />
                  <span className="opacity60">
                    {"developed with react / gsap / css"}
                  </span>
                </div>
                <div className="txt-size-xs txt-caps pointer-events_auto">
                  <span className="txt-size-s">
                    {"03/something else ?"}
                  </span>
                  <br />
                  <br />
                  <span className="opacity60">
                    {"if you have any feedbacks, comments, questions, don’t hesitate "}
                  </span>
                  <a href="https://www.instagram.com/sam.codecraft/" target="_blank" className="txt-underline">
                    <span className="opacity60">
                      {"to reach out!"}
                    </span>
                  </a>
                  <span className="opacity60">
                    {" or call "}
                  </span>
                  <a href="tel:+918667041407" className="txt-underline">
                    <span className="opacity60">
                      {"+91 86670 41407"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_logo">
              <div className="footer_logo-c">
                <div className="footer_logo-embed"><Logo className="footer_logo-svg" /></div>
              </div>
            </div>
            <div className="footer_main-btm is-mobile">
              <div className="txt-size-xs txt-caps opacity60">
                {"Sam © 2026"}
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
