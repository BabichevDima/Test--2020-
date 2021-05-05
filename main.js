const sliderInit = (classes) => {
  let position = 0;

  const slidesToShow = classes.properties.slidesToShow;
  const slidesToScroll = 1;
  const container = document.querySelector(classes.element.container);
  const track = document.querySelector(classes.element.track);
  const btnPrev = document.querySelector(classes.element.btnPrev);
  const btnNext = document.querySelector(classes.element.btnNext);
  const items = document.querySelectorAll(classes.element.items);
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const sliderWidth = slidesToShow * itemWidth;
  const containerWidth = itemWidth * itemsCount - sliderWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log(itemsLeft);
    console.log(`position start ${position}`);
    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    console.log(`position ${position}`);
    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();

  const fader = document.getElementById("slider__fader");
  fader.setAttribute("max", containerWidth);
  fader.addEventListener("change", () => {
    console.log(fader.value);
    position = -fader.value;
    setPosition();
    checkBtns();
  });
};

sliderInit({
  element: {
    container: ".slider__container",
    track: ".news__track",
    btnPrev: ".button-prev",
    btnNext: ".button-next",
    items: ".slider__item",
  },
  properties: {
    slidesToShow: 2,
  },
});

sliderInit({
  element: {
    container: ".slider__block",
    track: ".slider__track",
    btnPrev: ".btn-prev",
    btnNext: ".btn-next",
    items: ".slider__cell",
  },
  properties: {
    slidesToShow: 1,
  },
});

sliderInit({
  element: {
    container: ".review__block",
    track: ".review__track",
    btnPrev: ".review__btn_prev",
    btnNext: ".review__btn_next",
    items: ".review__cell",
  },
  properties: {
    slidesToShow: 2,
  },
});
