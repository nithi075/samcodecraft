import TransitionLink from './TransitionLink';
import Logo from './Logo';

export default function Menu({ transparent = false }) {
  return (
      <menu data-hidden="" className={"menu" + (transparent ? " transparent" : "")}>
        <div className="menu_inner">
          <TransitionLink to="/" aria-label="Go to homepage" id="w-node-bd053704-fb67-3f28-b2d5-4e71e37d6052-e37d6050" data-w-id="bd053704-fb67-3f28-b2d5-4e71e37d6052" className="menu_logo-link w-inline-block">
            <Logo className="menu_logo-badge" />
          </TransitionLink>
          <div className="menu_links hide-mobile-l">
            <TransitionLink to="/" className="menu_link w-inline-block">
              <p className="txt-size-s">
                {"home"}
              </p>
            </TransitionLink>
            <TransitionLink to="/works" className="menu_link w-inline-block">
              <p className="txt-size-s">
                {"works"}
              </p>
            </TransitionLink>
            <TransitionLink to="/about" className="menu_link w-inline-block">
              <p className="txt-size-s">
                {"about"}
              </p>
            </TransitionLink>
          </div>
          <div className="menu_main-inner">
            <div className="menu_button-w">
              <a data-scroll="stop" contact-trigger="" href="#" className="button-dark w-inline-block">
                <div className="button_bg-dark" />
                <div className="button_in is-lottie">
                  <div data-is-ix2-target="1" className="button_lottie" data-w-id="bd053704-fb67-3f28-b2d5-4e71e37d6067" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d02290066d5ae0097618bc_Contact%20V4.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="1.25" data-loading="eager" />
                  <div className="button_labels-wrap">
                    <div className="button_label-relative">
                      <div className="txt-button">
                        {"Contact"}
                      </div>
                    </div>
                    <div className="button_label-absolute">
                      <div className="txt-button">
                        {"Contact"}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div data-scroll="toggle" data-w-id="bd053704-fb67-3f28-b2d5-4e71e37d606f" className="menu_burger">
              <div data-is-ix2-target="1" className="menu_burger-lottie" data-w-id="bd053704-fb67-3f28-b2d5-4e71e37d6070" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67e6c0538c06f9b6ac4743c3_a97c2a6d56756ebedf32a01f63edb633_Menu%20Burger.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="1" data-duration="0" data-loading="eager" />
            </div>
          </div>
        </div>
        <div className="menu_overlay" />
        <div className="menu_full">
          <div className="menu_full-w txt-color-dark">
            <div className="menu_full-links">
              <TransitionLink to="/" className="menu_full-link">
                {"home"}
              </TransitionLink>
              <TransitionLink to="/works" className="menu_full-link">
                {"works"}
              </TransitionLink>
              <TransitionLink to="/about" className="menu_full-link">
                {"about"}
              </TransitionLink>
              <a contact-trigger="" href="#" className="menu_full-link">
                {"contact"}
              </a>
            </div>
            <div className="menu_full-social-links">
              <a href="https://www.instagram.com/sam.codecraft/" target="_blank" className="footer_social-link w-inline-block">
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
              <a href="tel:+918667041407" className="footer_social-link w-inline-block">
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
            <div className="section_noise is-footer">
              <div className="hide w-embed" />
              <div className="noise_embed-footer" />
            </div>
          </div>
        </div>
      </menu>
  );
}
