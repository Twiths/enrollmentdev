import {useState, useRef} from 'react'
import classes from "./ResetPassword.module.css";
import logo from "../../public/images/edu.png";
import Image from "next/image";
import Link from 'next/link'
import { useAuth } from "../../context/Context";
import withAuth from '../../HOC/withAuth';

const ResetPassword = () => {
  const emailRef = useRef()
  const { forgotPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error);
            setError('Failed to Reset Password')
        }

        setLoading(false)
    }

  return (
    <div className={classes.resetPasswordScreen}>
      <span style={{ position: "absolute", top: "5%" }}>
       <Link href="/"><a> <Image src={logo} alt="edu icon" width="120px" height="150px" /></a></Link>
      </span>
      <form className={classes.resetpasswordScreenForm} onSubmit={handleSubmit}>
        <h3 className={classes.resetPasswordScreenTitle}>Forgot Password</h3>
        {error && <span className="error-message">{error} </span>}
        {message && (
          <span className="success-message">
            {message} <Link href="/log-in">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">Recovery Email:</label>
          <input
            className="form-control m-2"
            type="text"
            ref={emailRef}
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
          />
        </div>
          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "#0072A2" }}
            className="form-control m-2 btn text-white"
          />
      </form>
    </div>
  );
};

export default withAuth(ResetPassword);

//sample to how to protect routes below

//export default withAuth(ResetPassword);
