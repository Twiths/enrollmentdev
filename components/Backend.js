import { backend } from "../utils/curriculum"

const Backend = ({ scope }) => {
  return (
    <div
      className="tabcontent collapseThree collapse "
      id="headingThree"
      data-parent="#myAccordion"
    >
      {(backend[scope] || backend["javascript"]).map((data, idx) => (
        <div className="c-home32-cont" key={idx}>
          <p className="c-course-title mb-0">
            {idx + 1}. {data.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Backend;
