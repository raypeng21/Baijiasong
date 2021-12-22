import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./newsgallery.scss"
function onChange(a, b, c) {
  console.log(a, b, c);
}

class NewsGallery extends Component {
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
        <Carousel
          asNavFor={this.state.nav}
          touchMove={false}
          dots={false}
          ref={carousel => (this.media = carousel)}
        >
          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n1.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n2.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n3.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n4.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n5.png" style={{ width: '100%' }} />
          </a>
        </Carousel>

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
          <img src="assets/n1.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n2.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n3.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n4.png" style={{ width: '100%' }} />
          </a>

          <a style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n5.png" style={{ width: '100%' }} />
          </a>
        </Carousel>
      </div>
    );
  }
}
export default NewsGallery