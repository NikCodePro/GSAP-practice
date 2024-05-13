gsap.to("#box", {
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: 'blue',
    rotate:360,
    borderRadius: "25%",
    yoyo:true,
    repeat:-1
})
gsap.from("h1", {
    opacity:0,
    color: "blue",
    duration:.5,
    delay:.3,
    y:-20,
    stagger:.2,
    yoyo:true,
    repeat:-1
})