import React from "react";

function LogIn({
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    error,
}) {
    return (
        <>
            <>
                {/* breadcrumb start */}
                <div className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="page-title">
                                    <h2>customer's login</h2>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <nav
                                    aria-label="breadcrumb"
                                    className="theme-breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            login
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb End */}
                {/*section start*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                User name
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">
                                                Password
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>
                                        <button
                                            onClick={handleLogin}
                                            className="btn btn-solid"
                                        >
                                            Login
                                        </button>
                                        {error && <p>{error}</p>}
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">
                                        Create A Account
                                    </h6>
                                    <p>
                                        Sign up for a free account at our store.
                                        Registration is quick and easy. It
                                        allows you to be able to order from our
                                        shop. To start shopping click register.
                                    </p>
                                    <a href="#" className="btn btn-solid">
                                        Create an Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section ends*/}
            </>
        </>
    );
}

export default LogIn;
