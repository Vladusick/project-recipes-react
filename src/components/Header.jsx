import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="deep-yellow darken-2">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s6">
            <Link to="/" className="brand-logo">
              Shop
            </Link>
          </div>
          <div className="col s6" style={{ textAlign: "right" }}>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
