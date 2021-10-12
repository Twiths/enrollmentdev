import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import SharedEvents from "./SharedEvents.js";
const EventsList = () => {
  return (
    <Container>
      <div className="our-events">
        <h3>EDU community Events</h3>
      </div>
      <Row className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <Col>
          <SharedEvents />
        </Col>
        <Col>
          <SharedEvents />
        </Col>
        <Col>
          <SharedEvents />
        </Col>
      </Row>
    </Container>
  );
};
export default EventsList;
