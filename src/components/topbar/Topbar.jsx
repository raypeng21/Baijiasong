import React, { Component } from 'react';
import "./topbar.scss"
import {NavbarBrand, Nav,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Topbar extends Component {


    render(){
        return (
            <div className='topbar'>
    
                <div className="container">
    
    
                    <NavbarBrand className="logo" href="./">
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

                        <NavItem>
                            <NavLink className="nav-link"  to='/home'>网站首页</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/about'>关于我们</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/news'>新闻资讯</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/projects'> 代表工程</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/service'> 服务项目</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/contact'> 联系我们</NavLink>
                        </NavItem>
                    {/* <ul className="list-unstyled">
                        <li><a href='/'>网站首页</a></li>
                        <li><a href='about'>关于我们</a></li>
                        <li><a href='news'>新闻资讯</a></li>
                        <li><a href='projects'>代表工程</a></li>
                        <li><a href='service'>服务项目</a></li>
                        <li><a href='contact'>联系我们</a></li>
    
                        </ul> */}

                    </Nav>
    
    
                    </div>
    
    
                </div>
    
    
    
    
            
            
            
            </div>
            
        )



    }

}
export default Topbar;