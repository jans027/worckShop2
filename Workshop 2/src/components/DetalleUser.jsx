
import React, { useEffect, useState } from 'react'
import { ButtonNavBar } from './ButtonNavBar'
import axios from 'axios'

const DetalleUser = () => {


    const id = sessionStorage.getItem("id");
    const[usuario, setusuario]= useState([])

    const[images, setimages]= useState([])
   const mostrarInfo2 = async() => {
      axios.get( `http://localhost:3001/usuarios/${id}`)
      .then(res =>{
          const data=res.data;
          console.log(data)
          setusuario(data);
          setimages(data.imagenesRelacionadas);
      });
  }
  
  useEffect(()=>{
    mostrarInfo2();   
    },[]);



  return (
    <div className="col-12">
    <div className="row">

    <div className="col-12">
    <div className="row">
<div className="container">
<img src={usuario.img} alt=""/>
</div>
 </div>
    </div>

<div className="col-12">
<div className="row">
<div className="container">
<h1 Style="text-align: center; font-size:25px;">{usuario.name}</h1>
</div>
</div>
</div>

<div className="col-12">
<div className="row">
<div className="container text-center" >
<button className="btn btn-primary">follow</button>
<button className="btn btn-primary"Style="margin-left:30px;">Messages</button>
</div>
</div>
</div>

<div className="col-12 mt-3">
<div className="row">
<div className="container">
{
    images.map(image=>(<div Style="justify-content:center;"><img src={image}/></div>))
}
</div>
</div>
</div>



<ButtonNavBar />
    </div>
    </div>
  )
}

export default DetalleUser