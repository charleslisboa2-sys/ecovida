document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const contrastBtn = document.querySelector("#contrastBtn");
  const darkBtn = document.querySelector("#darkBtn");

  // Alternar alto contraste
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      body.classList.toggle("alto-contraste");
    });
  }

  // Alternar modo escuro
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      body.classList.toggle("modo-escuro");
    });
  }
});
