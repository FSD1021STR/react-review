import { useState } from "react";

const translations = {
  title: {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
  },
  subtitle: {
    es: "Bienvenido a mi pagina web",
    en: "Welcome to my web page",
    fr: "Bienvenue sur mon site web",
  },
};

const languages = [
  { flag: "🇪🇸", code: "es" },
  { flag: "🇬🇧", code: "en" },
  { flag: "🇫🇷", code: "fr" },
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  return (
    <div>
      <div>
        {languages.map((language) => {
          return (
            <button onClick={() => setSelectedLanguage(language.code)}>
              {language.flag}
            </button>
          );
        })}
      </div>
      <h1>{translations.title[selectedLanguage]}</h1>
      <p>{translations.subtitle[selectedLanguage]}</p>
    </div>
  );
}

export default App;
