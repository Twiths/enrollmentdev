import styles from "../styles/Footer.module.css";
import Link from 'next/link'
import Image from 'next/image'
// import Logo from "../assets/logo.png";
import { FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const links = [
    { name: "Enrollment", path: "/" },
    { name: "Linkages", path: "/linkages" },
    { name: "What We Do", path: "/works" },
    { name: "Events", path: "/events" },
    { name: "Learning", path: "/learning" },
  ];
  return (
    <footer className={`${styles.footerblue} text-center text-white`}>
      <div className="container p-4">
        <section className="mb-4">
          <h3 className={styles.headers}>Join the community</h3>
        </section>
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-light mb-4 mx-4"
                >
                  Receive News
                </button>
                <button type="button" className={`${styles.joinbutton} btn btn-light mb-4`}>
                  Join Here
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="mb-4"></section>
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className={`${styles.headers} text-uppercase`}>Navigation</h5>

              <ul className="list-unstyled mb-0">
                {links.map((url, idx) => (
                  <li className="mb-2" key={idx}>
                    <a
                      className={`${styles.footerlink}`}
                      href={url.path}
                    >
                      {url.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className={`${styles.headers} text-uppercase`}>What we do</h5>

              <ul className="list-unstyled mb-0"></ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className={`${styles.headers} text-uppercase`}>Legal</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className={`${styles.footerlink}`}>
                    General Info
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${styles.footerlink} `}>
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${styles.footerlink}`}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className={`${styles.headers} text-uppercase`}>Talk to us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a mailto="#!" className={`${styles.footerlink}`}>
                    support@outbox.co.ug
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${styles.footerlink}`}>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${styles.footerlink}`}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${styles.footerlink}`}>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="row d-flex align-items-center justify-content-evenly">
        <div className="col-auto">
          <Image src="/images/edu.png" alt="outbox edu logo" width="60px" height="60px"/>
        </div>
        <div className="col-md-5 col-12 text-center p-3" style={{color:"rgba(255, 255, 255, 0.8)"}}>
          &copy; {new Date().getFullYear()} OutBox EDU. All Rights Reserved
        </div>
        <div className={`${styles.socialicons} col-auto`}>
          <FaFacebookF size="2em" strokeWidth="1"  />
          <FaGithub size="2em" strokeWidth="1" />
          <FaLinkedinIn size="2em" strokeWidth="1"/>
          <FaTwitter size="2em" strokeWidth="1" />
          <FaInstagram size="2em" strokeWidth="1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;