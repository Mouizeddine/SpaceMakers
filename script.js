const btnHome = document.querySelector(".first");
// const btnBook = document.querySelector(".book");
const btnSpaceflights = document.querySelector(".second");
const btnAboutUs = document.querySelector(".third");
const btnFollow = document.querySelector(".fourth");

const section1 = document.querySelector("#home");
const section2 = document.querySelector("#section");
const section3 = document.querySelector("#about");
const section4 = document.querySelector("#follow");

// btnHome.addEventListener("click", function () {
//   console.log(34);
// });

btnSpaceflights.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
  //   section2.scrollIntoView({ behavior: "smooth" });
});

btnAboutUs.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  //   section3.scrollIntoView({ sbehavior: "smooth" });
});

console.log(23);

btnHome.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
  //   section1.scrollIntoView({ behavior: "smooth" });
});
