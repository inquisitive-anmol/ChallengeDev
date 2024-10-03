gsap.to(".imageContainer", {
  ease: Expo.easeInOut,
  duration: 2,
  width: "100%",
  stagger: 2,
});

gsap.to(".text h1", {
    ease: Expo.easeInOut,
  stagger: 2,
  top: "0",
})

gsap.to(".text h1", {
  delay: 2,
  ease: Expo.easeInOut,
  stagger: 2,
  top: "-110%",
});
