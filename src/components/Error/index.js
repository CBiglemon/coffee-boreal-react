import { Link } from 'react-router-dom';

import './style.scss';

export default function Error() {
  return (
    <div className="error">
      <div className="error__block">
        <h1 className="error__block__code">404</h1>
        <span className="error__block__context">La page que vous avez demandé ne peux pas être trouvée.</span>
        <h2 className="error__block__text">Page non trouvée</h2>
        <Link to="/" className="error__block__link">Aller à la page d'accueil</Link>
      </div>
    </div>
  );
}
