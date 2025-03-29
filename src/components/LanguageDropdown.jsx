import React from 'react';
import useLanguage from '../hooks/useLanguage';
import '../styles/LanguageDropdown.css';

function LanguageDropdown() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="dropdown-container">
      <select
        className="language-dropdown"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
        <option value="fr">FR</option>
        <option value="zh">ZH</option>
      </select>
    </div>
  );
}

export default LanguageDropdown;
