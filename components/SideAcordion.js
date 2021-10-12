const SideAcordion = ({ setScope }) => {
  return (
    <div className="col-lg-3 mt-2 d-block mx-auto">
      <div className="accordion">
        {/* Frontend development */}
        <div className="card border-0 mb-3">
          <div
            className="c-card-header card-header tab-links"
            id="headingTwo"
            data-toggle="collapse"
            data-target=" .collapseTwo"
          >
            <h2 className="mb-0 d-flex justify-content-between" onClick={() => setScope("html")}>
              <small className="c-sub-title pt-2"> Frontend Development </small>
              <i className="fa fa-angle-down c-angleIcon mt-2" aria-hidden="true" />
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapseTwo collapse"
            aria-labelledby="headingTwo"
            data-parent="#myAccordion"
          >
            <div className="card-b">
              <ul className="list-unstyled">
                <li
                  className=" px-3 py-3  cu-list-div mt-2 pointer"
                  onClick={() => setScope("html")}
                >
                  HTML
                </li>
                <li className="cu-list-div2 px-3 py-3 pointer" onClick={() => setScope("css")}>
                  CSS
                </li>
                <li className="cu-list-div3 px-3 py-3 pointer" onClick={() => setScope("js")}>
                  Javascript
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Backend Development */}
        <div className="card border-0 mb-3">
          <div
            className="c-card-header card-header"
            id="headingThree"
            data-toggle="collapse"
            data-target=".collapseThree "
          >
            <h2
              className="mb-0 d-flex justify-content-between"
              onClick={() => setScope("javascript")}
            >
              <small className="c-sub-title pt-2">Backend Development </small>
              <i className="fa fa-angle-down c-angleIcon mt-2" aria-hidden="true" />
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapseThree collapse"
            aria-labelledby="headingThree"
            data-parent="#myAccordion"
          >
            <div className="card-b">
              <ul className="list-unstyled">
                <li
                  className="cu-list-div2 px-3 py-3 pointer"
                  onClick={() => setScope("javascript")}
                >
                  JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* UI/UX */}
        <div className="card border-0 mb-3">
          <div
            className="c-card-header card-header  tab-links"
            id="headingOne"
            data-toggle="collapse"
            data-target=".collapseOne"
          >
            <h2 className="mb-0 d-flex justify-content-between">
              <small className="c-sub-title pt-2"> UI/UX Design </small>
              <i className="fa fa-angle-down c-angleIcon mt-2" aria-hidden="true" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAcordion;
