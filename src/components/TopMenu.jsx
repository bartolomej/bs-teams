import React, { Component } from 'react'
import '../styles/TopMenu.scss'
import bslogo from '../res/img/bs_power_bel_croped.png'
import { Link } from 'react-router-dom';

class TopMenu extends Component{
    render(){
        return (
            <div className="topBar">
                <div className="innerBarWrapper">
                    <div className="innerBar">
                        <div className="topBarBlock">
                            <img className="bslogo" src={bslogo} alt="Business Solutions logo"/>
                        </div>
                        <div className="topBarBlock">
                            <div className="topLinkWrapper">
                                <Link className="topLink" to="/">Domov</Link>
                            </div>
                        </div>
                        <div className="topBarBlock linkLonger">
                            <div className="topLinkWrapper">
                                <Link className="topLink" to="/features">Opis produkta</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopMenu;