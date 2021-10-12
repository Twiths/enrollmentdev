import { useRef, useState } from "react";
import classes from "./Signup.module.css";
import logo from "../../public/images/edu.png";
import Image from "next/image";
import { useAuth } from "../../context/Context";
import Link from "next/link";

const SignUpScreen = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.code);
    }

    setLoading(false);
  }
  return (
    <div className={classes.loginScreen}>
      <span style={{ position: "absolute", top: "-6%" }}>
       <Link href="/"><a> <Image src={logo} alt="edu icon" width="120px" height="150px" /></a></Link>
      </span>
      <form className={classes.loginScreenForm} onSubmit={handleSubmit}>
        <h3 className={classes.loginScreenTitle}>Sign Up</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control m-2"
            type="email"
            ref={emailRef}
            required
            id="email"
            placeholder="Email address"
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control m-2"
            type="password"
            ref={passwordRef}
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            tabIndex={2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input
            className="form-control m-2"
            type="password"
            ref={confirmPasswordRef}
            required
            id="password"
            autoComplete="true"
            placeholder="Confirm Password"
            tabIndex={2}
          />
        </div>
        <input
          style={{ backgroundColor: "#0072A2" }}
          className="form-control m-2 btn text-white"
          type="submit"
          value="Sign Up"
          tabIndex={3}
        />

        <span className={classes.loginScreenSubtext}>
          Already have an account? <Link href="/log-in">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpScreen;
