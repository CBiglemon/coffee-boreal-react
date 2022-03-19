import { useState } from 'react';

import './style.scss';

function Header() {
  const [navOpacity, setNavOpacity] = useState(false);
  console.log(window.scrollY)
  const changeNavOpacity = () => {
    if (window.scrollY >= 20) {
      setNavOpacity(true);
    }
    else {
      setNavOpacity(false);
    }
  };

  window.addEventListener('scroll', changeNavOpacity);

  return (
    <div className={navOpacity ? 'header header-active' : 'header'}>
      <nav className={navOpacity ? 'header__nav color-active' : 'header__nav'}>
        <div className="header__nav__list">
          <div className={navOpacity ? 'header__nav__list__img img-active' : 'header__nav__list__img'} />
          <a>Qui sommes-nous?</a>
          <a>Nos adresses</a>
          <a>Magasin</a>
          <a>Cofee catering</a>
          <a>Contact</a>
          <a>Panier</a>
          <a>Compte</a>
        </div>
      </nav>
    </div>
  );
}

// == Export
export default Header;
