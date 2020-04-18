import React from 'react';
import './Login.css';


class Login extends React.Component
{
    render(){
    return (
        <div className="kotak_login">
            <h1>Login Page</h1>
            <div className='formLogin'>
                <form action="">

                <label>Username</label>
                <input type="text" name="username" class="form_login" placeholder="Username atau email .."></input> 

                <label>Password</label>
                <input type="text" name="password" class="form_login" placeholder="Password .."></input>

                <input type="submit" class="tombol_login" value="LOGIN"></input>

                <input type="checkbox" class="remember"/> Remember me

                <input type="submit" class="tombol_cancel" value="CANCEL"></input>
                </form>
            </div>
        </div>
    );
    }
}

export default Login;