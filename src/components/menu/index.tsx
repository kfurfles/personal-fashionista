import React from 'react';

import './menu-button.scss'

export const MenuButton = () => {
  return (
    <div className="menu-button">
        <input className="menu-button__input" type="checkbox" id="menu-button"/>
        <label className="menu-button__toggle" htmlFor="menu-button">
          <span></span>
        </label>
    </div>
  );
}
