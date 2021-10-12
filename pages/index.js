// import Homepage from "./landingpage/Homepage"
import Head from "next/head";
import Link from "next/link"
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Program from "../components/Program";
import OutboxEvents from "../components/ui/OutboxEvents";
import DemoCarouse from "../components/ui/Carousel";
import EventsList from "../components/ui/SharedEvents/EventsList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Outbox EDU Enrollment</title>
        <meta name="description" content="Outbox enrollment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Program />
      <EventsList />
      <DemoCarouse />
      <section className="banner my-5 ml-0">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h2 className="mb-4 text-center">Break into the tech industry like a pro</h2>
          <Link href="/enrollment">Enroll Today</Link>
        </div>
      </section>
    </Layout>
  );
}
