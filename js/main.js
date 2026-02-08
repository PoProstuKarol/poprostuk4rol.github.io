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

const quotes = [
  "Książek próbował naładować kanapkę przez microUSB, bo była 'trochę martwa'.",
  "Książek gotował parówki w lesie, bo kuchnia go stresowała.",
  "Książek sprawdził czy kamień jest jadalny. Był. Dla niego.",
  "Książek ładuje gumy do żucia co noc, żeby były naładowane emocjonalnie.",
  "Książek kiedyś zapomniał wyłączyć eksperyment i sam został eksperymentem.",
  "Książek uważa, że microUSB ma uczucia i trzeba go obracać delikatnie.",
  "Książek gotował parówki na powerbanku.",
  "Książek zapisał ważne notatki na parówce i ją zjadł.",
  "Książek sprawdza temperaturę kamieni językiem.",
  "Książek raz próbował zainstalować aktualizację na krzaku.",
  "Książek zgubił kabel i próbował ładować rzeczy spojrzeniem.",
  "Książek wierzy, że wszystkie parówki są tymczasowe.",
  "Książek wrzucił kamień do czajnika, żeby sprawdzić czy zaparzy się herbata.",
  "Książek nie wie co robi, ale robi to profesjonalnie.",
  "Książek podłączył microUSB do ziemi, żeby naładować planetę.",
  "Książek gotował parówki w termosie przez 3 dni dla głębi smaku.",
  "Książek nazwał swój kabel 'Spenser' i z nim rozmawia.",
  "Książek próbował przesunąć kamień gestem jak na telefonie.",
  "Książek uznał patyk za technologię przyszłości.",
  "Książek robi backup parówek w kieszeni.",
  "Książek próbował zrobić hotspot z kamienia.",
  "Książek raz ładował liścia przez microUSB i czekał na update.",
  "Książek włożył parówki do zamrażarki żeby je 'przyspieszyć'.",
  "Książek testuje jedzenie metodą: jak nie ucieka, to dobre.",
  "Książek próbował podłączyć kabel do siebie i czekał na synchronizację.",
  "Książek uważa, że każdy kamień to potencjalny przycisk.",
  "Książek zjadł instrukcję obsługi, żeby ją zapamiętać.",
  "Książek gotuje wodę bez ognia, tylko patrząc intensywnie.",
  "Książek ma 7 kabli, z których żaden nie działa, ale wszystkie są ważne.",
  "Książek zgubił parówki w kieszeni i odkrył je miesiąc później.",
  "Książek kiedyś ładował latarkę słońcem w nocy.",
  "Książek uznał kamień za offline'owy router.",
  "Książek miesza herbatę śrubokrętem dla precyzji.",
  "Książek próbował przesunąć chmurę palcem jak zdjęcie.",
  "Książek uważa, że parówki najlepiej smakują w trybie samolotowym.",
  "Książek ładuje powerbank drugim powerbankiem w nieskończoność.",
  "Książek zbudował ognisko z instrukcji do routera.",
  "Książek nie ufa kablom, które działają od razu.",
  "Książek mierzy czas gotowania parówek poziomem chaosu.",
  "Książek próbował podłączyć microUSB do banana.",
  "Książek uznał kartofla za nośnik danych.",
  "Książek kiedyś kliknął kamień i czekał aż się otworzy.",
  "Książek aktualizuje parówki do wersji 2.0 przez gotowanie.",
  "Książek sprawdza pogodę patrząc na kabel.",
  "Książek gotuje wodę w kubku po jogurcie, bo był pod ręką.",
  "Książek ładuje wszystko oprócz telefonu.",
  "Książek raz próbował sparować się z lodówką.",
  "Książek testuje rzeczy metodą 'a co się stanie'.",
  "Książek trzyma kamień na czarną godzinę i nie wie po co.",
  "Książek uważa, że jeśli coś ma kabel, to jest ważne."
];

function nextQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = q;
}
