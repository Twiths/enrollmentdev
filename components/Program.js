import Link from "next/link"

const Program = () => {
    return (
      <section className="scope my-5">
        <div className="container">
          <h3 className="text-uppercase mt-2">Scope of the program</h3>
          <div
            className="
          d-flex
          justify-content-between
          flex-column flex-lg-row
          align-items-start align-items-lg-center
          mb-5
          pb-0 pb-xl-5
        "
          >
            <h2 className="mb-4 mb-lg-0">These are the tracks available in the Outbox Edu</h2>
            <Link href="/curriculum"> View Curriculum </Link>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-4 col-12">
              <div className="card-deck">
                <div className="card mb-4 scope__1 py-3 px-2">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Frontend Development</h4>
                    Level up
                    <hr className="mt-4" />
                    <p className="card-text">
                      <small className="text-muted">HTML | CSS | JavaScript | ReactJS | Next JS</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 col-12 mb-0 mb-xl-5">
              <div className="card-deck">
                <div className="card mb-4 scope__2 py-3 px-2">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Backend Development</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr className="mt-4" />
                    <p className="card-text">
                      <small className="text-muted">NodeJS </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 col-12">
              <div className="card-deck">
                <div className="card mb-4 scope__3 py-3 px-2">
                  <div className="card-body">
                    <h4 className="card-title mb-4">UI/UX Design</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr className="mt-4" />
                    <p className="card-text">
                      <small className="text-muted">Figma</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 col-12">
              <div className="card-deck">
                <div className="card mb-4 scope__4 py-3 px-2">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Fullstack Development</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr className="mt-4" />
                    <p className="card-text">
                      <small className="text-muted"> NodeJs | ReactJS | NextJs </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Program;
  