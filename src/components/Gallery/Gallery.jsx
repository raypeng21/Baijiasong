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

  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  };

  render() {
    return (
      <div className="gallery">
        {/* <Carousel
          asNavFor={this.state.nav}
          touchMove={false}
          dots={false}
          ref={carousel => (this.media = carousel)}
        >
          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/1.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/2.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/3.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/4.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/5.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/6.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/7.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/8.png" style={{ width: '100%' }} />
          </a>
        </Carousel> */}

        <Carousel
          slidesToShow={3}
          centerMode={true}
          asNavFor={this.state.media}
          draggable={true}
          ref={carousel => (this.nav = carousel)}
          swipeToSlide={true}
          touchThreshold={100}
          focusOnSelect={true}
          dots = {true}
          autoplay
        >
          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/1.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/2.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/3.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/4.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/5.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/6.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/7.png" style={{ width: '99%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/8.png" style={{ width: '99%' }} />
          </a>
        </Carousel>
      </div>
    );
  }
}
export default Gallery