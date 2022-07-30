
import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



export const ButtonNavBar = () => {

  const id = sessionStorage.getItem("id");
  const[usuario, setusuario]= useState([])
  
 const mostrarInfo2 = async() => {
    axios.get( `http://localhost:3001/usuarios/${id}`)
    .then(res =>{
        const data=res.data;
        console.log(data)
        setusuario(data);
        
    });
}

useEffect(()=>{
  mostrarInfo2();
  
      
  },[]);


  return (
    <div className="col-12 mt-1">
    <div className="row">
    <div className="container fixed-bottom">
        <nav className="navbar-custom">
            <ul className="navbar-nav-custom">
                <li className="nav-item">
                <Link className="nav-link" to="/wall"><i className='bx bx-home-alt' Style="font-size:24px; "></i></Link>  
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/test"><i className='bx bx-search-alt-2' Style="font-size:24px;"></i></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/test"><i className='bx bxs-bell' Style="font-size:24px; "></i></Link>   
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/detalleuser"><img src={usuario.img} atl="" Style="border-radius:50%; height:30px;width:30px;"/></Link>  
                </li>
    
            </ul>
        </nav>
    </div>
    </div>
    </div>
  )
}

