import {ReactSVG} from "react-svg";
import {Link} from "react-router-dom";
import './login.css';
import './signup.css';
import React, {useState} from "react";

const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const nameChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

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
                        <Link to="/" >
                            <img className="colored-svg reset-styles ms-auto" src="/images/home.svg"  alt="profile" width="20" height="20"/>
                        </Link>
                    </li>
                    <li>
                        <span>/</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to="/signup">
                            Реєстрація
                        </Link>
                    </li>
                </ol>
            </nav>
            <h1 className="text-center mb-3">Реєстрація</h1>
            <div className="d-flex flex-row wrap-login100">


                <form className="login100-form validate-form d-flex flex-column gap-2" onSubmit={handleSubmit}>

                    <div className="wrap-input100 input">
                        <input className="input100" type="text" name="name" placeholder="Ім'я" value={formData.name}
                               onChange={nameChangeHandler}/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                        <ReactSVG className="modal-icon-1" src="assets/user.svg"/>
                    </div>

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
                        <input className="input100" type="password" name="password" placeholder="Пароль"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                        <ReactSVG className="modal-icon-1" src="assets/lock-password.svg"/>
                    </div>

                    <div className="validation">
                        <ul>
                            <li id="lover">
                                <ReactSVG className="circle-icon" src="assets/circle.svg"/>
                                <span>Мінімум один символ у нижньому регістрі</span>
                            </li>
                            <li id="upper">
                                <ReactSVG className="circle-icon" src="assets/circle.svg"/>
                                <span>Мінімум один символ верхнього регістру</span>
                            </li>
                            <li id="number">
                                <ReactSVG className="circle-icon" src="assets/circle.svg"/>
                                <span>Мінімум одна цифра</span>
                            </li>
                            <li id="special">
                                <ReactSVG className="circle-icon" src="assets/circle.svg"/>
                                <span>Мінімум один спеціальний символ</span>
                            </li>
                            <li id="length">
                                <ReactSVG className="circle-icon" src="assets/circle.svg"/>
                                <span>Довжина - щонайменше 8 символів</span>
                            </li>
                        </ul>
                    </div>

                    {error && <div className="error-email text-center">{error}</div>}

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Зареєструватися
                        </button>
                    </div>

                </form>


                <div className="login100-pic js-tilt" data-tilt>
                    <img src="/images/login-img.png" alt="IMG"/>
                </div>


            </div>
        </div>
    );
}
export default Signup;