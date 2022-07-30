import React, { Component } from 'react';
import { NavBarStyled } from '../styles/StylesGlobal';
import {Link, NavLink} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            

            <div className="col-12 fixed-top mt-3" >
            <div className="row">
            <NavBarStyled>
            
            <div className="col-6" Style="font-size:15px; text-align:center;">
            <h5>9:41</h5>
            </div>
            
            <div className="col-6" Style="font-size:20px; text-align:center;">
            <i className='bx bx-signal-4'></i>
            <i className='bx bx-wifi'></i>
            <i className='bx bxs-battery-full'></i>
            </div>
            
            
            <div className="col-6" Style="text-align:center;">
            <h1 Style="margin-left:10px; font-size:20px; font-weight:bold;">Hi, David</h1>
            <h6 Style="margin-left:40px;font-weight:400;">Lets start learnning</h6>
            </div>
            <div className="col-6" Style="text-align:center;">
            <i className='bx bxl-bitcoin' Style="margin-right:3px; color:orange;font-size:20px;"></i>
            <span>400</span>
            <i className='bx bx-bell' Style="margin-left:40px;font-size:25px;"></i>
            </div>
            
            </NavBarStyled>
            
            </div>
            </div>

        );
    }
}

export default NavBar;