import Image from 'next/image';
import Link from "next/link"
import AboutImage from '../assets/about_img.png';


const About = () => {
    return (
      <section className="about my-4 py-0 py-lg-5">
        <div className="container">
          <h3 className="text-uppercase mt-2">About Outbox Edu</h3>
          <h4 className="mb-lg-3 mb-0">
            Outbox EDU leverages boot camps to train individuals with limited or no experience in
            software development. Learn how to code by leveraging our experienced industry
            facilitators, alumni community and partners.
          </h4>
          <div className="row pt-5 pb-lg-5 pb-0">
            <div className="col-12 col-lg-6 d-flex align-items-end order-2 order-lg-1">
              <div>
                <h2 className="mb-4 mt-4 mt-lg-0">Who Should Apply</h2>
                <p className="pr-0 pr-lg-5">
                  Anybody can apply. Outbox Edu itself focuses on participants with willingness to learn
                  if you have no prior experience, we still encourage you to apply you will learn a lot
                  from the experience.
                  <br />
                  <br />
                  <ul>
                    <li>If you have prior coding or design skills / knowledge</li>
                    <li>If you are a professional looking to connect with others</li>
                    <li>If you are looking for a challenge</li>
                  </ul>
                  The program is a fun-filled experience that runs like a game, join us, and we
                  promise you will come out better, even if you are unable to complete the program.
                </p>
                <div className="about__link mt-1 mt-lg-5 btn">
                  <Link href="/enrollment" style={{ textDecoration: 'none'}}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mr-auto text-lg-left text-center order-1 order-lg-2">
              <Image src={AboutImage} className="img-fluid" alt="About outbox" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  