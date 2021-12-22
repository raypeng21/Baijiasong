import React, { Component } from 'react';
import "./topbar.scss"
import {NavbarBrand, Nav,} from 'reactstrap';


class Topbar extends Component {


    render(){
        return (
            <div className='topbar'>
    
                <div className="container">
    
    
                    <NavbarBrand className="logo" href="/">
                        <img src='assets/logo.png' alt='' />
                        </NavbarBrand>
    
                    <div className="left">
                        <div className="cn">
                            <h1>江苏百加颂基础工程有限公司</h1>
                        </div>
                        <div className="en">
                            <h2>Jiangsu Baijiasong Foundation Engineering Co.,Ltd</h2>
                        </div>
                    </div>
    
    
                    <div className="right">
    
                    <Nav navbar>
                    <ul className="list-unstyled">
                        <li><a href='/home'>网站首页</a></li>
                        <li><a href='/about'>关于我们</a></li>
                        <li><a href='/news'>新闻资讯</a></li>
                        <li><a href='/projects'>代表工程</a></li>
                        <li><a href='/service'>服务项目</a></li>
                        <li><a href='/contact'>联系我们</a></li>
    
                        </ul>

                    </Nav>
    
    
                    </div>
    
    
                </div>
    
    
    
    
            
            
            
            </div>
        )



    }

}
export default Topbar;