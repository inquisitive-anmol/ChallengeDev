let active = 3;

let mncircles = document.querySelectorAll(".mncircle");
let sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active-1], {
    opacity: .5,

})
gsap.to(sec[active-1], {
    opacity: 1,

})


mncircles.forEach((val, idx) => {
    val.addEventListener("click", () => {
        gsap.to("#circle", {
            rotate: (3-(idx+1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })
        greout();
        gsap.to(val, {
            opacity: .5,
        })
        gsap.to(sec[idx], {
            opacity: 1,
        })
    })
})


function greout() {
    gsap.to(mncircles, {
        opacity: .08,
    })

    gsap.to(sec, {
        opacity: .4,
    })
}


gsap.to(
    "#circle",
    {
        rotate:0,
        ease: Expo.easeInOut,
        duration: 2
    }
)