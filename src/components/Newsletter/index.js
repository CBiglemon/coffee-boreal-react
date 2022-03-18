import './style.scss';

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter__block">
        <span className="newsletter__block__span">Newsletter Boréal</span>
        <h1 className="newsletter__block__title">S'inscrire à notre newsletter</h1>
        <form className="newsletter__block__form">
          <input className="newsletter__block__form__input" type="text" placeholder="name@email.com" />
          <button className="newsletter__block__form__button" type="submit">souscrire</button>
        </form>
      </div>
    </div>
  );
}
