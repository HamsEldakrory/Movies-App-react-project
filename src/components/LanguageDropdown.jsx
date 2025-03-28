import React from 'react';
import useLanguage from '../hooks/useLanguage';

function LanguageDropdown() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      className="me-2 bg-dark"
      style={{ color: 'white', borderRadius: '4px', padding: '5px' }}
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
      <option value="fr">FR</option>
      <option value="zh">ZH</option>
    </select>
  );
}

export default LanguageDropdown;
