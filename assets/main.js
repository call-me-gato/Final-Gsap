document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText,TextPlugin,CustomEase,RoughEase)

// Initialize Lenis
  // ease function
  function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
  }
const lenis = new Lenis({
  duration: 3,
  ease: easeOutSine,
  anchors: true,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

  // Rain//

function createRainEffect(dropletQuantity = 50) {
  for (let i = dropletQuantity - 1; i >= 0; i--) {
    let pos = Math.floor(Math.random() * 100); // Random position across 0% to 100%
    let delay = Math.random();
    let speed = (Math.random() * 2) + 0.2;

    let droplet = document.createElement("div");
    droplet.className = "droplet";
    droplet.style.left = pos + "%";

    // Add buffer to window.innerHeight
    gsap.to(droplet, speed, { y: window.innerHeight + 50, delay: delay, repeat: -1, ease: Linear.easeNone });

    document.getElementById('rain-container').appendChild(droplet);
  }
}

createRainEffect();

//Hero text animation//

const HeroTextLines = document.querySelectorAll("h1");
const HeroSubtext = document.querySelector(".hero-subtext");
  
const splitLines = new SplitText(HeroTextLines, {
    type: "lines"
})

CustomEase.create("custom", "M0,0 C0.031,0.362 0.132,0.78 0.4,0.9 0.623,1 0.85,1 1,1 ");
  
gsap.set(HeroSubtext, {
  xPercent: 100,
});
  const heroTimeline = gsap.timeline();

  heroTimeline
    .from(splitLines.lines, {
      delay: 0.5,
      yPercent: 110,
      duration: 1,
      stagger: 0.3,
      ease: "custom",
    }).fromTo(HeroSubtext, {
      xPercent: -100,
    }, {
      duration: 1,
      xPercent: 0,
      ease: "custom",
    }, "-=1"); 



//Characters Section Animation//

const CharactersTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    start: "bottom bottom",
    toggleActions: "play none reverse none",
    pin: true,
    //end: "bottom top",
    // ejemplo de valor:﻿﻿
      end: "5000px", 
      scrub: true,
    }
  });

CharactersTl.from('.gallery-item-1 h2', {   
      autoAlpha: 0,
      y: -50,
      ease: 'custom',
    }, '<').from(".gallery-item-1 .subtext", {   
      autoAlpha: 0,
      y: -50,
      ease: 'custom',
    }, '<50%').from(".gallery-item-1 .quote-bubble", {
      autoAlpha: 0,
      duration: 1,
      rotate: 30,
      transformOrigin: "0% 0%",
      ease: 'custom',
    }).to('.gallery-inner', {
      delay: 0.5,
      duration: 1,
      x: "-100%",
      ease: "custom",
    }).from('.gallery-item-2 h2', {
      autoAlpha: 0,
      y: -50,
      ease: 'custom',
    }).from(".gallery-item-2 .subtext", {   
      autoAlpha: 0,
      y: -50,
      ease: 'custom',
    },'<50%').from(".gallery-item-2 .quote-bubble", {
      autoAlpha: 0,
      duration: 1,
      rotate: 30,
      transformOrigin: "0% 0%",
      ease: 'custom',
    }, '<50%').eventCallback("onStart", () => {
      fadeImagesMarv();
    }).eventCallback("onComplete", () => {
      fadeImagesNancy()
    });


//Animacion Character images

function fadeImagesMarv() {
    const images = document.querySelectorAll('.character-container .marv');
    let activeIndex = 0;

    const currentImage = images[activeIndex];
    const nextIndex = (activeIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    const fadeTimeline = gsap.timeline();

    fadeTimeline
      .to(currentImage, { 
        opacity: 0, duration: 1, ease:"rough({ strength: 2, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
      }).to(nextImage, { 
        opacity: 1, duration: 1, ease:"rough({ strength: 2, points: 20, template: none.out, taper: none, randomize: true, clamp: false })", 
      },'<50%');   

    activeIndex = nextIndex; // Update the active index
  }
  function fadeImagesNancy() {
    const images = document.querySelectorAll('.character-container .nancy');
    let activeIndex = 0;

    const currentImage = images[activeIndex];
    const nextIndex = (activeIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    const fadeTimeline = gsap.timeline();

    fadeTimeline
      .to(currentImage, { 
        opacity: 0, duration: 1, ease:"rough({ strength: 2, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
      }).to(nextImage, { 
        opacity: 1, duration: 1, ease:"rough({ strength: 2, points: 20, template: none.out, taper: none, randomize: true, clamp: false })", 
      },'<50%');   

    activeIndex = nextIndex; // Update the active index
  }


  //Animacion section 3

const bloodText = document.querySelectorAll(".blood-text");
const bloodText1 = bloodText[0];
const bloodText2 = bloodText[1];
const bloodText3 = bloodText[2];

const bloodTextTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "top top",
    pin: true,
  }
});

bloodTextTl.to(bloodText2 , {
  backgroundPosition: '0 0vh',
  duration: 3,
  ease: "power1.out",
}).to(bloodText1 , {
  duration: 1.5,
  color: 'var(--color-secondary)',
  ease: "power1.out",
},'<20%').to(bloodText3, {
  duration: 1.5,
  color: 'var(--color-secondary)',
  ease: "power1.out",
},'<40%');

//Animacion section 4

const justiceText = document.querySelectorAll(".justice-text");
const justiceText1 = justiceText[0];
const justiceText2 = justiceText[1];
const justiceText3 = justiceText[2];

const justiceTextTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    start: "top top",
    pin: true,
  }
});


justiceTextTl.from(justiceText1, { 
    duration: 0.5,
    x: '100%',
    autoAlpha: 0, 
    color: 'var(--color-tertiary)',
    ease: "custom",
  }).from(justiceText2, {
    duration: 0.2,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    scale:3,
    autoAlpha: 0, 
    color: 'var(--color-tertiary)',
  },'<').from(justiceText3, { 
    duration: 0.5,
    x: '-100%',
    autoAlpha: 0, 
    color: 'var(--color-tertiary)',
    ease: "custom",
  },'<')

//Animacion section 5
gsap.to('#section5', {
  scrollTrigger: {
    trigger: "#section5",
    start: "top top",
    pin: true,
  },
});

const buttonTrailer = document.querySelector(".cta");
const section5 = document.querySelector("#section5");

section5.addEventListener('mousemove', (e) => {
 const rect = buttonTrailer.getBoundingClientRect();

 const x = e.clientX - rect.left - rect.width / 2;
 const y = e.clientY - rect.top -rect.height / 2;

  gsap.to(buttonTrailer, {
    x: x * 0.1,
    y: y * 0.1,
    duration: 1,
    ease: "power1.out",  
  });
});
buttonTrailer.addEventListener('mouseenter', (e) => {
   gsap.to(buttonTrailer, {
    scale: 1.3,
    ease: "power1.out",  
   });
 });
buttonTrailer.addEventListener('mouseleave', () => {
   gsap.to(buttonTrailer, {
    scale: 1,  
    ease: "power1.out", 
   });
 });

});