import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";

export default function LoginPage () {
    return (
        <>
            <NavBar/>
            <section className="vh-90">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
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

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                                    <span className="h1 fw-bold mb-0">Welcome to <br/>Monster Universe</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3">Sign
                                                    into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17"
                                                           className="form-control form-control-lg" style={{marginBottom: "5px"}}/>
                                                    <label className="form-label" htmlFor="form2Example17">Email
                                                        address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27"
                                                           className="form-control form-control-lg" style={{marginBottom: "5px"}}/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                            type="button">Login
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