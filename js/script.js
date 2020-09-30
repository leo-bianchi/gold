M.AutoInit();
document.addEventListener("DOMContentLoaded", () => {
  const contact = document.querySelector(".btn__contact") || "";
  const contact2 = document.querySelector(".btn__contact2") || "";
  const elem = document.querySelector(".carousel");

  (function callCarousel() {
    const options = {
      fullWidth: true,
      indicators: true,
    };
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
  if (contact2) {
    (function callInfoAlert() {
      contact2.onclick = () => {
        Swal.fire("Salvo!", "", "info");
      };
    })();
  }
});
