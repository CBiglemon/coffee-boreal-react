import headerLogo from 'src/assets/images/header-logo.png';

import './style.scss';

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__nav__list">
          <img className="header__nav__list__img" alt="logo de Boréal Cofee Shop" src={headerLogo} />
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
