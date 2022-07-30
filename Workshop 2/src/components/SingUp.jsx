import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import {Textos1, BotonReguistro,Enlace1, DivBotonForm, Section, Form } from '../styles/StylesGlobal'
// sweat alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




export default class SignUp extends Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            password: '',
            coins: '0'
        }
    }

// envio los datos validos a la base de datos
guardarUsuario = async () => {
  await axios.post(
    "http://localhost:3001/usuarios",
      {
          name: this.state.form.name,
          email: this.state.form.email,
          phone: this.state.form.phone,
          password: this.state.form.password,
          coins: this.state.form.coins,
      })
      .then(response => {
          console.log('Exito')
      })

      
.catch(error => {
          console.log('Eoooo')
          console.log(error);
      })

}

    
    // capturo los datos del ususraio en tiempo real
    userChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form)
    }

    // valido que los campos no esten vacios de lo contrario envio a la funcion guardarUsuario
    validacion = async (e) => {
        e.preventDefault()
        let valido = true;
        if (this.state.form.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.email === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.phone === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (this.state.form.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son Obligatorios!',
            })
            return valido = false
        } if (valido) {
            this.guardarUsuario(this.state.form)
            MySwal.fire({
                title: <strong>Good job!</strong>,
                html: <i>Usuario creado correctamente</i>,
                icon: 'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    window.location.href = "/SignIn";
                } 
            })
        }
    }

    // enexport default class SignIn  extends Component {

    state={
        form:{
            phone:'',
            password:''
        }
    }

    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        // console.log(this.state.form)
    }

    handleLogin = async(e) =>{
        e.preventDefault()
        
        await axios.get(
          "http://localhost:3001/usuarios",
            {params:{
                phone: this.state.form.phone, 
                password: this.state.form.password 
            }   
            }
            )
            .then(response=>{
                return response.data
                // console.log(response.data)
                
            })
            .then(response=>{
                if(response.length === 1){
                    let usuario = response[0];
                    // console.log(usuario)
                    sessionStorage.setItem('email',usuario.email);
                    sessionStorage.setItem('name',usuario.name);
                    sessionStorage.setItem('phone',usuario.phone);
                    sessionStorage.setItem('coins',usuario.coins);
                    sessionStorage.setItem('id',usuario.id);
                    MySwal.fire({
                        title: <strong>Good job!</strong>,
                        html: <i>Welcome Back</i>,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = "/login";
                        } 
                    })
                }else{
                    MySwal.fire({
                        title: <strong>Oops...</strong>,
                        html: <i>Usuario o Clave Incorrecto</i>,
                        icon: 'error'
                    })
                }
            })
            .catch(e=>{
                console.log('Eoooo')
                console.log(e);
            })
    }


    render() {
        return (
            <Section>
                <Form>
                <form onSubmit={this.validacion}>
                    <Textos1>
                        <h2>Create new Account</h2>
                        <p>
                            Create a new account by filling in all the
                            fields or log in to an existing account
                        </p>
                    </Textos1>
                    <input
                        name="name"
                        type="name"
                        placeholder="Name"
                        onChange={this.userChange}
                        required />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.userChange}
                        required />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        onChange={this.userChange}
                        required />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.userChange}
                        required />
                    <BotonReguistro>
                        <Enlace1>
                            <Link
                                type="submit"
                                onClick={this.validacion}
                                to="/login">Next
                            </Link>
                        </Enlace1>
                    </BotonReguistro>
                </form>
                </Form>
            </Section>
        )
    }
}

