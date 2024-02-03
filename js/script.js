
const radioUa = document.getElementById("language-radio");
const radioEn = document.getElementById("language-radio-checked");
const contentElement = document.getElementById("content");

radioUa.addEventListener("change", changeLanguage);
radioEn.addEventListener("change", changeLanguage);

function changeLanguage() {
  if (radioUa.checked) {
    contentElement.innerHTML = "<p>Вміст сторінки на українській мові</p>";
  } else if (radioEn.checked) {
    contentElement.innerHTML = "<p>Page content in English</p>";
  }
}
