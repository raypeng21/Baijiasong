import React from 'react'
import Topbar from "../topbar/Topbar";
import Intro from "../Main/Main";
import About from "../about/About";
import News from "../news/News";
import Projects from "../project/Projects";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import "./home.scss"
import 'antd/dist/antd.css';
import { Divider } from 'antd';

export default function Home() {
    return (
        <div className="home">
            <div className="news">
            <News/>
            </div>
            <Divider plain>公司基本信息</Divider>

            <div className="basicinfo">
                <div className="imgContainer">
                    <img src="assets/BJS_logo.png" alt="" />
                </div>

                <div className="text">
                <Divider orientation="left">
                <h1> 公司简介</h1>
                </Divider>
                    <p>江苏百加颂基础工程有限公司成立2013年，是一家专业从事桩基工程，市政基础施工，房屋基础施工的施工企业。企业地址位于昆山市玉山镇萧林中路1288号逸景湾花园1号楼618室，所属行业为土木工程建筑业。经营范围包括地基基础工程、市政工程、建筑工程的施工、建筑材料的销售、机械设备的租赁等行业。</p>
                    <p>公司在精诚合作，信誉至上的原则上，经过近十年的精进发展，施工设备先进精良，施工技术日臻精湛。拥有包括静压桩机，锤击桩基，长螺旋搅拌桩基，水钻孔桩机等多种设备。公司擅长复杂、高难度的岩土工程施工，在大直径、超深地基、硬岩成岩等方面积累了丰富的施工管理经验。</p>
                    <p>公司秉承“品质保障，科学精进，和谐为本”的宗旨，高效、优质地完成了一系列大型地基与基础工程项目，包括昆山西部医疗中心，昆山花桥赛格电子广场，昆山花桥智慧广场，昆山印象花园，江苏中原建设集团有限公司办公大楼等。在众多工程建设过程中，着重质量管理，安全文明生产，科学组织施工，所建工程均树立了良好的社会形象，坚持绿色施工，坚持履行社会责任，匠心打造一流精品工程，受到建设方和政府建设主管部门的一致好评。</p>                </div>
            </div>
            <Divider />

            <div className="project">
            <Projects />
            </div>
            <Divider />

            <div className="service">
            <Service />
            <p>若有上述施工需求，欢迎沟通咨询。</p>
            </div>
        </div>
    )
}
