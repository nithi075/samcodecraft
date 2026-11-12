import { useState, useRef, useEffect } from "react";
import TransitionLink from './TransitionLink';

// Link to a project: opens the live website in a new tab (or an internal page if `url` is empty).
export function ProjectLink({ p, children, ...rest }) {
  if (p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <TransitionLink to={`/works/${p.slug}`} {...rest}>
      {children}
    </TransitionLink>
  );
}

export function FeaturedCard({ p }) {
  const frames = p.images.map((_, i) => `/images/projects/${p.slug}-card-${i}.webp`);
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
    setIdx(0);
  };
  const play = () => {
    if (timer.current || frames.length < 2) return;
    setIdx(1);
    timer.current = setInterval(() => setIdx((i) => (i + 1) % frames.length), 700);
  };
  useEffect(() => () => clearInterval(timer.current), []);

  return (
    <div
      data-hidden=""
      role="listitem"
      className="h-hero_work w-dyn-item"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <ProjectLink p={p} aria-label="Open project" data-cursor="Open Project" className="work_card w-inline-block">
        <div className="work_card-img-w">
          {frames.map((src, i) => (
            <img
              key={src}
              src={src}
              loading={i === 0 ? "lazy" : "eager"}
              alt={i === 0 ? `${p.name} website screenshot` : ""}
              className="work_card-img work_card-frame"
              style={{ opacity: i === idx ? 1 : 0 }}
            />
          ))}
          <div className="work_card-loader">
            <div data-lottie-path="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67e69f7d2f7b4856ae92e20b_d3281b71cdf24f341f636776f907d0ea_loader.json" className="loader-lottie" />
          </div>
        </div>
        <div className="work_card-infos-hover">
          <div className="txt-size-xs txt-caps shrink-none">
            {p.name}
          </div>
          <div className="work_label-hover shrink-none">
            {p.label}
          </div>
        </div>
      </ProjectLink>
    </div>
  );
}

export function FeaturedSlide({ p }) {
  return (
    <div data-hidden="" className="swiper-slide h_works w-dyn-item">
      <ProjectLink p={p} aria-label="see project" className="work_card-mob w-inline-block">
        <div className="work_card-img-w">
          <img src={`/images/projects/${p.slug}-card-0.webp`} loading="lazy" alt={`${p.name} website screenshot`} className="work_card-img" />
        </div>
        <div className="work_card-infos-hover">
          <div className="txt-size-xs txt-caps txt-align-center">
            {p.name}
          </div>
          <div className="txt-size-xs txt-caps txt-align-center opacity60">
            {p.label}
          </div>
        </div>
      </ProjectLink>
    </div>
  );
}

export function HomeWorkItem({ p }) {
  return (
    <div role="listitem" className="h-work_item w-dyn-item">
      <ProjectLink p={p} className="h-work_link w-inline-block">
        <div className="w-layout-grid grid">
          <div id="w-node-_1e7900d6-45d1-9a22-921f-39f793373ef7-93373ee4" className="h-work_asset">
            <div className="h-work_asset-c">
              <img src={p.images[0]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
          <div id="w-node-_1e7900d6-45d1-9a22-921f-39f793373efa-93373ee4" className="h-work_asset">
            <div className="h-work_asset-c">
              <img src={p.images[1]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
          <div data-cursor="open project" id="w-node-_1e7900d6-45d1-9a22-921f-39f793373efe-93373ee4" className="h-work_name-w">
            <div className="h-work_name-c">
              <h2 className="h-work_title">
                {p.name}
              </h2>
              <div className="h-work_infos">
                <div className="tag-xs">
                  {p.label}
                </div>
                <div className="tag-xs">
                  {p.date}
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_1e7900d6-45d1-9a22-921f-39f793373f04-93373ee4" className="h-work_asset">
            <div className="h-work_asset-c">
              <img src={p.images[2]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
        </div>
      </ProjectLink>
    </div>
  );
}

export function WorkListItem({ p }) {
  return (
    <div role="listitem" className="work_item w-dyn-item">
      <div className="work_link">
        <ProjectLink p={p} aria-label="see project" data-cursor="Open Project" className="work_link-ab w-inline-block" />
        <div className="w-layout-grid grid">
          <div id="w-node-d120601a-0686-b812-2ef4-a116145efee6-7a6ed237" className="h-work_asset">
            <div className="h-work_asset-c">
              <img src={p.images[0]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
          <div id="w-node-d120601a-0686-b812-2ef4-a116145efee9-7a6ed237" className="h-work_asset">
            <div className="h-work_asset-c">
              <img src={p.images[1]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
          <div id="w-node-d120601a-0686-b812-2ef4-a116145efeed-7a6ed237" className="work_name-w">
            <div className="work_title-w">
              <div className="w-dyn-list">
                <div role="list" className="work_infos is_work-list w-dyn-items">
                  {p.categories.map((c) => (
                    <div role="listitem" className="w-dyn-item" key={c}>
                      <div fs-list-field="category" className="tag-xs">
                        {c}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="work_item-title">
                {p.name}
              </h2>
            </div>
            <div className="work_desc-spacer" />
            <div className="work_desc-w hide-tablet">
              <p className="txt-align-center txt-size-s opacity60">
                {p.description}
              </p>
            </div>
            <div className="work_btn-mob">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="button-dark w-inline-block">
                <div className="button_bg-dark" />
                <div className="button_in is-lottie">
                  <div data-is-ix2-target="1" className="button_lottie" data-w-id="beac2280-3ec7-7e81-68c9-72d460beb57e" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677fb4d34764579513f06df6/67d02290066d5ae0097618bc_Contact%20V4.json" data-loop="1" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="1.25" data-loading="eager" />
                  <div className="button_labels-wrap">
                    <div className="button_label-relative">
                      <div className="txt-button">
                        {"open"}
                      </div>
                    </div>
                    <div className="button_label-absolute">
                      <div className="txt-button">
                        {"open"}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="w-node-d120601a-0686-b812-2ef4-a116145efef3-7a6ed237" className="h-work_asset hide-mobile">
            <div className="h-work_asset-c">
              <img src={p.images[2]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
          <div id="w-node-d51cfe67-285e-4dd2-244d-7c39aad01a37-7a6ed237" className="h-work_asset hide-tablet">
            <div className="h-work_asset-c">
              <img src={p.images[2]} loading="lazy" alt={`${p.name} website screenshot`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
