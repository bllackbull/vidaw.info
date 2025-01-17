const languageToggle = document.getElementById("language-toggle");
const englishContent = document.querySelector(".content.en");
const farsiContent = document.querySelector(".content.fa");

// Function to apply the language mode
function applyLanguage(isEnglish) {
  if (isEnglish) {
    englishContent.style.display = "block";
    farsiContent.style.display = "none";
    languageToggle.textContent = "FA";
    languageToggle.setAttribute("title", "Switch to Farsi");
  } else {
    englishContent.style.display = "none";
    farsiContent.style.display = "block";
    languageToggle.textContent = "EN";
    languageToggle.setAttribute("title", "Switch to English");
  }
}

let isEnglish = localStorage.getItem("language") !== "fa";
applyLanguage(isEnglish);

languageToggle.addEventListener("click", () => {
  isEnglish = !isEnglish;
  localStorage.setItem("language", isEnglish ? "en" : "fa");
  applyLanguage(isEnglish);
});
