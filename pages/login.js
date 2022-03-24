import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

class Login extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageBanner
          pageTitle="Login"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Login"
        />

        <section className="user-area-all-style log-in-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-form-action">
                  <div className="form-heading text-center">
                    <h3 className="form-title">Login to your account!</h3>
                  </div>

                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      {/* <div className="col-lg-6 col-sm-6 form-condition">
                        <div className="agree-label">
                          <input type="checkbox" id="chb1" />
                          <label>Remember me</label>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <Link href="/recover-password">
                          <a className="forget">Forgot my password?</a>
                        </Link>
                      </div> */}

                      <div className="col-12">
                        <button
                          className="default-btn btn-two"
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          Log In Now
                        </button>
                      </div>

                      <div className="col-12">
                        <p className="account-desc">
                          Not a member?
                          <Link href="/sign-up">
                            <a>Register</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Login;
