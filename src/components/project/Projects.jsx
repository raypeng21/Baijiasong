import { useEffect, useState } from "react";
import "./projects.scss"
import ProjectList from "../projectList/ProjectList"


import {
    西部,
    赛格,
    智慧,
    印象,
    中原,
  } from "../../data"

  
export default function Projects() {

    const [selected, setselected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
          id: "西部",
          title: "昆山西部医疗中心",
        },
        {
          id: "赛格",
          title: "花桥赛格电子广场",
        },
        {
          id: "智慧",
          title: "花桥智慧广场",
        },
        {
          id: "印象",
          title: "昆山印象花园",
        },
        {
          id: "中原",
          title: "江苏中原公司办公楼",
        },
      ];




      useEffect(() => {
        switch (selected) {
          case "西部":
            setData(西部);
            break;
          case "赛格":
            setData(赛格);
            break;
          case "智慧":
            setData(智慧);
            break;
          case "印象":
            setData(印象);
            break;
          case "中原":
            setData(中原);
            break;
          default:
            setData(西部);
        }
      }, [selected]);


    return (
        <div className='projects'>
            <h1>代表工程</h1>
            <ul>
            {list.map((item) => (
            <ProjectList title={item.title} 
            id = {item.id}
            active = {selected === item.id} 
            setselected = {setselected} />
        ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt="" />
                </div>
                ))}
            
            </div>


        </div>
    )
}
