import React from 'react';
import './header.scss'

import { MenuButton } from '../menu'
import { Logo } from '../logo'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <MenuButton />
          <Logo/>
          <button className="header__button is--search  icon-button">
            <i className="i-search"></i>
          </button>
          <button className="header__button is--bag  icon-button">
            <i className="i-shopping-bag"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
