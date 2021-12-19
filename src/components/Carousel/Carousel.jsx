import React from "react";
import "./Carousel.scss"

function Carousel(props) {
  // active 当前轮播激活的索引
  const [active, setActive] = React.useState(0);
  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };
  React.useEffect(() => {
    // 将 active 的值更新为下一个项的索引
    setTimeout(() => {
      const { carouselItems } = props;
      // 因为 active 在 render 中使用了， active 改变会影响视图而重新渲染，所以也会再次触发 useEffect
      setActive((active + 1) % carouselItems.length);
    }, 1000);
  });
  const { carouselItems, ...rest } = props;
  
  return (


      <div style={style.carousel}>
        {carouselItems.map((item, index) => {
          // 激活就显示，否则隐藏
          const activeStyle = active === index ? style.visible : {};
          // 克隆出一个组件来渲染
          return React.cloneElement(item, {
            ...rest,
            style: {
              ...style.carouselItem,
              ...activeStyle
            },
            key: index
          });
        })}
      </div>
  );
}



export default function() {
  return (
    <div className="slider" >
      <Carousel
      carouselItems={[
        <img src="assets/2.jpg" alt="" />,
        <img src="assets/3.jpg" alt="" />,
        <img src="assets/4.jpg" alt="" />,
        <img src="assets/5.jpg" alt="" />,
        <img src="assets/6.jpg" alt="" />,
        <img src="assets/7.jpg" alt="" />,
        <img src="assets/8.jpg" alt="" />,
        ]}
      />

    </div>

  );
}