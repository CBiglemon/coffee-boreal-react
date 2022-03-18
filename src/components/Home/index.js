import homeLogo from 'src/assets/images/home-hero.png';
import BlockContent from 'src/components/BlockContent';
import Newsletter from 'src/components/Newsletter';

import './style.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home__block">
        <img className="home__block__img" src={homeLogo} alt="catchphrase" />
        <div className="home__block__buttons">
          <a className="home__block__buttons__link">Découvrez Boreal</a>
          <a className="home__block__buttons__link">Faites-vous plaisir</a>
        </div>
      </div>
      <Newsletter />
      <BlockContent />
    </div>
  );
}
