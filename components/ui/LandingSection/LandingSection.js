import classes from "./LandingSection.module.css"


const LandingSection = (props) => {
  return (
   
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{backgroundImage:"url('https://res.cloudinary.com/devs4devs/image/upload/v1632282791/land_mcphaf.jpg",  height: "78vh"}}
     
    >
      <div className="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.6)"}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
          <h1 className="mb-3">Kick Start your Career in Tech !!!</h1>
              <h4 className="mb-3">Welcome to Outbox Edu</h4>
              <p className="mb-3">Learning Platform </p>
            <a className="btn  btn-lg btn-rounded" href="https://docs.google.com/forms/d/188bTILVRxK4gcd-tJqKd9jNtmq3X0CvHB6U-MSY9d54/edit" role="button" style={{ backgroundColor: "#0072A1", color: "white"}}>Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default LandingSection;
