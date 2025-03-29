import React from 'react';
import '../styles/LanguageDropdown.css';

function LanguageDropdown() {
  return (
    <div className="dropdown-container">
      <select className="language-dropdown">
        <option value="en">EN</option>
        <option value="ar">AR</option>
        <option value="fr">FR</option>
        <option value="zh">ZH</option>
      </select>
    </div>
  );
}

export default LanguageDropdown;
