import { design } from "../utils/curriculum"

const Design = () => {
  return (
    <div className="tabcontent collapseOne collapse " id="headingOne" data-parent="#myAccordion">
      {design.map((data, idx) => (
        <div className="c-home32-cont" key={idx}>
          <p className="c-course-title mb-0">
            {idx + 1}. {data.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Design;
