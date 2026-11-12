/* eslint-disable */
// Converted from the inline <script> blocks of the Webflow export.
// `scope` (see ../lib/scope.js) tracks every listener / SplitType / Lottie / Swiper /
// matchMedia instance created here so PageShell can dispose them on route change.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
const $ = window.jQuery;
gsap.registerPlugin(ScrollTrigger);

export function initHome(scope) {


let mm = scope.matchMedia();

mm.add("(min-width: 992px)", () => {
  document.fonts.ready.then(() => {
    gsap.set("[data-hidden]", { visibility: "visible" });

    const titleSplit = scope.split(".title-l_h-hero", { types: "words, lines" });
    const subtitleSplit = scope.split(
      ".h-hero_subtitle-wrap .txt-color-light-60o", { types: "words, lines" });

    titleSplit.lines.forEach(line => {
      gsap.set(line, { overflow: "hidden", display: "inline-block" });
    });

    const tl = gsap.timeline();

    tl.fromTo(".title-l_h-hero", { fontSize: "12em", opacity: 0.2 }, {
        fontSize: "4em",
        opacity: 1,
        duration: 1.6,
        ease: "expo.inOut"
      }, 0.6)

      .from(titleSplit.words, {
        y: "100%",
        duration: 1,
        ease: "expo.out",
        stagger: 0.15
      }, 0)

      .from(subtitleSplit.lines, {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1,
      }, 1.6)

      .from(".arrow_lottie", {
        opacity: 0,
        y: "100%",
        duration: 0.8,
        ease: "power4.out"
      }, 1.5)

      .from(".h-hero_work-divider", {
        scale: 0.6,
        filter: 'blur(12px)',
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
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
        stagger: {
          each: 0.05,
          from: "start"
        }
      }, 1.4)

      .from(".menu_main-inner", {
        x: "50vw",
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.4)

      .from(".work_card .work_card-img-w", {
        scale: 0.2,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: {
          amount: 0.2,
          from: "center"
        }
      }, 1.2)

      .from(".work_card", {
        y: "200%",
        filter: 'blur(12px)',
        duration: 1,
        ease: "expo.out",
        stagger: {
          amount: 0.2,
          from: "center"
        }
      }, 1.2)

      .set(".h-hero_section", { cursor: "auto" }, 2.2)
      .set(".h-hero_work", { pointerEvents: "auto" }, 2);
  });

  return () => gsap.killTweensOf("*");
});

mm.add("(max-width: 991px)", () => {
  document.fonts.ready.then(() => {
    gsap.set("[data-hidden]", { visibility: "visible" });

    const titleSplit = scope.split(".title-l_h-hero", { types: "words, lines" });
    const subtitleSplit = scope.split(
      ".h-hero_subtitle-wrap .txt-color-light-60o", { types: "words, lines" });

    titleSplit.lines.forEach(line => {
      gsap.set(line, { overflow: "hidden", display: "inline-block" });
    });

    const tl = gsap.timeline();

    tl.from(titleSplit.words, {
        y: "100%",
        duration: 1,
        ease: "expo.out",
        stagger: 0.15
      }, 0)

      .from(subtitleSplit.lines, {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1,
      }, 1.6)

      .from(".h-hero_title-w", {
        y: "25vh",
        opacity: 0.2,
        duration: 1,
        ease: "expo.inOut",
      }, 0.8)

      .from(".h-hero_works-mob .txt-size-xs", {
        scale: 0.6,
        filter: 'blur(12px)',
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
      }, 1.6)

      .from(".menu_logo-link", {
        scale: 1.2,
        x: "-50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.4)

      .from(".menu_main-inner", {
        scale: 1.2,
        x: "50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.4)

      .from(".work_card-mob", {
        x: "-100vw",
        opacity: 0,
        scale: 0.4,
        filter: 'blur(12px)',
        duration: 1,
        ease: "expo.out",
        stagger: {
          each: 0.05,
          from: "end"
        }
      }, 1.2)

      .from(".swiper-nav .swiper-arrow_prev", {
        x: "-100%",
        scale: 0,
        duration: 0.9,
        ease: "expo.out",
      }, 1.2)

      .from(".swiper-nav .swiper-arrow_next", {
        x: "100%",
        scale: 0,
        duration: 0.9,
        ease: "expo.out",
      }, 1.3);

  });

  return () => gsap.killTweensOf("*");
});

// Hero Swiper Slider
var swiper = scope.swiper(".swiper.h_works", {
  slidesPerView: 1.2,
  spaceBetween: 0,
  centeredSlides: true,
  a11y: {
    slideRole: 'listitem'
  },
  navigation: {
    nextEl: ".swiper-arrow_next",
    prevEl: ".swiper-arrow_prev",
  },

  on: {
    transitionStart: function () {
      // Pause all videos when transitioning
      document.querySelectorAll(".swiper-slide video").forEach((video) => {
        video.pause();
      });
    },

    transitionEnd: function () {
      // Get the active slide and its video
      var activeIndex = this.activeIndex;
      var activeSlide = document.getElementsByClassName("swiper-slide")[activeIndex];
      var activeVideo = activeSlide?.querySelector(".work_embed video");

      if (activeVideo) {
        activeVideo.muted = true; // Fix autoplay restrictions
        activeVideo.setAttribute("playsinline", ""); // Mobile support
        activeVideo.play().catch(() => {});
      }
    },
  },
});

// ✅ Pause videos when Swiper is not in view & resume when it's back
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".swiper.h_works",
  start: "top bottom", // When Swiper fully enters viewport
  end: "bottom top", // When Swiper fully leaves viewport
  onLeave: () => {
    document.querySelectorAll(".swiper-slide video").forEach((video) => {
      video.pause(); // ✅ Pause video but keep progress
    });
  },
  onEnterBack: () => {
    // ✅ Resume playing only the active slide's video when Swiper is back in view
    var activeSlide = document.querySelector(".swiper-slide.h_works.swiper-slide-active");
    var activeVideo = activeSlide?.querySelector(".work_embed video");

    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }
  },
});

// ✅ Pause all videos when Swiper is not visible in viewport
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".swiper.h_works",
  start: "top bottom", // When Swiper fully enters viewport
  end: "bottom top", // When Swiper fully leaves viewport
  onLeave: () => {
    document.querySelectorAll(".swiper-slide video").forEach((video) => {
      video.pause();
      video.currentTime = 0; // Reset video when Swiper is out of view
    });
  },
});

mm.add("(min-width: 992px)", () => {
  const workCards = document.querySelectorAll('.work_card');

  workCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const video = card.querySelector('.work_embed video');
      if (video) {
        video.play().catch(() => {});
      }
    });

    card.addEventListener('mouseleave', () => {
      const video = card.querySelector('.work_embed video');
      if (video) {
        video.pause();
      }
    });
  });

  const workLinks = document.querySelectorAll('.h-work_link');
  workLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const videos = link.querySelectorAll('video.h-work_embed');
      videos.forEach(video => {
        video.play().catch(() => {});
      });
    });

    link.addEventListener('mouseleave', () => {
      const videos = link.querySelectorAll('video.h-work_embed');
      videos.forEach(video => {
        video.pause();
      });
    });
  });

  return () => {
    // Cleanup: Remove event listeners when screen is resized below 992px
    workCards.forEach(card => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
    });

    workLinks.forEach(link => {
      link.removeEventListener('mouseenter', () => {});
      link.removeEventListener('mouseleave', () => {});
    });
  };
});

mm.add("(min-width: 992px)", () => {
  // Hero Interaction
  const navItems = document.querySelectorAll('.h-hero_work');

  const toggleSiblingClass = (items, index, offset, className, add) => {
    const sibling = items[index + offset];
    if (sibling) {
      sibling.classList.toggle(className, add);
    }
  };

  navItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hover');

      toggleSiblingClass(navItems, index, -1, 'sibling-far1', true);
      toggleSiblingClass(navItems, index, 1, 'sibling-far1', true);
      toggleSiblingClass(navItems, index, -2, 'sibling-far2', true);
      toggleSiblingClass(navItems, index, 2, 'sibling-far2', true);
      toggleSiblingClass(navItems, index, -3, 'sibling-far3', true);
      toggleSiblingClass(navItems, index, 3, 'sibling-far3', true);
      toggleSiblingClass(navItems, index, -4, 'sibling-far4', true);
      toggleSiblingClass(navItems, index, 4, 'sibling-far4', true);
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('hover');
      toggleSiblingClass(navItems, index, -1, 'sibling-far1', false);
      toggleSiblingClass(navItems, index, 1, 'sibling-far1', false);
      toggleSiblingClass(navItems, index, -2, 'sibling-far2', false);
      toggleSiblingClass(navItems, index, 2, 'sibling-far2', false);
      toggleSiblingClass(navItems, index, -3, 'sibling-far3', false);
      toggleSiblingClass(navItems, index, 3, 'sibling-far3', false);
      toggleSiblingClass(navItems, index, -4, 'sibling-far4', false);
      toggleSiblingClass(navItems, index, 4, 'sibling-far4', false);
    });
  });

  $(".h-hero_work").hover(
    function () {
      $(".h-hero_content-wrap").css({
        "opacity": "0.2",
        "transform": "scale(0.9)",
        "transition": "opacity 0.4s cubic-bezier(.16, 1, .3, 1), transform 0.4s cubic-bezier(.16, 1, .3, 1)"
      });

      $(".h-hero_arrow").css({
        "opacity": "0",
        "transition": "opacity 0.4s cubic-bezier(.16, 1, .3, 1)"
      });

      $(".h-hero_work-divider").css({
        "opacity": "0",
        "transition": "opacity 0.2s cubic-bezier(.16, 1, .3, 1)"
      });

    },
    function () {
      $(".h-hero_content-wrap").css({
        "opacity": "1",
        "transform": "scale(1)"
      });

      $(".h-hero_arrow").css({
        "opacity": "1"
      });

      $(".h-hero_work-divider").css({
        "opacity": "1"
      });
    }
  );

  let worksHeight = $(".h-hero_works").outerHeight(); // Get height including padding
  $(".h-hero_work-divider").css("margin-bottom", `calc(${worksHeight}px)`);

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

  // Mouse enter handling
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
        cursorArrow.style.display = "flex";
      } else {
        cursorArrow.style.display = "none";
      }
    });
  });

  // Optional: mouse leave resets the icon (optional behavior)
  targets.forEach(target => {
    target.addEventListener("mouseleave", () => {
      cursorArrow.style.display = "none";
    });
  });

  return () => {
    targets.forEach(item => {
      item.removeEventListener("mouseenter");
      item.removeEventListener("mouseleave");
    });

    window.removeEventListener("mousemove");
  };

});

// 3 Circles on Scroll Interaction
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.h-intro_sticky-c .grid',
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: '.h-intro_sticky-c',
      start: 'top 90%',
      end: 'top 40%',
      scrub: 0.5,
      toggleActions: 'play none none none',
      markers: false
    }
  }
);

mm.add("(min-width: 991px)", () => {
  gsap.from('.h-intro_scroll-indicator', {
    scaleY: 0,
    scrollTrigger: {
      trigger: '.h-intro_sticky-marquee',
      start: 'top 10%',
      end: 'bottom 70%',
      scrub: 0.5,
      toggleActions: 'play none none none',
      markers: false,
    },
  });

  const circleScrollElements = document.querySelectorAll('.circle_scroll');

  circleScrollElements.forEach((circle, index) => {
    const textElement = circle.querySelector('.txt-align-center');
    const lottieWrapper = circle.querySelector('.circle_lottie-w');
    const lottieElement = circle.querySelector('.circle_lottie-icon');

    if (!lottieElement) return;

    const lottiePath = lottieElement.getAttribute('data-lottie-path');
    const lottieInstance = scope.lottie({
      container: lottieElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    function playLottieLoop() {
      lottieInstance.setDirection(1);
      lottieInstance.play();

      lottieInstance.addEventListener('complete', () => {
        lottieInstance.setDirection(lottieInstance.playDirection === 1 ? -1 : 1);
        lottieInstance.play();
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circle,
        start: `top ${90 + index * -20}%`,
        toggleActions: 'play none none none',
        markers: false,
      },
    });

    tl.from(circle, { y: '100%', duration: 1.2, ease: 'power4.out' }, 0);
    tl.from(lottieWrapper, { scale: 0, duration: 0.8, ease: 'power3.out' }, 0);
    tl.from(textElement, { opacity: 0, y: 40, duration: 0.6, ease: 'power3.out' }, 0.2);
    tl.add(() => { playLottieLoop(); }, 0.4);
  });

  const lottieElements = document.querySelectorAll('.circle_lottie-line');

  lottieElements.forEach((lottieElement, index) => {
    const reverseIndex = lottieElements.length - 1 - index;
    const lottiePath = lottieElement.getAttribute('data-lottie-path');
    const lottieInstance = scope.lottie({
      container: lottieElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: lottiePath,
    });

    lottieInstance.goToAndStop(0, true);

    ScrollTrigger.create({
      trigger: lottieElement,
      start: `top ${10 + reverseIndex * 10}%`,
      end: `top ${-50 + reverseIndex * 10}%`,
      scrub: 0.5,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress * lottieInstance.totalFrames;
        lottieInstance.goToAndStop(progress, true);
      },
    });
  });

  const scrollInnerElements = document.querySelectorAll('.circle_scroll-inner');

  scrollInnerElements.forEach((innerElement, index) => {
    gsap.fromTo(
      innerElement, { opacity: 0, y: '150%', filter: 'blur(12px)' },
      {
        opacity: 1,
        y: '0%',
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: innerElement.closest('.circle_scroll'),
          start: `top ${90 - index * 10}%`,
          end: `top ${60 - index * 10}%`,
          scrub: 0.5,
          markers: false,
        },
      }
    );
  });

  const movingDownElements = document.querySelectorAll(
    '.circle_scroll-parent.left, .circle_scroll-parent.right');

  movingDownElements.forEach((element) => {
    gsap.to(element, {
      y: '11em',
      ease: 'none',
      scrollTrigger: {
        trigger: '.h-intro_sticky-marquee',
        start: 'bottom 180%',
        end: 'bottom 120%',
        scrub: 0.5,
        markers: false,
      },
    });
  });

  const movingLeftElements = document.querySelectorAll('.circle_scroll-parent.left');

  movingLeftElements.forEach((element) => {
    gsap.to(element, {
      x: '9em',
      ease: 'none',
      scrollTrigger: {
        trigger: '.h-intro_sticky-marquee',
        start: 'bottom 150%',
        end: 'bottom 120%',
        scrub: 0.5,
        markers: false,
      },
    });
  });

  const movingRightElements = document.querySelectorAll('.circle_scroll-parent.right');

  movingRightElements.forEach((element) => {
    gsap.to(element, {
      x: '-9em',
      ease: 'none',
      scrollTrigger: {
        trigger: '.h-intro_sticky-marquee',
        start: 'bottom 150%',
        end: 'bottom 120%',
        scrub: 0.5,
        markers: false,
      },
    });
  });

  const fadeIntersectShape = document.querySelectorAll('.shape_intersect');

  fadeIntersectShape.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.h-intro_sticky-marquee',
        start: 'bottom 115%',
        end: 'bottom 110%',
        scrub: 0.75,
        markers: false,
      },
    });
  });

  return () => {
    // Cleanup function to kill animations when breakpoint changes
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
});

mm.add("(max-width: 991px)", () => {
  const circlesScrollC = document.querySelectorAll('.circles_scroll-c');
  const shapeIntersect = document.querySelector('.shape_intersect'); // ✅ Global Selection

  circlesScrollC.forEach((circle) => {
    const parentElements = circle.querySelectorAll('.circle_scroll-parent');

    parentElements.forEach((parent, index) => {
      const textElement = parent.querySelector('.txt-align-center');
      const lottieWrapper = parent.querySelector('.circle_lottie-w');
      const lottieIcon = parent.querySelector('.circle_lottie-icon');
      const lottieLine = parent.querySelector('.circle_lottie-line');

      // Initialize GSAP Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circlesScrollC, // ✅ Keep `.circles_scroll-c` as trigger
          start: "top 90%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.from(lottieWrapper, { scale: 0, duration: 0.8, ease: "power4.out" }, 0);
      tl.from(lottieLine, { scale: 0, opacity: 0, duration: 1.2, ease: "power4.out" },
        0.1);
      tl.from(textElement, { opacity: 0, y: 40, duration: 0.6, ease: "power4.out" },
        0.2);

      // Lottie Icon (Looping Animation)
      const lottiePathIcon = lottieIcon.getAttribute("data-lottie-path");
      const lottieInstanceIcon = scope.lottie({
        container: lottieIcon,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: lottiePathIcon,
      });

      function playLottieLoop() {
        let direction = 1; // Track current direction

        lottieInstanceIcon.setDirection(direction);
        lottieInstanceIcon.play();

        lottieInstanceIcon.addEventListener("complete", () => {
          direction *= -1; // Toggle direction
          lottieInstanceIcon.setDirection(direction);
          lottieInstanceIcon.play();
        });
      }

      tl.add(() => playLottieLoop(), 0.4);
    });
  });

  gsap.from(".shape_intersect", {
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.6,
    scrollTrigger: {
      trigger: circlesScrollC,
      start: "top 70%",
      toggleActions: "play none none none",
      markers: false,
    },
  });

  return () => {
    // Cleanup function when matchMedia condition is no longer met
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
});

// About Section Scroll Home
let splitTextWords = scope.split("[data-lottie-text]", { types: "words", tagName: "span" });

$("[data-lottie-text]").find("span, .title-m").css("display", "inline");
$("[data-lottie-text]")
  .find(".word").css("display", "inline-block");

$(".h-about_content-sticky").each(function () {
  const container = $(this);
  const elements = container.find(
    ".word, .icon_lottie-element, .h-about_desc"
  );

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".h-about_title-track",
      start: "top 85%",
      end: "bottom 70%",
      scrub: 1,
      markers: false
    }
  });

  tl.set(container, { visibility: "visible" });

  tl.from(elements, {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
    duration: 0.6,
    ease: "power4.out",
    stagger: { each: 0.07 }
  });

  elements.each(function () {
    const element = $(this);

    if (element.hasClass("icon_lottie-element")) {
      const lottieElement = element.find(".icon_lottie");
      const lottiePath = lottieElement.attr("data-lottie-path");

      const lottieInstance = scope.lottie({
        container: lottieElement[0],
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: lottiePath
      });

      lottieInstance.goToAndStop(0, true);
      tl.add(() => {
        if (!lottieInstance.isPlaying) {
          playLottieLoop();
        }
      }, "<");

      function playLottieLoop() {
        lottieInstance.setDirection(1);
        lottieInstance.play();

        lottieInstance.removeEventListener("complete", toggleDirection);
        lottieInstance.addEventListener("complete", toggleDirection);
      }

      function toggleDirection() {
        lottieInstance.setDirection(lottieInstance.playDirection === 1 ? -1 : 1);
        lottieInstance.play();
      }
    }
  });
});

// Work Section Home Scrolls in View
$('.h-work_section .w').each(function () {
  const gridContainer = $(this);
  const gridElements = gridContainer.find('.h-work_head [data-lottie-text]');
  const lottieElements = gridContainer.find(
    '.icon_lottie-element .icon_lottie');

  scope.split(gridElements, { types: 'words', tagName: 'span' });

  let gridTl = gsap.timeline({
    scrollTrigger: {
      trigger: gridContainer,
      start: 'top 85%',
      markers: false,
    },
  });

  gridTl
    .from(gridContainer.find('.word, .icon_lottie-element'), {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
      duration: 0.8,
      ease: 'power4.out',
      stagger: { each: 0.04 },
    })
    .from(gridContainer.find('.h-work_subtitle'), {
      opacity: 0,
      y: "100%",
      duration: 1,
      ease: 'power4.out'
    }, 0.25)
    .from(".h-work_section .h-work_link", {
      x: 300,
      filter: "blur(8px)",
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.1,
      clearProps: "opacity"
    }, 0.4);

  // Lottie Animation with Infinite Looping for each lottieElement
  lottieElements.each(function () {
    const currentElement = $(this);
    const lottiePath = currentElement.attr('data-lottie-path');

    const lottieInstance = scope.lottie({
      container: currentElement[0],
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

    function playLottieLoop(instance) {
      instance.setDirection(1);
      instance.play();

      instance.removeEventListener('complete', toggleDirection);
      instance.addEventListener('complete', toggleDirection);
    }

    function toggleDirection() {
      lottieInstance.setDirection(lottieInstance.playDirection === 1 ? -1 : 1);
      lottieInstance.play();
    }
  });
});


}
