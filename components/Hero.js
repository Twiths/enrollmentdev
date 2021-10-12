import Image from "next/image";
import Link from "next/link"
import HeroImage from "../assets/outbox_hero_img.png";

const Hero = () => {
  return (
    <section className="hero my-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-6 my-2">
            <h1 className="pt-1 pt-xl-5 pb-4">Kick start your career in tech with Outbox Edu</h1>
            <p className="pb-3 txt-sm">
              Learn how to code by leveraging our experienced industry facilitators, alumni
              community and partners. Join one of our two-month or three-month immersive programs
              and get ready to work. Get an opportunity to work on industry projects, learn from
              experience so as to develop your skills and portfolio. Receive expert advise on how to
              prepare for the marketplace which ranges from creating your online profile to how-to
              communicate well.
            </p>
            <div className="my-5 my-xl-5">
              <Link href="/enrollment"> Enroll Now </Link>
            </div>
            <p>
              <br />
              <strong>In Partnership with:</strong> <br />
              <Image
                src="https://outbox.co.ug/themes/obx/assets/img/outbox.png"
                width="40%"
                alt="Ingressive for good logo"
                height="20px"
              />
            </p>
          </div>
          <div className="col-12 col-lg-5 ml-auto text-center">
            <Image src={HeroImage} className="img-fluid" alt="outbox class" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
