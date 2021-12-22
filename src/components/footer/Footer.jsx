import "./footer.scss"
import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
                <div className="left">             
                        <div className="link">
                            <a href="/home">网站首页</a>
                            <a href="/about">关于我们</a>
                            <a href="/news">新闻资讯</a>
                            <a href="projects">代表工程</a>
                            <a href="/service">服务项目</a>
                            <a href="/contact">联系我们</a>
                        </div>

                    <div className="info">
                            <p>公司地址：江苏省昆山开发区同丰东路1135号</p>
                            <p>邮政编码: 215300</p>
                            <p>联系电话: 15962691995</p>
                           <p>电子邮件: <a href="tortoise_65@163.com"> tortoise_65@163.com</a></p>

                    </div>
                    
                    <div className="copyright">             
                        <p>© Copyright 2021 江苏百加颂基础工程有限公司</p>
                    </div>

                </div>



                <div className="right">
                    <div className="imgContainer">
                        <img src='assets/buliding.png' alt='' />
                    </div>

                </div>



            </div>
    )
}
