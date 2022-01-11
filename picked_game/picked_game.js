gsap.registerPlugin(ScrollTrigger);

gsap.to(".text-section p span", {
  color: "#0f1c33",
  duration: 0.7,
  stagger: 0.1,
});

const photoContainer = document.querySelector(".photo-container div");

// const width = photoContainer.style.width;
// document.addEventListener("scroll", () => {
//   let intElemScrollTop = window.scrollY;
//   console.log(intElemScrollTop);
//   photoContainer.style.width = `${width + intElemScrollTop + 100} px `;
// });

// İMAGE CONTAİNER RESİZİNG THE İMAGE
gsap.to(".photo-container div", {
  width: "100%",

  scrollTrigger: {
    trigger: ".photo-container div",
    scrub: true,

    start: "-500 300",
    end: "-500",
  },
});

// SPECS ANİMATİON

gsap.from(".specs", {
  opacity: 0,
  x: 8,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".specs",

    start: "40 500",
  },
  ease: "Power4.out",
});

gsap.from(".icons-animation", {
  skewY: 3,
  y: 200,
  duration: 0.3,
  stagger: 0.2,
  ease: "slow",
  scrollTrigger: {
    trigger: ".icons-animation",

    start: "-200 600",
  },
});

gsap.from(".text-section-animation", {
  y: 500,
  opacity: 0,
  duration: 0.2,

  ease: "slow",
  scrollTrigger: {
    start: "-300 600",
    trigger: ".text-section-animation",
  },
});

gsap.from(".heading-blur", {
  filter: "blur(20px)",
  opacity: 0,
  duration: 2,
  ease: "slow",
  scrollTrigger: {
    start: "-300 600",
    trigger: ".heading-blur",
  },
});

const question = document.querySelectorAll(".question");
console.log(question);
question.forEach((questionBox) => {
  questionBox.addEventListener("click", (e) => {
    questionBox.nextElementSibling.classList.toggle("active");
    let answer = questionBox.nextElementSibling;
    console.log(answer);
    gsap.from(answer, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });
  });
});

let targets = gsap.utils.toArray(".question");

targets.forEach((target) => {
  gsap.from(target, {
    scrollTrigger: {
      start: "center 600",

      trigger: target,
    },
    opacity: 0,
  });
});
