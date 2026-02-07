document.addEventListener("DOMContentLoaded", () => {

  // ====== POKAZYWANIE KART ======
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("visible");
  });

  // ====== AKTYWNE MENU ======
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // ====== STRUKTURA OPERACYJNA ======
  const structureText = document.getElementById("structure-text");

  const texts = {
    ksiazek: "Książek eksperymentuje z materią nieorganiczną, traktując kamień jako nośnik percepcji i oporu.",
    magellan: "Magellan aktywuje się w stanie snu rdzenia. Gotowanie parówek w lesie pełni funkcję rytuału przejścia.",
    spenser: "Spenser to impuls cyfrowy – reaktywny, intensywny, funkcjonujący wyłącznie w komunikacji."
  };

  window.setMode = mode => {
    document.body.className = mode;
    if (structureText) {
      structureText.style.opacity = 0;
      setTimeout(() => {
        structureText.textContent = texts[mode];
        structureText.style.opacity = 1;
      }, 300);
    }
  };

});
