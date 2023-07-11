import { Link } from "react-router-dom";
import "../styles/error-page.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2 className="error-number">404</h2>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-to-home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
