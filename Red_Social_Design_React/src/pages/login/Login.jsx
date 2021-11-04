import "./login.css";
import {useRef,useContext} from 'react';
import {loginCall} from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {
    const email= useRef();
    const password= useRef();
    const {isFetching,dispatch} = useContext(AuthContext);
    

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall(
            {email:email.current.value,password:password.current.value},
            dispatch);
    }
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">NKTSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on NKTSocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                       <input 
                       type="email" 
                       placeholder="Email" 
                       className="loginInput" 
                       ref={email} 
                       required
                       />
                       <input type="password" 
                       placeholder="Password" 
                       className="loginInput" 
                       ref={password} 
                       required
                       minLength="6"
                       />
                       <button className="loginButton" type="submit" disabled={isFetching}>
                           {isFetching 
                           ?<CircularProgress color="inherit" size="20px"/>
                           : "Log in"}
                           </button>
                       <span className="loginForgot">Forgot password?</span>
                       <button className="loginRegisterButton">
                       {isFetching 
                       ?(
                       <CircularProgress color="inherit" size="20px"/>
                       ):( 
                           "Create a new account"
                       )}                           
                           </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
