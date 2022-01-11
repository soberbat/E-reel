gsap.registerPlugin(ScrollTrigger);

// TEXT BOX

gsap.from(".start-text-box", {
  y: 10,
  duration: 1,
});

gsap.from(".navigation", {
  y: 10,
  duration: 1,
  opacity: 0,
});

gsap.to("body", {
  backgroundColor: "#0f1c33",

  duration: 0.3,
  scrollTrigger: {
    start: "400 200",

    toggleActions: "play none none reverse",
  },
});

gsap.from(".grid-group-first", {
  scrollTrigger: {
    trigger: ".grid-group-first",
    start: "top 700",
    scrub: false,
  },
  y: 200,
  opacity: 0,
  duration: 0.4,
});

gsap.from(".grid-group-second", {
  scrollTrigger: {
    trigger: ".grid-group-second",
    start: "top 800",
    scrub: false,
  },
  y: 200,
  opacity: 0,
  duration: 0.4,
});

gsap.from(".grid-group-third", {
  scrollTrigger: {
    trigger: ".grid-group-third",
    start: "center 1000",
    scrub: false,
  },
  y: 200,
  opacity: 0,
  duration: 0.4,
});

gsap.from(".text-section-text", {
  scrollTrigger: {
    trigger: ".text-section-text",
    start: "center center",
    scrub: false,
  },
  y: 200,
  opacity: 0,
  duration: 0.4,
  ease: "back",
});

gsap.from(".text-section-p1", {
  scrollTrigger: {
    trigger: ".text-section-p1",
    start: "top 700",
    scrub: false,
  },
  y: 100,
  opacity: 0,
  duration: 0.4,
});

gsap.from(".text-section-p2", {
  scrollTrigger: {
    trigger: ".text-section-p2",
    start: "top 700",
    scrub: false,
  },
  stagger: true,
  y: 100,
  opacity: 0,
  duration: 0.4,
});

gsap.from(".image-section-text", {
  scrollTrigger: {
    trigger: ".image-section-text",
  },
  y: 100,
  opacity: 0,
  stagger: 0.5,
});

gsap.from(".image-section-header", {
  scrollTrigger: {
    trigger: ".image-section-header",
  },
  y: 100,
  opacity: 0,
});

gsap.from(".slider-section-header", {
  x: -800,
  scrollTrigger: {
    trigger: ".slider-section-header",
    scrub: true,
    end: "2000",
  },
  ease: "back",
});

// SWİPER
