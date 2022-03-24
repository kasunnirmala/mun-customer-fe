import React, { Component } from "react";
import Link from "next/link";
import ResponsiveEmbed from "react-responsive-embed";
class About extends Component {
  render() {
    return (
      <section className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <ResponsiveEmbed
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fdiplomatsenglish%2Fvideos%2F684016006265564%2F&show_text=false&width=560&t=0"
              allowFullScreen
              ratio='16:9'
            />
            {/* <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>We Complete Every Project With Extra Care As Customer Need</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Advanced caching
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Unlimited  applications
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP 7 ready transfer
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP ready serves
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                24/7 Free extra support
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Optimized stack
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default About;
