/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { style } from 'glamor';
import './style.scss';

export default function BlockLeft({
  id, image, imageHover, subtitle, title, text, link,
}) {
  const styles1 = {
    left__block__img: style({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center left',
      backgroundSize: 'cover',
      width: '50%',
      transition: '0.2s ease-out',
      ':hover': {
        backgroundImage: `url(${imageHover})`,
        transition: '0.2s ease-in',
      },
    }),
  };
  const styles2 = {
    left__block__reverse__img: style({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center left',
      backgroundSize: 'cover',
      width: '50%',
      transition: '0.2s ease-out',
      ':hover': {
        backgroundImage: `url(${imageHover})`,
        transition: '0.2s ease-in',
      },
    }),
  };

  const isEven = (cardId) => {
    if (cardId % 2 === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className={isEven(id) ? 'left__block__reverse' : 'left__block'}>
      <section className={isEven(id) ? styles2.left__block__reverse__img : styles1.left__block__img} />
      <section className="left__block__block">
        <span className="left__block__block__sub">{subtitle}</span>
        <a className="left__block__block__title">{title}</a>
        <div className="left__block__block__separator" />
        <p className="left__block__block__text">
          {text}
        </p>
        <a className="left__block__block__link">{link}</a>
      </section>
    </div>
  );
}

BlockLeft.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageHover: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
