(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var galleryEl = document.getElementById("gallery-splide");
  if (galleryEl && typeof Splide !== "undefined") {
    var splide = new Splide(galleryEl, {
      type: reduceMotion ? "slide" : "loop",
      perPage: 1,
      gap: "1rem",
      padding: { left: "0.75rem", right: "0.75rem" },
      breakpoints: {
        600: { perPage: 2, padding: { left: "1rem", right: "1rem" } },
        900: { perPage: 3, padding: { left: "1rem", right: "1rem" } },
      },
      pagination: true,
      arrows: true,
      keyboard: "global",
      speed: reduceMotion ? 0 : 450,
      drag: true,
    });
    splide.mount();
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      if (target.getAttribute("tabindex") === null) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    });
  });

  if (reduceMotion) return;

  var sections = document.querySelectorAll(".section");
  sections.forEach(function (el) {
    el.classList.add("js-reveal");
  });

  if (!("IntersectionObserver" in window)) {
    sections.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  sections.forEach(function (el) {
    observer.observe(el);
  });
})();
