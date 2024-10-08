import './Hero.css'

function Hero() {
    return (
      <div>
        <div
          className="d-sm-flex align-items-center justify-content-between w-100"
          style={{ height: "100vh" }}
        >
          <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline px-4">
            <span className="text-secondary text-uppercase">
              LuminousSwitch
            </span>
            <h1 className="display-4 my-4 font-weight-bold">
              Toggle to
              <span style={{ color: "#9B5DE5" }}> Switch</span>
            </h1>
            <div className="btn btn-primary px-5 py-3 text-white mt-3 mt-sm-0">
              Get Started
            </div>
          </div>
          <div className="col-md-8 h-100 clipped hero-img"></div>
        </div>
        <a href="https://componentity.com" target="_blank" className="block">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png"
            className="d-block mx-auto my-5"
          />
        </a>
      </div>
    );
}

export default Hero