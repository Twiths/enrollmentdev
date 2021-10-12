import Image from "next/image";
import logo from "../public/images/edu.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-2">
            <a className="navbar-brand" href="/">
              <Image src={logo} alt="brand logo" className="brand-logo" width="50" height="50"/>
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDropdown"
              aria-controls="NavbarDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRIiWNgGAXDHjDCGM+Ntf9T02DJs1cZGRgYGJioaegoGJxgNBWNAsrBaCoaBUMAAAA0PgwKKjWpawAAAABJRU5ErkJggg=="
                alt="dropdown menu"
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarDropdown">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a aria-current="page" className="nav-link ml-lg-3 pb-1 activeLink" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-button btn mt-3 ml-lg-4 mt-lg-0 h-btn px-4 text-white"
                    href="/enrollment"
                  >
                    Enroll
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
