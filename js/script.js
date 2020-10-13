M.AutoInit();

const elem = document.querySelector(".carousel");
(function callCarousel() {
  const options = {
    fullWidth: true,
    indicators: true,
  };
  M.Carousel.init(elem, options);
})();
