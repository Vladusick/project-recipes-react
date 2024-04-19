import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s6">
            <Link to="/" className="brand-logo">
              Recipes
            </Link>
          </div>
          <div className="col s6" style={{ textAlign: "right" }}>
            <a
              href="https://github.com/Vladusick/project-recipes-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
