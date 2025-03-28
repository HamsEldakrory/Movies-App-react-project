import React from 'react';

function LanguageDropdown() {
  return (
    <select
      className="me-2 bg-dark "
      style={{ color: 'white', borderRadius: '4px', padding: '5px' }}
    >
      <option value="en">EN</option>
      <option value="es">AR</option>
      <option value="fr">FR</option>
      <option value="zh">ZH</option>
    </select>
  );
}

export default LanguageDropdown;
