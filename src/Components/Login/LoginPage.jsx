import React, {useEffect} from 'react'
import css from './Login.module.css'
import {NavLink, Route} from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login";

const LoginPage = props => {

    return <div className={css.login}>
        <div className={css.login__title}>
            <div className={css.login__title_content}>
                <img
                    src="https://www.freelogodesign.org/file/app/client/thumb/865c467d-cc19-419c-8055-51943870912c_200x200.png?1587572311101"
                    alt=""/>
                <h1 className={css.login__quote}>Social network of your dream</h1>
            </div>
        </div>
        <div className={css.login__content}>
            <Route path='/signup'
                   render={() => <SignUp isError={props.isError} usersCount={props.usersData.length} signUp={props.signUpThunk}/>}/>
            {props.location.pathname !== '/signup' ?
                <Route path='/' render={() => <Login isError={props.isError} signError={props.signError} login={props.loginThunk}/>}/> : ''}


        </div>
    </div>

}


export default LoginPage