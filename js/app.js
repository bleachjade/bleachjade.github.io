const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const headline_content = document.querySelector(".headline-content");

const tl = new TimelineMax();

function IMGcontainer(x) {
  if (x.matches) { // If media query matches
    tl.fromTo(container,
      1,
      { width: "50%" },
      { width: "100%", ease: Power2.easeInOut },
      { height: "60%" },
      { height: "80%", ease: Power2.easeInOut });
  } else {
   tl.fromTo(container,
    1.5,
    { width: "70%" },
    { width: "50%", ease: Power2.easeInOut });
  }
};
var x = window.matchMedia("(max-width: 600px)")
IMGcontainer(x) // Call listener function at run time
x.addListener(IMGcontainer)

tl.fromTo(container, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  // .fromTo(container,
  //     1.5,
  //     { width: "70%" },
  //     { width: "50%", ease: Power2.easeInOut })
  .fromTo(
    slider,
    1.5,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(headline_content, 0.5, { opacity: 0, x: -100}, { opacity: 1, x: 0}, "-=0.5");

  //pages navigation test//
  new fullpage('#fullpage', {
    //options here
      autoScrolling:true,
      sectionsColor: ['black', 'green', 'black', 'white', 'black'],
      navigation: true,
      onLeave: (origin,destination,direction)=> {
          const section = destination.item;
          console.log(section);
          TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=1000');
      }
  });