/* eslint-disable */
// Converted from the inline <script> blocks of the Webflow export.
// `scope` (see ../lib/scope.js) tracks every listener / SplitType / Lottie / Swiper /
// matchMedia instance created here so PageShell can dispose them on route change.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
const $ = window.jQuery;
gsap.registerPlugin(ScrollTrigger);

export function initShared(scope) {


// Lenis Init — snappier
window.scrollTo(0, 0);
const lenis = new Lenis({ lerp: 0.15, autoResize: true });
window.lenis = lenis;
let rafId = requestAnimationFrame(function raf(time) {
  lenis.raf(time);
  rafId = requestAnimationFrame(raf);
});
scope.add(() => { cancelAnimationFrame(rafId); lenis.destroy(); if (window.lenis === lenis) window.lenis = null; });

// Footer Callout Splitted Text
const staggerCallouts = document.querySelectorAll(".footer_callout");

staggerCallouts.forEach((callout) => {
  const defaultText = callout.querySelector(".footer_callout-txt.default");
  const absoluteText = callout.querySelector(".footer_callout-txt.absolute");

  let allWordsDefault = [];
  let allWordsAbsolute = [];

  if (defaultText) {
    let splitDefault = scope.split(defaultText, { types: "words" });
    allWordsDefault = splitDefault.words;
  }

  if (absoluteText) {
    let splitAbsolute = scope.split(absoluteText, { types: "words" });
    allWordsAbsolute = splitAbsolute.words;

    // Set initial position of absolute words to 1em
    gsap.set(allWordsAbsolute, { y: "1em" });
  }

  callout.addEventListener("mouseenter", function () {
    gsap.to(allWordsDefault, {
      y: "-1em",
      duration: 0.55,
      ease: "expo.out", // Replaced with expo.out
      stagger: { each: 0.03, from: "start" },
    });

    gsap.to(allWordsAbsolute, {
      y: "0em",
      duration: 0.55,
      ease: "expo.out", // Replaced with expo.out
      stagger: { each: 0.03, from: "start" },
    });
  });

  callout.addEventListener("mouseleave", function () {
    gsap.to(allWordsDefault, {
      y: "0em",
      duration: 0.5, // Smooth return
      ease: "expo.out",
      stagger: { each: 0.03, from: "start" },

    });

    gsap.to(allWordsAbsolute, {
      y: "1em",
      duration: 0.5, // Smooth return
      ease: "expo.out",
      stagger: { each: 0.03, from: "start" },

    });
  });
});

// Play/Pause video based on viewport
function initPlayPauseVideoScroll() {
  const videos = gsap.utils.toArray('[data-video="playpause"]');

  videos.forEach(el => {
    const video = el.querySelector('video');
    if (!video) return;

    ScrollTrigger.create({
      trigger: el,
      start: '0% 100%',
      end: '100% 0%',
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    });
  });
}

initPlayPauseVideoScroll();

// Menu Show & Hide on Scroll
var lastScrollTop = 0;
$(window).on('scroll.pageScope', function () {
  var st = $(this).scrollTop();
  var windowHeight = $(window).height();
  var documentHeight = $(document).height();

  if (st <= 0) {
    $('.menu').css('transform', 'translateY(0%)');
  }
  else if (st + windowHeight >= documentHeight) {
    // Reached the bottom
    $('.menu').css('transform', 'translateY(-100%)');
  }
  else if (st > lastScrollTop) {
    // Scrolling down
    $('.menu').css('transform', 'translateY(-100%)');
  } else {
    // Scrolling up
    $('.menu').css('transform', 'translateY(0%)');
  }

  lastScrollTop = st;
});

// Fade In Small Animation
document.querySelectorAll('[fade-in]').forEach((el) => {
  gsap.fromTo(el, { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});

// Contact Form Opens
gsap.set(".contact_bg", { opacity: 0 });
gsap.set(".contact_main", { x: "100%" });
gsap.set(".contact_close-btn", { scale: 0 });
gsap.set(".contact_component", { display: "none" });

document.querySelectorAll("[contact-trigger]").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const contactComponent = document.querySelector(".contact_component");
    const contactBg = document.querySelector(".contact_bg");
    const contactMain = document.querySelector(".contact_main");
    const contactCloseBtn = document.querySelector(".contact_close-btn");

    gsap.set(contactComponent, { display: "block" });

    gsap.timeline()
      .to(contactBg, { opacity: 1, duration: 0.4, ease: "ease" })
      .to(contactMain, { x: "0%", duration: 0.8, ease: "power4.out" }, 0.1)
      .to(contactCloseBtn, { scale: 1, duration: 0.8, ease: "power4.out" }, 0.15);
  });
});

document.querySelector(".contact_close-w")?.addEventListener("click", () => {
  const contactComponent = document.querySelector(".contact_component");
  const contactBg = document.querySelector(".contact_bg");
  const contactMain = document.querySelector(".contact_main");
  const contactCloseBtn = document.querySelector(".contact_close-btn");

  gsap.timeline({
      onComplete: () => gsap.set(contactComponent, { display: "none" })
    })
    .to(contactCloseBtn, { scale: 0, duration: 0.4, ease: "power4.out" })
    .to(contactMain, { x: "100%", duration: 0.5, ease: "power4.out" }, 0.1)
    .to(contactBg, { opacity: 0, duration: 0.3, ease: "power2.out" }, 0);
});

//Play Form Lottie on Hover
function initLottieHover() {
  document.querySelectorAll(".form-field_component").forEach(component => {
    const lottieContainer = component.querySelector(".field_label .field_lottie");
    const lottiePath = lottieContainer?.dataset?.lottiePath;

    if (lottiePath && !lottieContainer.dataset.lottieInitialized) {
      const anim = scope.lottie({
        container: lottieContainer,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: lottiePath,
      });

      component.addEventListener("mouseenter", () => {
        anim.setDirection(1);
        anim.play();
      });

      component.addEventListener("mouseleave", () => {
        anim.setDirection(-1);
        anim.play();
      });

      lottieContainer.dataset.lottieInitialized = "true";
    }
  });
}

const observer = scope.observer(() => {
  const contact = document.querySelector(".contact_component");
  if (contact && getComputedStyle(contact).display !== "none") {
    initLottieHover();
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["style", "class"],
});

// Footer Open Credits
const creditsTrigger = document.querySelector("[open-credits]");
const creditItems = document.querySelectorAll(".footer_credits .txt-size-xs");

gsap.set(creditItems, { x: -40, opacity: 0 });

let isCreditsOpen = false;

const openTl = gsap.timeline({ paused: true })
  .to(creditItems, {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.05
  });

const closeTl = gsap.timeline({
  paused: true,
  onComplete: () => {
    gsap.set(creditItems, { x: 40, opacity: 0 });
  }
}).to(creditItems, {
  x: 40,
  opacity: 0,
  duration: 0.6,
  ease: "power4.out",
  stagger: 0.05
});

creditsTrigger?.addEventListener("click", () => {
  if (!isCreditsOpen) {
    closeTl.pause(0);
    openTl.restart();
  } else {
    openTl.pause(0);
    closeTl.restart();
  }
  isCreditsOpen = !isCreditsOpen;
});

// Page transition
gsap.fromTo(
  [".page_w", ".menu_inner"], { opacity: 0 }, {
    opacity: 1,
    duration: 0.2,
    ease: "ease"
  }
);


  scope.add(() => $(window).off('.pageScope'));
}
