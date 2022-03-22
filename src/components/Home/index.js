import { useParams } from 'react-router-dom';
import homeLogo from 'src/assets/images/home-hero.png';
import BlockContent from 'src/components/BlockContent';
import Newsletter from 'src/components/Newsletter';
import cardList from 'src/data';

import './style.scss';

export default function Home() {
  function findCard(list, searchedSlug) {
    const card = list.find((testedCard) => testedCard.slug === searchedSlug);
    return card;
  }

  const content = findCard(cardList, '/');
  console.log(content);
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
      {
        content.cards.map((card) => (
          <BlockContent
            key={card.id}
            id={card.id}
            image={card.image}
            imageHover={card.imageHover}
            subtitle={card.subtitle}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))
      }

    </div>
  );
}
