let username;
console.log(username);

const translations = {
  uk: {
    home: "Головна",
    about: "Про нас",
    menu: "Меню",
    reservation: "Бронювання",
    paragraph:
      "Каву готують шляхом обсмажування зелених кавових зерен на гарячому вугіллі в жаровні. дали можливість взяти зразок.",
  },
  en: {
    home: "Home",
    about: "About",
    menu: "Menu",
    reservation: "Reservation",
    paragraph:
      "he coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.",
  },
};

let currentLanguage = "uk"; // Початкова мова

function switchLanguage(language) {
  currentLanguage = language;
  translateContent();
}

function translateContent() {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Викликаємо функцію для перекладу на початку
translateContent();
