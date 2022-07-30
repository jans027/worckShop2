import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonNavBar } from './ButtonNavBar'





const Wall = () => {
const[Usuarios, setUsuarios]= useState([])





const mostrarInfo = async() => {
    axios.get( "http://localhost:3001/usuarios")
    .then(res =>{
        const data=res.data;
        console.log(data)
        setUsuarios(data);
    });
}


useEffect(()=>{
mostrarInfo();

    
},[]);


  return (
  
<div className="col-12">
<div className="row">


<div className="col-12">
<div classname="row">

<div className="col-6" Style="font-size:15px; text-align:center;">
<h5>9:41</h5>
</div>

<div className="col-6" Style="font-size:20px; text-align:center; margin-left:290px; margin-top:-20px;">
<i className='bx bx-signal-4'></i>
<i className='bx bx-wifi'></i>
<i className='bx bxs-battery-full'></i>
</div>
</div>
</div>

 <div className="col-12">
            <div className="row">

                <div className="slides">
                {
                    Usuarios.map(elemento=>(
                    <img src={elemento.img} alt=" " />
                    ))}
                </div>
            </div>
        </div>
        
        {
            Usuarios.map(elemento=>(
       
                
                    <div className="col-12 mt-4" Style="background-color:white;">
                        <div className="container d-flex" Style="flex-direction:row; margin-left:-100px; justify-content:center">
                            <img src={elemento.img} alt="" Style="border-radius:50%; height:20px;width:20px;" /><span>{elemento.name}</span>
 
 
 
 
 
                            </div>


<div className="col-12" Style="margin-left:40px;">                           
<div className="row">
<div className="container d-flex" Style=" justify-content:center; text-align:center;">
<img src={elemento.img} alt="" Style="height:300px; width:380px;" />
</div>

<div className="col-12" Style="font-size:20px;">
<div className="row d-flex" Style="margin-left:17%; justify-content:center; margin-right:20%; text-align:start;">
<p>{elemento.name} It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. {elemento.coments.map(coment=>(<h2 Style="text-align:start; justify-content:start;">{coment}</h2>))}</p>

</div>
</div>

                    </div>
                    </div>           
                    </div>
  ))
}
 

<ButtonNavBar />
   </div>
  </div>

  )
}

export default Wall