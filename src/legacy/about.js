/* eslint-disable */
// Converted from the inline <script> blocks of the Webflow export.
// `scope` (see ../lib/scope.js) tracks every listener / SplitType / Lottie / Swiper /
// matchMedia instance created here so PageShell can dispose them on route change.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
const $ = window.jQuery;
gsap.registerPlugin(ScrollTrigger);

export function initAbout(scope) {

let mm = scope.matchMedia();

mm.add("(min-width: 992px)", () => {
  document.fonts.ready.then(() => {
    gsap.set("[data-hidden]", { visibility: "visible" });
  });

  const parent = document.querySelector(".hero-about_w");
  const parentStyle = window.getComputedStyle(parent);
  const paddingLeft = parseFloat(parentStyle.paddingLeft);
  const paddingRight = parseFloat(parentStyle.paddingRight);
  const parentWidth = parent.offsetWidth - paddingLeft - paddingRight;
  const lines = document.querySelectorAll(".title-line");

  // Create the main timeline
  const tl = gsap.timeline();

  tl.from(".hero-about_title", {
      y: "-30vh",
      duration: 1.4,
      ease: "expo.inOut"
    }, 0.5)

    .from(".hero-about_title", {
      opacity: 1,
      duration: 0.8,
      ease: "ease.out"
    }, 1)

    .from(".hero-about_logo-component", {
      scale: 0.4,
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, 1.3)

    .from(".hero-about_button", {
      y: 80,
      opacity: 0,
      scale: 1.2,
      duration: 1,
      ease: "expo.out"
    }, 1.5)

    .from("[hero-img]", {
      opacity: 0,
      scale: 1.2,
      duration: 1.4,
      ease: "expo.out"
    }, 1.6)

    .from(".menu_logo-link", {
      x: "-50vw",
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    }, 1.4)

    .from(".menu_links .menu_link", {
      y: "-10vw",
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.05,
    }, 1.4)

    .from(".menu_main-inner", {
      x: "50vw",
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    }, 1.4)

    .set(".hero-about_section", { cursor: "auto" }, 1.8);

  // Collect all words for a global staggered effect
  const split = scope.split(".hero-about_title", { types: "words" });
  const allWords = split.words;

  // Animate the lines first
  tl.to(lines, {
    x: (i, line) => {
      const thisWidth = line.offsetWidth;
      const dist = -((parentWidth - thisWidth) / 2);
      return dist;
    },
    duration: 1.4,
    ease: "expo.inOut",
    stagger: 0.05, // Add stagger here
  }, 0.7);

  tl.from(lines, {
    opacity: 0.2,
    duration: 1.4,
    ease: "expo.inOut",
    stagger: 0.05, // Add stagger here
  }, 0.7);

  // Animate all words together with a single staggered effect
  tl.from(allWords, {
    y: "100%",
    duration: 1.2,
    ease: "expo.out",
    stagger: 0.05,
  }, 0);
});

mm.add("(max-width: 991px)", () => {
  document.fonts.ready.then(() => {
    gsap.set("[data-hidden]", { visibility: "visible" });

    const split = scope.split(".title-line", { types: "lines" });
    const allWords = split.lines;
    const tl = gsap.timeline();

    gsap.set("hero-about_title", { overflow: "hidden" });

    tl.from(allWords, {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: {
          each: 0.1,
        }
      }, 0.15)

      .from(".hero-about_logo-component", {
        scale: 0.4,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
      }, 0)

      .from(".hero-about_button", {
        y: 80,
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "expo.out"
      }, 0.5)

      .from("[hero-img-mob]", {
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "expo.out"
      }, 0.7)

      .from(".menu_main-inner", {
        scale: 1.2,
        x: "50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 0.6)

      .from(".menu_logo-link", {
        scale: 1.2,
        x: "-50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 0.6);
  });
});

gsap.to(".hero-about_overlay", {
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-about_section",
    start: "top top",
    end: "bottom center",
    scrub: 0.1,
  }
});

// Hero Lottie plays with Scroll
const logoInner = document.querySelector(".hero-about_logo-inner .hero-about_lottie");
const heroSection = document.querySelector(".hero-about_section");

if (logoInner && heroSection) {
  const getYValue = () => window.innerWidth >= 769 ? "19.5em" : "20dvh";

  gsap.to('.hero-about_logo-inner', {
    scrollTrigger: {
      trigger: ".hero-about_services",
      start: "top bottom",
      end: "top center",
      scrub: 0.1,
      markers: false,
    },
    scale: 0.5,
  });

  gsap.to('.hero-about_logo-w', {
    scrollTrigger: {
      trigger: ".hero-about_services",
      start: "top bottom",
      end: "top center",
      scrub: 0.1,
      markers: false,
      onRefresh: (self) => self.animation.vars.y = getYValue(),
    },
    y: getYValue(),
  });

  scope.on(window, "resize", () => {
    const newY = getYValue();
    gsap.set(".hero-about_logo-w", { y: newY });
    ScrollTrigger.refresh();
  });
}

// Toggle Active Class - Services
mm.add("(min-width: 992px)", () => {

  const items = gsap.utils.toArray(".service_item");
  const firstItem = items[0];
  const lastItem = items[items.length - 1];

  if (firstItem) {
    firstItem.classList.add("active");
    const firstVideo = firstItem.querySelector("video");
    if (firstVideo) {
      firstVideo.play();
    }
  }

  items.forEach((item) => {
    const video = item.querySelector("video");

    ScrollTrigger.create({
      trigger: item,
      start: "top 70%",
      end: "bottom 70%",
      markers: false,
      onEnter: () => {
        items.forEach((el) => {
          if (el !== item) {
            el.classList.remove("active");
            const otherVideo = el.querySelector("video");
            if (otherVideo) {
              otherVideo.pause();
            }
          }
        });

        item.classList.add("active");
        if (video) {
          video.play();
        }
      },
      onEnterBack: () => {
        items.forEach((el) => {
          if (el !== item) {
            el.classList.remove("active");
            const otherVideo = el.querySelector("video");
            if (otherVideo) {
              otherVideo.pause();
            }
          }
        });

        item.classList.add("active");
        if (video) {
          video.play();
        }
      },
      onLeave: () => {
        if (item !== lastItem) {
          item.classList.remove("active");
          if (video) {
            video.pause();
          }
        }
      },
      onLeaveBack: () => {
        if (item !== firstItem) {
          item.classList.remove("active");
          if (video) {
            video.pause();
          }
        }
      },
    });
  });
});

//Services scroll in View - Mobile
mm.add("(max-width: 991px)", () => {
  document.querySelectorAll(".service_item").forEach((el) => {
    gsap.fromTo(el, { x: 120, opacity: 0 },
    {
      x: 0,
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
});

// Awards Section Scrolls in View
gsap.utils.toArray(".awards_section .w").forEach((gridContainer) => {
  const gridElements = gridContainer.querySelectorAll(".awards_section .awards_head");
  const lottieElements = gridContainer.querySelectorAll(
    ".icon_lottie-element .icon_lottie");

  scope.split(gridElements, { types: 'words', tagName: 'span' });

  gridElements.forEach((element) => {
    const titleMElements = element.querySelectorAll(".title-m");
    const wordElements = element.querySelectorAll(".word");

    titleMElements.forEach(el => el.style.display = "inline");
    wordElements.forEach(el => el.style.display = "inline-block");
  });

  const gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: gridContainer,
      start: "top 85%",
      markers: false,
    },
  });

  gridTl.from(gridContainer.querySelectorAll(".word, .icon_lottie-element"), {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
    duration: 0.8,
    ease: 'power4.out',
    stagger: 0.04,
  });

  lottieElements.forEach((currentElement) => {
    const lottiePath = currentElement.getAttribute('data-lottie-path');

    const lottieInstance = scope.lottie({
      container: currentElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    lottieInstance.goToAndStop(0, true);

    gridTl.add(() => {
      if (!lottieInstance.isPlaying) {
        playLottieLoop(lottieInstance);
      }
    }, "<");
  });

  function playLottieLoop(instance) {
    instance.setDirection(1);
    instance.play();

    if (!instance._loopBound) {
      instance._loopBound = true;

      instance.addEventListener('complete', () => {
        instance.setDirection(instance.playDirection === 1 ? -1 : 1);
        instance.play();
      });
    }
  }
});

// Hover Effect for Awards CMS
document.querySelectorAll('.award_link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const parentList = link.closest('.awards_list');
    const parentItem = link.closest('.award_item');

    gsap.to(parentList.querySelectorAll('.award_item .award_label'), {
      opacity: 0.1,
      duration: 0.25,
      ease: "ease"
    });

    gsap.to(parentItem.querySelectorAll('.award_label'), {
      opacity: 1,
      duration: 0.25,
      ease: "ease"
    });
  });

  link.addEventListener('mouseleave', () => {
    const parentList = link.closest('.awards_list');

    gsap.to(parentList.querySelectorAll('.award_item .award_label'), {
      opacity: 1,
      duration: 0.25,
      ease: "ease"
    });
  });
});

// Award Item in View
document.querySelectorAll('.award_item').forEach((item) => {
  gsap.from(item.querySelector('.award_number'), {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
  });

  gsap.from(item.querySelector('.award_project-name'), {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.05,
    ease: "expo.out",
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
  });

  item.querySelectorAll('.award_label').forEach((label, index) => {
    gsap.from(label, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2 + (index * 0.05), // Add stagger effect
      ease: "expo.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
    });
  });
});

document.querySelectorAll('.awards_head-labels').forEach((item, index) => {
  gsap.from(item.querySelectorAll('.txt-caps'), {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
  });
});

mm.add("(min-width: 992px)", () => {
  document.querySelectorAll('.testi_item').forEach((item) => {
    gsap.from(item, {
      x: 300,
      filter: "blur(8px)",
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        markers: false,
      },
    });
  });
});

document.querySelectorAll('.testi_list').forEach((item) => {
  gsap.from(item, {
    x: 300,
    filter: "blur(8px)",
    opacity: 0,
    diuration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      markers: false,
    },
  });
});

// Testi Section Scrolls in View
gsap.utils.toArray(".testi_section .w").forEach((gridContainer) => {
  const gridElements = gridContainer.querySelectorAll(".testi_section .testi_head");
  const lottieElements = gridContainer.querySelectorAll(
    ".icon_lottie-element .icon_lottie");

  scope.split(gridElements, { types: 'words', tagName: 'span' });

  gridElements.forEach((element) => {
    const titleMElements = element.querySelectorAll(".title-m");
    const wordElements = element.querySelectorAll(".word");

    titleMElements.forEach(el => el.style.display = "inline");
    wordElements.forEach(el => el.style.display = "inline-block");
  });

  const gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: gridContainer,
      start: "top 85%",
      markers: false,
    },
  });

  gridTl.from(gridContainer.querySelectorAll(".word, .icon_lottie-element"), {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
    duration: 0.8,
    ease: 'power4.out',
    stagger: 0.04,
  });

  lottieElements.forEach((currentElement) => {
    const lottiePath = currentElement.getAttribute('data-lottie-path');

    const lottieInstance = scope.lottie({
      container: currentElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    lottieInstance.goToAndStop(0, true);

    gridTl.add(() => {
      if (!lottieInstance.isPlaying) {
        playLottieLoop(lottieInstance);
      }
    }, "<");
  });

  function playLottieLoop(instance) {
    instance.setDirection(1);
    instance.play();

    if (!instance._loopBound) {
      instance._loopBound = true;

      instance.addEventListener('complete', () => {
        instance.setDirection(instance.playDirection === 1 ? -1 : 1);
        instance.play();
      });
    }
  }
});

// Toggle Active Class - Testimonials
const testiItems = gsap.utils.toArray(".testi_item");
const firstTestiItem = testiItems[0];

if (firstTestiItem) {
  firstTestiItem.classList.add("active");
}

testiItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 60%",
    end: "bottom center",
    markers: false,
    onEnter: () => {
      testiItems.forEach(el => el.classList.remove("active"));

      item.classList.add("active");
    },
    onEnterBack: () => {
      testiItems.forEach(el => el.classList.remove("active"));

      item.classList.add("active");
    },
  });
});

// Work Section Scrolls in View
gsap.utils.toArray(".h-work_section .w").forEach((gridContainer) => {
  const gridElements = gridContainer.querySelectorAll(".h-work_head");
  const lottieElements = gridContainer.querySelectorAll(
    ".icon_lottie-element .icon_lottie");

  scope.split(gridElements, { types: 'words', tagName: 'span' });

  gridElements.forEach((element) => {
    const titleMElements = element.querySelectorAll(".title-m");
    const wordElements = element.querySelectorAll(".word");

    titleMElements.forEach(el => el.style.display = "inline");
    wordElements.forEach(el => el.style.display = "inline-block");
  });

  const gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: gridContainer,
      start: "top 85%",
      markers: false,
    },
  });

  gridTl.from(gridContainer.querySelectorAll(".word, .icon_lottie-element"), {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.04,
    })
    .from(gridContainer.querySelectorAll(".h-work_subtitle"), {
      opacity: 0,
      y: "100%",
      duration: 1,
      ease: 'power4.out',
    }, 0.25)
    .from(".h-work_section .h-work_link", {
      x: 300,
      filter: "blur(8px)",
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.1,
      clearProps: "opacity",
    }, 0.4);

  lottieElements.forEach((currentElement) => {
    const lottiePath = currentElement.getAttribute('data-lottie-path');

    const lottieInstance = scope.lottie({
      container: currentElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    lottieInstance.goToAndStop(0, true);

    gridTl.add(() => {
      if (!lottieInstance.isPlaying) {
        playLottieLoop(lottieInstance);
      }
    }, "<");
  });

  function playLottieLoop(instance) {
    instance.setDirection(1);
    instance.play();

    if (!instance._loopBound) {
      instance._loopBound = true;

      instance.addEventListener('complete', () => {
        instance.setDirection(instance.playDirection === 1 ? -1 : 1);
        instance.play();
      });
    }
  }
});

document.querySelectorAll('.button-ghost').forEach(button => {
  const lottieContainer = button.querySelector('.button_lottie');
  const lottiePath = lottieContainer.getAttribute('data-lottie-path');

  const anim = scope.lottie({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: lottiePath,
  });

  let isReady = false;
  let gsapTween = null;

  anim.addEventListener('DOMLoaded', () => {
    isReady = true;
  });

  const animateLottie = (from, to, duration, ease, onComplete = null) => {
    if (gsapTween) gsapTween.kill();

    const frameObj = { frame: from };

    gsapTween = gsap.to(frameObj, {
      frame: to,
      duration,
      ease,
      onUpdate: () => {
        anim.goToAndStop(frameObj.frame, true);
      },
      onComplete
    });
  };

  // Hover in - play to frame 70
  button.addEventListener('mouseenter', () => {
    if (!isReady) return;
    animateLottie(0, 70, 0.6, 'linear');
  });

  // Hover out - play to frame 120, then reset
  button.addEventListener('mouseleave', () => {
    if (!isReady) return;
    animateLottie(70, 120, 0.5, 'ease', () => {
      anim.goToAndStop(0, true);
    });
  });
});

// Cursor Follow mouse
let cursorItem = document.querySelector(".cursor");
let cursorParagraph = cursorItem.querySelector("p");
let cursorArrow = cursorItem.querySelector(".cursor_icon");
let targets = document.querySelectorAll("[data-cursor]");
let xOffset = 10;
let yOffset = 40;
let currentTarget = null;
let lastText = '';

gsap.set(cursorItem, { xPercent: xOffset, yPercent: yOffset });

let xTo = gsap.quickTo(cursorItem, "x", { ease: "power3" });
let yTo = gsap.quickTo(cursorItem, "y", { ease: "power3" });

scope.on(window, "mousemove", e => {
  let scrollY = window.scrollY;
  let cursorX = e.clientX;
  let cursorY = e.clientY + scrollY;

  gsap.to(cursorItem, {
    xPercent: xOffset,
    yPercent: yOffset,
    duration: 0.3,
    ease: "power3"
  });

  xTo(cursorX);
  yTo(cursorY - scrollY);
});

targets.forEach(target => {
  target.addEventListener("mouseenter", () => {
    currentTarget = target;
    let newText = target.getAttribute("data-cursor");

    if (newText !== lastText) {
      cursorParagraph.innerHTML = newText;
      lastText = newText;
    }

    // Show or hide the icon based on presence of data-cursor-arrow
    if (target.matches("[data-cursor][data-cursor-arrow]")) {
      cursorArrow.style.display = "block";
    } else {
      cursorArrow.style.display = "none";
    }
  });

  target.addEventListener("mouseleave", () => {
    cursorArrow.style.display = "none";
  });
});


function initMarqueeScrollDirection() {
  document.querySelectorAll('[data-marquee-scroll-direction-target]').forEach((marquee) => {
    // Query marquee elements
    const marqueeContent = marquee.querySelector('[data-marquee-collection-target]');
    const marqueeScroll = marquee.querySelector('[data-marquee-scroll-target]');
    if (!marqueeContent || !marqueeScroll) return;

    // Get data attributes
    const {
      marqueeSpeed: speed,
      marqueeDirection: direction,
      marqueeDuplicate: duplicate,
      marqueeScrollSpeed: scrollSpeed
    } = marquee.dataset;

    // Convert data attributes to usable types
    const marqueeSpeedAttr = parseFloat(speed);
    const marqueeDirectionAttr = direction === 'right' ? 1 : -1; // 1 for right, -1 for left
    const duplicateAmount = parseInt(duplicate || 0);
    const scrollSpeedAttr = parseFloat(scrollSpeed);
    const speedMultiplier = window.innerWidth < 479 ? 0.25 : window.innerWidth < 991 ? 0.5 : 1;

    let marqueeSpeed = marqueeSpeedAttr * (marqueeContent.offsetWidth / window.innerWidth) *
      speedMultiplier;

    // Precompute styles for the scroll container
    marqueeScroll.style.marginLeft = `${scrollSpeedAttr * -1}%`;
    marqueeScroll.style.width = `${(scrollSpeedAttr * 2) + 100}%`;

    // Duplicate marquee content
    if (duplicateAmount > 0) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < duplicateAmount; i++) {
        fragment.appendChild(marqueeContent.cloneNode(true));
      }
      marqueeScroll.appendChild(fragment);
    }

    // GSAP animation for marquee content
    const marqueeItems = marquee.querySelectorAll('[data-marquee-collection-target]');
    const animation = gsap.to(marqueeItems, {
      xPercent: -100, // Move completely out of view
      repeat: -1,
      duration: marqueeSpeed,
      ease: 'linear'
    }).totalProgress(0.5);

    // Initialize marquee in the correct direction
    gsap.set(marqueeItems, { xPercent: marqueeDirectionAttr === 1 ? 100 : -100 });
    animation.timeScale(marqueeDirectionAttr); // Set correct direction
    animation.play(); // Start animation immediately

    // Set initial marquee status
    marquee.setAttribute('data-marquee-status', 'normal');

    // ScrollTrigger logic for direction inversion
    ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const isInverted = self.direction === 1; // Scrolling down
        const currentDirection = isInverted ? -marqueeDirectionAttr :
          marqueeDirectionAttr;

        // Update animation direction and marquee status
        animation.timeScale(currentDirection);
        marquee.setAttribute('data-marquee-status', isInverted ? 'normal' : 'inverted');
      }
    });

    // Extra speed effect on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marquee,
        start: '0% 100%',
        end: '100% 0%',
        scrub: 0
      }
    });

    const scrollStart = marqueeDirectionAttr === -1 ? scrollSpeedAttr : -scrollSpeedAttr;
    const scrollEnd = -scrollStart;

    tl.fromTo(marqueeScroll, { x: `${scrollStart}vw` }, { x: `${scrollEnd}vw`, ease: 'none' });
  });
}

initMarqueeScrollDirection();


}
