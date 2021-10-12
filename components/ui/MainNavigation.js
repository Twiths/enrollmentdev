
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/edu.png";
import { useAuth } from '../../context/Context'

const MainNavigation = () => {
  const { currentUser, signOut } = useAuth();
  
  async function handleClick() {
    alert("hello")
    await signOut();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container justify-content-between">
        <div className="d-flex">
          <Link className="navbar-brand" href="/" pass>
            <Image
              src={logo}
              alt="EDU Logo"
              height="40"
              width="40"
              loading="lazy"
              style={{ marginTop: "20px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="navbar-nav flex-row d-none d-md-flex">
          <li className="nav-item me-3 me-lg-1">
            <Link className="nav-link active" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <Link className="nav-link" href="#">
              About
            </Link>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <Link className="nav-link" href="#">
              Why Edu
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav flex-row">
        {!currentUser ? (
          <li className="nav-item me-3 me-lg-1">
            <Link className="nav-link btn btn-outline btn-rounded px-4" href="/log-in">
              Login
            </Link>
          </li>) : <li className="nav-item me-3 me-lg-1">
           
              <Link  className="nav-link btn btn-outline btn-rounded px-4" onClick={handleClick}>Logout</Link>
         
          </li>}
          <li className="nav-item me-3 me-lg-1">
            <Link
              className="nav-link nav-button btn mt-3 ml-lg-4 mt-lg-0n h-btn px-4 text-white"
              href="https://docs.google.com/forms/d/188bTILVRxK4gcd-tJqKd9jNtmq3X0CvHB6U-MSY9d54/edit"
              style={{ backgroundColor: "#0072A1", color: "white" }}
            >
              Enroll
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
