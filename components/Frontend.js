import { frontend } from "../utils/curriculum";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Frontend = ({ scope }) => {
  return (
    <Tabs>
      <Tab eventKey={scope} title={scope.toUpperCase()}>
        {frontend[scope].map((data, idx) => (
          <div className="c-home32-cont" key={idx}>
            <p className="c-course-title mb-0">
              {idx + 1}. {data.title}
            </p>
          </div>
        ))}
      </Tab>
    </Tabs>
  );
};

export default Frontend;
