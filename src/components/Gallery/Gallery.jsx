import React, { Component } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./Gallery.scss"


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
          <a href = "assets/1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/1.png"  alt="" style={{ width: '99%' }} />
          </a>
          <a href = "assets/2.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/2.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/3.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/3.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/4.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/4.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/5.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/5.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/6.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/6.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/7.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/7.png" alt="" style={{ width: '99%' }} />
          </a>

          <a href = "assets/8.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/8.png" alt="" style={{ width: '99%' }} />
          </a>
        </Carousel>
      </div>
    );
  }
}
export default Gallery