document.addEventListener("DOMContentLoaded", () => {
  const contact = document.querySelector(".btn__contact") || "";
  M.AutoInit();

  (function callCarousel() {
    const options = {
      fullWidth: true,
      indicators: true,
    };
    const elem = document.querySelector(".carousel");
    M.Carousel.init(elem, options);
  })();

  if (contact) {
    (function callInfoAlert() {
      contact.onclick = () => {
        Swal.fire(
          "Ótimo!",
          "Sua solicitação foi enviada para um moderador.",
          "info"
        );
      };
    })();
  }
});
