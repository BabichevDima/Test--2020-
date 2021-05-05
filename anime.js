const callBackInit = () => {
  const phone = document.querySelector(".contact__phone");
  const phoneForm = document.querySelector(".phone__form");

  phone.addEventListener("mouseover", () => {
    phone.classList.add("visible");
  });

  phone.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "contact__text") {
      phoneForm.classList.add("visible");
      return;
    }
  });

  phoneForm.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "phone__exit") {
      phoneForm.classList.remove("visible");
      return;
    }
  });

  phone.addEventListener("mouseleave", () => {
    phone.classList.remove("visible");
  });
};

const about = document.querySelector(".about");
const mashine = document.querySelector("#mashine");

const animeMashine = anime({
  targets: mashine,
  innerHTML: ["0+", "180+"],
  easing: "linear",
  round: 1,
  duration: 1000,
  autoplay: false,
});

const ear = document.querySelector("#ear");

const animeEar = anime({
  targets: ear,
  innerHTML: ["0+", "10+"],
  easing: "linear",
  round: 1,
  duration: 1000,
  autoplay: false,
});

const client = document.querySelector("#client");

const animeClient = anime({
  targets: client,
  innerHTML: ["0+", "20+"],
  easing: "linear",
  round: 1,
  duration: 1000,
  autoplay: false,
});

about.addEventListener("mouseenter", () => {
  animeClient.restart();
  animeMashine.restart();
  animeEar.restart();
});

callBackInit();
