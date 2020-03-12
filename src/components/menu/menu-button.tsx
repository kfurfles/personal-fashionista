import React from 'react';

export function MenuButton() {
  return (
    <div className="menu-button">
        <input className="menu-button__input" type="checkbox" id="menu-button"/>
        <label className="menu-button__toggle" htmlFor="menu-button"></label>
    </div>
  );
}
