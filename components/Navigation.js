import Image from "next/image";
import Link from "next/link"
import logo from "../public/images/edu.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-2">
            <Link className="navbar-brand" href="/" passHref>
              <Image src={logo} alt="brand logo" className="brand-logo" width="50" height="50"/>
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDropdown"
              aria-controls="NavbarDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRIiWNgGAXDHjDCGM+Ntf9T02DJs1cZGRgYGJioaegoGJxgNBWNAsrBaCoaBUMAAAA0PgwKKjWpawAAAABJRU5ErkJggg=="
                alt="dropdown menu"
                layout="fill"
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarDropdown">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <div className="nav-link ml-lg-3 pb-1 activeLink">
                  <Link aria-current="page" href="/" style={{ textDecoration: 'none'}}>
                    Home
                  </Link>
                  </div>
                </li>
                <li className="nav-item">
                <div className="nav-link nav-button btn mt-3 ml-lg-4 mt-lg-0 h-btn px-4 text-white">
                  <Link href="/enrollment" style={{ textDecoration: 'none'}} >
                    Enroll
                  </Link>
                  </div>
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
