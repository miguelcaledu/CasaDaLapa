import React, { useState } from "react";

const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // In a real application, this would change the language of the site
    console.log(`Language changed to ${language.name}`);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 bg-white rounded-md px-3 py-2 shadow-md hover:bg-gray-50 transition-colors"
        >
          <span>{selectedLanguage.code.toUpperCase()}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    selectedLanguage.code === language.code
                      ? "bg-[rgba(221,109,84,0.1)] text-[rgba(221,109,84,1)]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
