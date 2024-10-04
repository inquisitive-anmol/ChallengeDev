let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    delay: .5,
    duration: .6,
    stagger: .2
})

tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: .2,
})

tl.from("img", {
    x: 100,
    rotate: 68,
    opacity: 0,
    duration: .7,
    stagger: .5,
})