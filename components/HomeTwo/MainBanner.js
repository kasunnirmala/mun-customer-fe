import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-two">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>Master English only in 45 days</h1>
              <p>
                Join our Nelaka Andrew english course and learn to speak english
                correctly and fluently in just 45 days.
              </p>
              <p>
                Why wait? Join now and experience first hand the power of our
                course.
              </p>
              <div className="banner-btn">
                <Link href="/">
                  <a className="default-btn">Enroll Now</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Main Image */}
            <div className="banner-main-img banner-one-main-img">
              <img src="/images/home-two/main-img2.png" alt="Image" />
            </div>

            {/* Banner Shape Images */}
            <div className="banner-img">
              <img
                className="animate__animated animate__fadeInDown animate__faster"
                src="/images/home-two/shape1.png"
                alt="Image"
              />
              <div className="square-img">
                <img
                  className="animate__animated animate__fadeInDown animate__delay-0.1s"
                  src="/images/home-two/shape2.png"
                  alt="Image"
                />
              </div>
              <img
                className="animate__animated animate__fadeInDown animate__fast"
                src="/images/home-two/shape3.png"
                alt="Image"
              />

              <div className="circle-img">
                <img
                  className="animate__animated animate__zoomIn animate__delay-0.1s"
                  src="/images/home-two/shape4.png"
                  alt="Image"
                />
              </div>

              <img src="/images/home-two/shape5.png" alt="Image" />
              <img
                className="animate__animated animate__fadeInDown animate__delay-0.1s"
                src="/images/home-two/shape6.png"
                alt="Image"
              />

              <img
                className="animate__animated animate__fadeInDown animate__delay-0.6s"
                src="/images/home-two/shape7.png"
                alt="Image"
              />

              <img
                className="animate__animated animate__fadeInRight animate__delay-0.1s"
                src="/images/home-two/shape8.png"
                alt="Image"
              />

              <img
                className="animate__animated animate__fadeInRight animate__delay-0.1s"
                src="/images/home-two/shape9.png"
                alt="Image"
              />

              <img
                className="animate__animated animate__fadeInRight animate__delay-1s"
                src="/images/home-two/shape10.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="over-shape">
        <img src="/images/home-one/shape/animate1.png" alt="Image" />
        <img src="/images/home-one/shape/animate2.png" alt="Image" />
        <img src="/images/home-one/shape/animate3.png" alt="Image" />
      </div>
    </section>
  );
};

export default MainBanner;
