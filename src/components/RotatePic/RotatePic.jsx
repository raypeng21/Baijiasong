import { useState } from "react";
import"./rotatepic.scss"
import Timer from "../Timert/timer";

export default function RotatePic(props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "assets/1.jpg",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "assets/2.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "assets/3.jpg",
        },
      ];

      const count = props.timer.map((count) => {
        return (
            <Timer count={count} />            
        );
    });

      const CS = () => {
         <Timer startCount = "100"/>

          currentSlide = count
          setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };


    return (
        <div className='work' id = "work">
            <div className="sliderContainer">
                
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>{data.map((d)=>(
                    <div className="container">

                        <div className="item">
                            <div className="right">
                                <img src={d.img} alt="" />

                            </div>
                        </div>
                    </div>
                ))}
                </div>



            </div>


        </div>
    )
}
