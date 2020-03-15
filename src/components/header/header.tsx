import React from 'react';
import './header.scss'

import { MenuButton } from './../menu/menu-button'
import { Logo } from './../logo/logo'

export function Header() {
  return (
    <header className="header container">
      <div className="content">
        <MenuButton />


        <Logo className="header__logo"/>

        <button className="header__button is--search  icon-button">
          <i className="i-search"></i>
        </button>
        <button className="header__button is--bag  icon-button">
          <i className="i-shopping-bag"></i>
        </button>
      </div>
    </header>
  );
}
