gsap.to("#page2 h1", {
    transform: "translateX(-125%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        scrub: 5,
        markers: true,
        pin: true,
    }
})