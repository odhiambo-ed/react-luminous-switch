import './Hero.css'

function Hero() {
    return (
      <div>
        <div
          className="d-sm-flex align-items-center justify-content-between w-100"
          style="height: 100vh;"
        >
          <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
            <span className="text-secondary text-uppercase">Subheadline</span>
            <h1 className="display-4 my-4 font-weight-bold">
              Enter Your <span style="color: #9B5DE5;">Headline Here</span>
            </h1>
            <a
              href="#"
              className="btn px-5 py-3 text-white mt-3 mt-sm-0"
              style="border-radius: 30px; background-color: #9B5DE5;"
            >
              Get Started
            </a>
          </div>
          <div className="col-md-8 h-100 clipped hero-img"></div>
        </div>
        <a href="https://componentity.com" target="_blank" className="block">
          <img
            src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
            width="120px"
            className="d-block mx-auto my-5"
          />
        </a>
      </div>
    );
}

export default Hero