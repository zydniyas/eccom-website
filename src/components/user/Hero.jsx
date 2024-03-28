import React from "react";

export default function Hero() {
  return (
    <section className="p-0">
      <div className="slide-1 home-slider ">
        <div>
          <div className="home  text-center">
            <img
              src="../public/images/home-banner/1.jpg"
              alt=""
              className="bg-img blur-up lazyload"
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h4>welcome to fashion</h4>
                      <h1>men fashion</h1>
                      <a href="#" className="btn btn-solid">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home text-center">
            <img
              src="../public/images/home-banner/2.jpg"
              alt=""
              className="bg-img blur-up lazyload"
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h4>welcome to fashion</h4>
                      <h1>women fashion</h1>
                      <a href="#" className="btn btn-solid">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
