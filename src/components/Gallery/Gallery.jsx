import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./Gallery.scss"
function onChange(a, b, c) {
  console.log(a, b, c);
}

class Gallery extends Component {
  state = {
    media: null,
    nav: null
  };

  componentDidMount = () => {
    this.setState({
      media: this.media,
      nav: this.nav
    });
  };

  render() {
    return (
      <div>
        {/* <Carousel
          asNavFor={this.state.nav}
          touchMove={false}
          dots={false}
          ref={carousel => (this.media = carousel)}
        >
          <div>
          <img src="assets/2.png" alt="" />
          </div>
          <div>
          <img src="assets/3.png" alt="" />
          </div>
          <div>
          <img src="assets/4.png" alt="" />
          </div>
          <div>
          <img src="assets/5.png" alt="" />
          </div>
        </Carousel> */}
        <Carousel
          slidesToShow={2}
          centerMode={true}
          asNavFor={this.state.media}
          draggable={true}
          ref={carousel => (this.nav = carousel)}
          swipeToSlide={true}
          touchThreshold={100}
          focusOnSelect={true}
          autoplay
        >
          <div>
          <img src="assets/1.png" alt="" />
          </div>
          <div>
          <img src="assets/2.png" alt="" />
          </div>
          <div>
          <img src="assets/3.png" alt="" />
          </div>
          <div>
          <img src="assets/4.png" alt="" />
          </div>
          <div>
          <img src="assets/5.png" alt="" />
          </div>
          <div>
          <img src="assets/6.png" alt="" />
          </div>
          <div>
          <img src="assets/7.png" alt="" />
          </div>
          <div>
          <img src="assets/8.png" alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Gallery