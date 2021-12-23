import React, { Component } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./newsgallery.scss"

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
          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n1.png"  alt=""style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n2.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n3.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n4.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n5.png" alt="" style={{ width: '100%' }} />
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
          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n1.png"  alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n2.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n3.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n4.png" alt="" style={{ width: '100%' }} />
          </a>

          <a href = "assets/n1.png" style={{ display: 'inline-block',height: this.state.imgHeight}}>
          <img src="assets/n5.png" alt="" style={{ width: '100%' }} />
          </a>
        </Carousel>
      </div>
    );
  }
}
export default NewsGallery