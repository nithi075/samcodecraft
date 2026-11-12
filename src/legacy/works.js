/* eslint-disable */
// Converted from the inline <script> blocks of the Webflow export.
// `scope` (see ../lib/scope.js) tracks every listener / SplitType / Lottie / Swiper /
// matchMedia instance created here so PageShell can dispose them on route change.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
const $ = window.jQuery;
gsap.registerPlugin(ScrollTrigger);

export function initWorks(scope) {

// Hero Load
document.fonts.ready.then(() => {
  gsap.set("[data-hidden]", { visibility: "visible" });

  const mm = window.matchMedia("(min-width: 992px)");
  const tl = gsap.timeline();

  if (mm.matches) {
    const workItems = gsap.utils.toArray(".work_item").slice(0, -1); // Exclude last work_item

    // Desktop Animation
    tl.to(".work_item", {
        y: "0vh",
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.1,
      })

      .to(workItems, { // Apply margin animation only to all except last
        marginTop: "0em",
        marginBottom: "16em",
        duration: 1.4,
        ease: "expo.inOut",
        stagger: 0.05,
      }, 1.1)

      .from(".filter_form-block", {
        y: "20vw",
        duration: 1.2,
        ease: "expo.out",
      }, 1.8)

      .from(".menu_logo-link", {
        x: "-50vw",
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.4)

      .call(() => {
        WorkScroll();
      }, null, 1.8)

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
      }, 1.4);

    tl.set(".works-list_section", { cursor: "auto" }, 1.6)
      .set(".work_link-ab", { display: "block" }, 1.6);

    tl.eventCallback("onComplete", () => {
      ScrollTrigger.refresh();
    });

  } else {
    // Mobile/Tablet Animation

    const mobtitleSplit = scope.split("[mobile-heading]", { types: "words, lines" });

    tl.from(".works-list_filters-c", {
        y: "120",
        duration: 1,
        ease: "expo.out",
      }, 1)

      .from(".work_item:first-of-type .tag-xs", {
        y: "100%",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1
      }, 0.7)

      .from(mobtitleSplit.words, {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1
      }, 0)

      .from(".works_hero-mob-w .icon_embed16", {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      }, 0.2)

      .from(".work_item:first-of-type .work_item-title", {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: "expo.out"
      }, 1.1)

      .from(".work_item:first-of-type .work_btn-mob", {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: "expo.out"
      }, 1.1)

      .from(".work_item:first-of-type .h-work_asset", {
        y: "10vh",
        scale: 0.8,
        opacity: 0,
        stagger: {
          each: 0.05,
          from: "end"
        },
        duration: 1.2,
        ease: "expo.out"
      }, 0.5)

      .from(".menu_logo-link", {
        scale: 1.2,
        x: "-50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.2)

      .from(".menu_main-inner", {
        scale: 1.2,
        x: "50vw",
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      }, 1.2)
  }

});

// Work Item in View
function WorkScroll() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const descSplit = scope.split(
      ".work_desc-w .txt-align-center", { types: "lines" }
    );

    $('.work_item').each(function () {
      let $this = $(this);

      ScrollTrigger.create({
        trigger: $this,
        start: "top 60%",
        end: "bottom center",
        onEnter: () => {
          $('.work_item').removeClass('active');
          $this.addClass('active');
        },
        onEnterBack: () => {
          $('.work_item').removeClass('active');
          $this.addClass('active');
        },
        markers: false
      });
    });
  }
}

const workLinks = document.querySelectorAll('.work_item');
const videoTimeouts = new Map();

workLinks.forEach(link => {
  const videos = link.querySelectorAll('.h-work_embed video');

  // Play immediately if already active on load
  if (link.classList.contains('active')) {
    videos.forEach(video => {
      video.play().catch(() => {});
    });
  }

  // Watch for class changes
  const observer = scope.observer(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const isActive = link.classList.contains('active');

        // Clear any previous timeout
        if (videoTimeouts.has(link)) {
          clearTimeout(videoTimeouts.get(link));
          videoTimeouts.delete(link);
        }

        if (isActive) {
          const timeout = setTimeout(() => {
            videos.forEach(video => video.play().catch(() => {}));
            videoTimeouts.delete(link);
          }, 200); // 200ms delay
          videoTimeouts.set(link, timeout);
        } else {
          videos.forEach(video => video.pause());
        }
      }
    });
  });

  observer.observe(link, { attributes: true });
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

// Add text + arrow toggle on hover
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

// Filters Radio Button
targets.forEach(target => {
  target.addEventListener("mouseenter", () => {
    currentTarget = target; // Set the current target
    let newText = target.getAttribute("data-cursor");

    // Update only if the text changes
    if (newText !== lastText) {
      cursorParagraph.innerHTML = newText;
      lastText = newText;
    }
  });
});


}
