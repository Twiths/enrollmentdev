import { frontend } from '../utils/curriculum'

const Frontend = ({ scope }) => {
  return (
    <div
      className=" tabcontent collapseTwo collapse "
      id="headingTwo"
      data-parent="#myAccordion"
    >
      {(frontend[scope] || frontend["html"]).map((data, idx) => (
        <div className="c-home32-cont" key={idx}>
          <p className="c-course-title mb-0">
            {idx + 1}. {data.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Frontend;
