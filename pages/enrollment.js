import app from "../config/firebaseInit"
import { useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {collection, addDoc, getFirestore} from "firebase/firestore";

const db = getFirestore();

export default function Enrollment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    track: "",
    gender: "",
    age: "",
    experience: "",
    education: "",
    employment: "",
    about: "",
    referredFrom: "",
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const docRef = await addDoc(collection(db, "enrollment"), data)
    if (!docRef.id) return new Error('An error ocurred while enrolling you') 
    console.log(docRef.id)  
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Register | Outbox Edu Enrollment</title>
      </Head>
      <Navigation />
      <div className="enrollment">
        <div className="section-1">
          <div className="container">
            <div className="Toastify"></div>
            <div className="intro-text">
              <p>ENTER YOUR DETAILS TO JOIN OUR NEXT COHORT</p>
              <h2>Some Details here</h2>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="container">
            <div className="form-container">
              <form name="enroll" className="enroll" onSubmit={submit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Enter your first name"
                        required
                        value={data.firstName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback" role="alert">
                        please enter your first name
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Enter your last name"
                        required
                        value={data.lastName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback" role="alert">
                        please enter your last name
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email"
                        required
                        value={data.email}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback" role="alert">
                        please enter your email address
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        required
                        value={data.phoneNumber}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback" role="alert">
                        please enter your phone number
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Country</label>
                      <select
                        className="custom-select"
                        id="country"
                        name="country"
                        required
                        defaultValue={data.country}
                        onChange={handleChange}
                      >
                        <option value="">Select your country</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Tanzania">Tanzania</option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        please enter your country
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Track</label>
                      <select
                        className="custom-select"
                        id="track"
                        name="track"
                        required
                        defaultValue={data.track}
                        onChange={handleChange}
                      >
                        <option value="">choose your track</option>
                        <option value="Design">UI/UX</option>
                        <option value="Frontend">FRONTEND</option>
                        <option value="Backend">BACKEND</option>
                      </select>
                      <div className="invalid-feedback">please select a track of your choice</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select
                        className="custom-select"
                        id="gender"
                        name="gender"
                        required
                        defaultValue={data.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        This field is required, please select your course
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="age">Select Age range</label>
                      <select
                        className="custom-select"
                        id="age"
                        name="age"
                        required
                        defaultValue={data.age}
                        onChange={handleChange}
                      >
                        <option value="">Select Age range</option>
                        <option value="10-18">10-18</option>
                        <option value="19-25">19-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46 and above">46 and above</option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        This field is required, please select your age range
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="level">Experience Level</label>
                      <select
                        className="custom-select"
                        id="level"
                        name="experience"
                        required
                        defaultValue={data.experience}
                        onChange={handleChange} 
                      >
                        <option value="">Select Level</option>
                        <option value="Novice">Novice</option>
                        <option value="Complete Beginner">Complete Beginner</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Already familiar with things">
                          Already familiar with things
                        </option>
                        <option value="Already a developer">Already a developer</option>
                        <option value="Intermediate / Moderate">Intermediate / Moderate</option>
                        <option value="Professional">Professional</option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        This field is required, please select your experience level
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="eduLevel">Educational Level</label>
                      <select
                        className="custom-select"
                        id="eduLevel"
                        name="education"
                        required
                        defaultValue={data.education}
                        onChange={handleChange}
                      >
                        <option value="">Select Educational Level</option>
                        <option value="Primary school Leaving Certificate">
                          Primary school Leaving Certificate
                        </option>
                        <option value="Secondary School Certificate">
                          Secondary School Certificate
                        </option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="Postgraduate">Others</option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        This field is required, please select your educational level
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="employmentStatus">Employment status</label>
                      <select
                        className="custom-select"
                        id="employmentStatus"
                        name="employment"
                        required
                        defaultValue={data.employment}
                        onChange={handleChange}
                      >
                        <option value="">Select Employment status</option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Self-Employed">Self-Employed</option>
                        <option value="Student (not eligible htmlFor employment)">
                          Student (not eligible htmlFor employment)
                        </option>
                        <option value="Minor (not eligible htmlFor employment)">
                          Minor (not eligible htmlFor employment)
                        </option>
                      </select>
                      <div className="invalid-feedback" role="alert">
                        This field is required, please select your employment status
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>How did you hear about us</label>
                      <select
                        className="custom-select"
                        id="referredFrom"
                        name="referredFrom"
                        required
                        defaultValue={data.referredFrom}
                        onChange={handleChange}
                      >
                        <option value="">Select from list</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Others">Others</option>
                      </select>
                      <div className="invalid-feedback">please select how you heard about us</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Say something about yourself in one sentence</label>
                      <textarea
                        className="form-control"
                        placeholder="About you"
                        name="about"
                        defaultValue={data.about}
                        onChange={handleChange}
                      ></textarea>
                      <div className="invalid-feedback" role="alert">
                        please enter a sentence about yourself
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group form-btn mt-5">
                      <button className="enrollBtn">{loading ? "submitting..." : "Enroll"}</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
