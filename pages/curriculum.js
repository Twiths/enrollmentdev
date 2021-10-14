import { useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Frontend from "../components/Frontend";
import Backend from "../components/Backend";
import Design from "../components/Design";
import SideAcordion from "../components/SideAcordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { frontend } from "../utils/curriculum";

const Curriculum = () => {
  const [scope, setScope] = useState("html");
  return (
    <>
      <Head>
        <title>Our curriculum | Outbox EDU </title>
      </Head>
      <Navigation />
      <section className="curriculumTopHeading">
        <div className="text-center heading-title">
          <p className="d-block  curriculumHeading1">PROGRAM CURRICULUM</p>
          <p className="d-block curriculumHeading2">
            Gain enough knowledge to help you get <br /> started in the tech industry
          </p>
        </div>
      </section>
      <section className="container curriculumContainer  d-none d-md-block d-sm-block">
        <div className="row">
          <div className="col-md-12 col-12 justify-content-end c-pr-6 d-flex mt-4">
            <span className="pr-3 c-date pt-2">{/* <DateTime /> */}</span>
          </div>
        </div>
      </section>

      {/* {First Section}  */}
      <div className="container curriculumContainer mb-5">
        <div className="row mx-auto" id="myAccordion">
          <SideAcordion setScope={setScope} />
          <div className="col-lg-9 col-12 mb-5">
            <div className=" c-home32-cont tab-content mt-2">
              <h3 className="text-center c-track-title mt-4">View Curriculums By Tracks</h3>
              <p className="c-track-text text-center my-3">
                These are some of the topics that will be taught during the program. Note that this is
                not an exhaustive list.
              </p>
            </div>
            <Tabs className="mt-4">
              <Tab eventKey="html" title="HTML">
                {frontend["html"].map((data, idx) => (
                  <div className="c-home32-cont" key={idx}>
                    <p className="c-course-title mb-0">
                      {idx + 1}. {data.title}
                    </p>
                  </div>
                ))}
              </Tab>
              <Tab eventKey="css" title="CSS">
              {frontend["css"].map((data, idx) => (
                  <div className="c-home32-cont" key={idx}>
                    <p className="c-course-title mb-0">
                      {idx + 1}. {data.title}
                    </p>
                  </div>
                ))}
              </Tab>
              <Tab eventKey="javascript" title="Javascript">
              {frontend["js"].map((data, idx) => (
                  <div className="c-home32-cont" key={idx}>
                    <p className="c-course-title mb-0">
                      {idx + 1}. {data.title}
                    </p>
                  </div>
                ))}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Curriculum;
