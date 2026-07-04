document.documentElement.classList.add("js-ready");

/* Smooth scrolling for internal anchors */
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* Highlight the current lesson TOC item while reading */
(function () {
  const tocLinks = Array.from(document.querySelectorAll(".lesson-toc a[href^='#']"));

  if (!tocLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sectionById = new Map();

  for (const link of tocLinks) {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    if (section) {
      sectionById.set(id, { link, section });
    }
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    const id = visible.target.id;

    for (const { link } of sectionById.values()) {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    }
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0.05, 0.2, 0.5]
  });

  for (const { section } of sectionById.values()) {
    observer.observe(section);
  }
})();

/* Send stable iframe height to the parent WordPress page */
(function () {
  const PARENT_ORIGIN = "https://melamedy.com";
  const MIN_HEIGHT = 700;
  const MAX_HEIGHT = 30000;

  let lastSentHeight = 0;
  let scheduled = false;

  function getRealContentHeight() {
    const main =
      document.querySelector("main") ||
      document.querySelector(".lesson-page") ||
      document.querySelector(".course-page") ||
      document.body;

    let maxBottom = 0;

    function measureElement(el) {
      if (!el) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const bottom = rect.bottom + window.scrollY;

      if (bottom > maxBottom) {
        maxBottom = bottom;
      }
    }

    measureElement(main);

    for (const child of document.body.children) {
      measureElement(child);
    }

    const finalHeight = Math.ceil(maxBottom + 40);

    return Math.min(
      MAX_HEIGHT,
      Math.max(MIN_HEIGHT, finalHeight)
    );
  }

  function sendHeight() {
    scheduled = false;

    const height = getRealContentHeight();

    /*
      Prevent endless growth loops:
      if the height changed only slightly, do not send another update.
    */
    if (Math.abs(height - lastSentHeight) < 20) {
      return;
    }

    lastSentHeight = height;

    window.parent.postMessage(
      {
        type: "ym-course-height",
        height: height
      },
      PARENT_ORIGIN
    );
  }

  function scheduleHeightUpdate() {
    if (scheduled) {
      return;
    }

    scheduled = true;
    window.requestAnimationFrame(sendHeight);
  }

  window.addEventListener("load", scheduleHeightUpdate);
  window.addEventListener("resize", scheduleHeightUpdate);
  document.addEventListener("DOMContentLoaded", scheduleHeightUpdate);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleHeightUpdate);
    observer.observe(document.body);
  }

  setTimeout(scheduleHeightUpdate, 300);
  setTimeout(scheduleHeightUpdate, 1000);
  setTimeout(scheduleHeightUpdate, 2000);
})();
