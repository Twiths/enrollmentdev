import {useRef, useState} from 'react'
import classes from "./Login.module.css";
import logo from '../../public/images/edu.png'
import Image from 'next/image'
import { useAuth } from '../../context/Context';
import Link from 'next/link'
import { useRouter } from 'next/router'

const LoginScreen = () => {
  const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [logged, setLogged] = useState(false)
    const {login} = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setLogged(true)
        } catch (error) {
            setError(error.code)
        }

        setLoading(false)
    }

    const Router = useRouter()
    logged && Router.replace('/lms')


  return (
    <div className={classes.loginScreen}>
        <span  style={{position:"absolute", top:0}} >
       <Link href="/"><a><Image src={logo} alt="edu icon" width="120px" height="150px" /></a></Link>
        </span>
      <form className={classes.loginScreenForm} onSubmit={handleSubmit}>
          
        <h3 className={classes.loginScreenTitle}>Login</h3>
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
          <label htmlFor="password">
            Password:{" "}
            <Link href="/reset-password" className={classes.loginScreenForgotpassword}>
              Forgot password
            </Link>
          </label>
          <input
            className="form-control m-2"
            type="password"
            required
            ref={passwordRef}
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            tabIndex={2}
          />
          <input
          style={{backgroundColor:"#0072A2"}}
          className="form-control m-2 btn text-white"
            type="submit"
            value="Login"
            tabIndex={3}
          />
        </div>
        

        <span className={classes.loginScreenSubtext}>
          Don&#39;t have an account? <Link href='/sign-up'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
