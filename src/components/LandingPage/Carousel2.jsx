import React from 'react'; 
import './Carousel2.css';

const MyCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>iPhone 14 Pro Max</h4>
                  <p>This has many features that are simply awesome including the new Dynamic Island. The phone comes with a 6.7"-inch display with a resolution of 2532 × 1170 pixels.</p>
                  <br />
                  <a href="#">BUY NOW</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <video src="https://www.apple.com/105/media/ww/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large.mp4" class="mx-auto" alt="slide" autoplay loop controls></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>HP Pavilion</h4>
                  <p>This has many features that are simply awesome. The phone comes with a 3.50-inch display with a resolution of 320x480 pixels.</p>
                  <br />
                  <a href="#">BUY NOW</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <img src="https://i.imgur.com/tVBy5Q0.png" className="mx-auto" alt="slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default MyCarousel;
