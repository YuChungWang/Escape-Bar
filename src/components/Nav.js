import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './main.scss'

class Nav extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <nav className="navList">
                    <div className="navItem"><Link className="linkClear" to="/companyList">工作室列表</Link></div>
                    <div className="navItem"><NavLink className="linkClear" to="/proList">遊戲列表</NavLink></div>
                    <div className="navItem"><Link className="linkClear" to="/article/topic201812">本月主打</Link></div>
                    <div className="navItem"><Link className="linkClear" to="/map">密室地圖</Link></div>
                    <div className="navItem"><Link className="linkClear" to="/startActivity">揪團一起玩</Link></div>
                </nav>                
            </React.Fragment>
        );
    }
}
export default Nav;