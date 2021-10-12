function About() {
  return (
    <div className="about">
      <h3>About Outbox EDU</h3>
      <p>
        Outbox EDU leverages boot camps to train individuals with limited or no
        experience in software development. <br />
        Learn how to code by leveraging our experienced industry facilitators,
        alumni community and partners.
      </p>

      <p>
        Join one of our two-month or three-month immersive programs and get
        ready to work. <br /> Get an opportunity to work on industry projects,
        learn from experience so as to develop your skills and portfolio. <br />{" "}
        Receive expert advise on how to prepare for the marketplace which ranges
        from creating your online profile to how-to communicate well.
      </p>

      <a
        className=" btn btn-warning btn-rounded px-4"
        href="https://docs.google.com/forms/d/188bTILVRxK4gcd-tJqKd9jNtmq3X0CvHB6U-MSY9d54/edit"
        style={{ backgroundColor: "#0072A1", color: "white" }}
      >
        Enroll now
      </a>
    </div>
  );
}

export default About;
