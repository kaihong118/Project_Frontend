import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import React, {useContext, useEffect, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useNavigate} from "react-router-dom";
import {loginUserContext} from "../../../App.tsx";

export default function LoginPage () {
    const navigate = useNavigate();
    const loginUser = useContext(loginUserContext)
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")

    const handleEmailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const handlePasswordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        const isLogin = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);

        if(isLogin) {
            navigate("/")
        }
    }

    useEffect(() => {
        if(loginUser) {
            navigate("/")
        }
    },[loginUser])

    return (
        <>
            <NavBar/>
            <section className="vh-90">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100" onSubmit={handleSubmit}>
                        <div className="col col-xl-10">
                            <div className="card" style={{borderRadius: "1rem"}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://i.pinimg.com/originals/a5/54/6a/a5546acf5c493937e82a38f388e05da8.jpg"
                                            alt="login form" className="img-fluid"
                                            style={{borderRadius: "1rem 0 0 1rem"}}/>
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="mb-4 pb-1">
                                                    <span className="h2 fw-bold mb-0">Welcome to Monster Universe</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3">Sign
                                                    into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17"
                                                           className="form-control form-control-lg mb-1"
                                                           value={email}
                                                           onChange={handleEmailOnChange}/>
                                                    <label className="form-label" htmlFor="form2Example17">Email
                                                        address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27"
                                                           className="form-control form-control-lg mb-1"
                                                           value={password}
                                                           onChange={handlePasswordOnChange}/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                            type="submit">Login
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}