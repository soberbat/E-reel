


gsap.registerPlugin(ScrollTrigger);

gsap.to(".main-wrapper", {
    backgroundColor: "#0f1c33",
    scrub: true,
    duration: .3,
    scrollTrigger: {
        start: "300 200",

        toggleActions: 'play none none reverse',
    }

})

gsap.to(".faq", {
    color: "white",
    scrub: true,
    duration: .3,

    scrollTrigger: {
        start: "300 200",

        toggleActions: 'play none none reverse',

    }

})

gsap.to(".question", {
    color: "white",
    scrub: true,
    duration: .3,
    scrollTrigger: {
        start: "300 200",

        toggleActions: 'play none none reverse',

    }

})

gsap.to(".question", {
    color: "white",
    scrub: true,
    duration: .3,
    scrollTrigger: {
        start: "300 200",

        toggleActions: 'play none none reverse',

    }

})









//Added anmations to questions

const question = document.querySelectorAll(".question")
let targets = gsap.utils.toArray(".question");

targets.forEach((target) => {
    gsap.from(target, {
        scrollTrigger: {
            start: "center 600",

            trigger: target,

        },
        opacity: 0,
    })
})

///Added eventlisteners to questions to toggle active class of answerbox

question.forEach(questionBox => {
    questionBox.addEventListener("click", (e) => {
        questionBox.nextElementSibling.classList.toggle("active")
        let answer = questionBox.nextElementSibling
        gsap.from(answer, {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "elastic.out(1, 0.3)"
        })



    })
})


