if (document.getElementById("talk")) {
  document.getElementById("talk").onclick = function () {
    Swal.fire({
      title: "Aprovação enviada",
      icon: "info",
      html:
        "Foi enviada uma solicitação de aprovação de contato para o moderador de João Carlos.<br>" +
        "<b>Você será notificado assim que for aprovado</b>",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Legal !',
    });
  };
}

window.onload = () => {
  if (document.querySelector("#profile-page")) {
    Swal.fire({
      title: "Solicitação Aprovada",
      icon: "success",
      html: "A sua solictação para Maria Antonieta foi aprovada!",
      showCloseButton: true,
      showCancelButton: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Legal !',
    });
  }
};
