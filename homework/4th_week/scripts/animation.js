gsap.from(".row-01",{
  x: 20000,
  opacity:0,
  duration:1.5,
  ease:"in",
});

gsap.from(".row-02",{
  x: -2000,
  opacity:0,
  duration:2,
  ease:"in",
});

gsap.from(".row-03",{
  x:20000,
  opacity:10,
  duration:1.5,
  ease:"in",
})

gsap.from(".colum-01",{
  y:2000,
  opacity:0,
  duration:1.5,
  ease:"in",
})

gsap.from(".colum-02",{
  y:-2000,
  opacity:0,
  duration:1.5,
  ease:"in",
})

gsap.from(".colum-03",{
  y:-20000,
  opacity:0,
  duration:2,
  ease:"in",
});

// 도형 시작
gsap.from(".pos-1",{
  rotation:180,
  opacity:0,
  duration:1.2,
  ease: "export.out",
  delay: 1.2,
});

const tl =gsap.timeline()

tl.from(".pos-8",{
  x:-200,
  y:100,
  opacity:0,
  duration:1,
  ease: "bounce.out",
  delay:1.2,
});
tl.from(".pos-2",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "expo.out",
  delay:1.2,
},'<');

gsap.from(".pos-3",{
  rotation:90,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-4",{
  scale:0,
  opacity:0,
  duration:3,
  ease: "expo.out",
  delay:1.5,
});
gsap.from(".pos-5",{
  scale:0,
  opacity:0,
  duration:4,
  ease: "expo.out",
  delay:1.5,
});
gsap.from(".pos-6",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-7",{
  rotation:-90,
  opacity:0,
  duration:1,
  delay:2.3,
});

gsap.from(".pos-9",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-10",{
  rotation:90,
  opacity:0,
  duration:1,
  delay:2.3,
});
gsap.from(".pos-11",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-12",{
  y: 0,
    opacity: 0.0,
    rotation: -180,
    duration: 1,
    delay: 2.45,
});
gsap.from(".pos-13",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-14",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-15",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-16",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
gsap.from(".pos-17",{
  scale:0,
  opacity:0,
  duration:1,
  ease: "export.out",
  delay:1.2,
});
