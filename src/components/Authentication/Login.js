import React, {useState} from 'react';
import './login.css';
import {ReactSVG} from 'react-svg';
import { Link } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
    });

    const [error, setError] = useState('');


    const emailChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.email);
        if (!formData.email.trim()) {
            setError('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Invalid email format');
            return;
        }
        formData.email = '';
        // Отримайте дані з форми та виконайте подальші дії, наприклад, відправку на сервер
    };


    return (
        <div className="main-content p-4 w-95">
            <nav aria-label="breadcrumb" className="bread-crumbs__bottom">
                <ol className="breadcrumb d-flex gap-3">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <img className="colored-svg reset-styles ms-auto" src="/images/home.svg" alt="profile"
                                 width="20" height="20"/>
                        </Link>
                    </li>
                    <li>
                        <span>/</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to="/login">
                            Авторизація
                        </Link>
                    </li>
                </ol>
            </nav>

            <h2 className="text-center mb-3">Авторизація</h2>
            <div className="d-flex flex-row wrap-login100">


                <form className="login100-form validate-form d-flex flex-column gap-2 mt-lg-5 mt-0" onSubmit={handleSubmit}>

                    <div className="wrap-input100 input">
                        <input className="input100" type="text" name="email" placeholder="Email" value={formData.email}
                               onChange={emailChangeHandler}/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                        <ReactSVG className="modal-icon-1" src="assets/email.svg"/>
                    </div>

                    <div className="wrap-input100 input" data-validate="Password is required">
                        <input className="input100" type="password" name="pass" placeholder="Password"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                        <ReactSVG className="modal-icon-1" src="assets/lock-password.svg"/>
                    </div>

                    {error && <div className="error-email text-center">{error}</div>}

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Авторизуватися
                        </button>
                    </div>

                    <div className="text-center p-t-12">

                        <Link className="txt2" to="#"> Forgot password
                        </Link>
                    </div>

                    <div className="text-center p-t-136">
                        <Link className="txt2" to="/signup">
                            Create your Account
                            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </Link>
                    </div>
                </form>


                <div className="login100-pic js-tilt" data-tilt>
                    <img src="/images/login-img.png" alt="IMG"/>
                </div>


            </div>
        </div>

    );
}

export default Login;