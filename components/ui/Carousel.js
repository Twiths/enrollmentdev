import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../../public/images/edu.png";

function DemoCarouse() {
  const arr = [1, 2, 3];

  return (
    <>
      <h4 className="carsouel__header" style={{ textAlign: "center", marginTop: "50px" }}>
        What Our Alumni Say
      </h4>
      <div className="row">
        <div className="col-md-12">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            className="owl-carousel"
          >
            {arr.map((_, index) => (
              <div key={index}>
                <div className="testimonial">
                  <div className="testimonial-content">
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left"></i>
                    </div>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum
                      dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                    </p>
                  </div>
                  <h3 className="title">Prisca</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default DemoCarouse;
