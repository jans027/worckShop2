import styled from "styled-components";
//import { FormLabel, Radio, Spinner } from "@chakra-ui/react";
// import basic from '../images/basic.png'
// import advance from '../images/advance.png'

export const Form = styled.div`
        form{
        text-align: center;
        margin-top: 6em;
        & h2, p{
                margin: 0 auto;
                padding: .3em 0 ;
                text-align: left;
                width: clamp(270px, 60vw, 600px);
        }
        & input{
                width: clamp(270px, 60vw, 600px);
                padding: 1em;
                border-radius: 1.2em;
                margin: .5em;
                border: 1px solid aquamarine;
                :focus{
                        outline: unset;
                        border: 1px solid blueviolet;
                }
        }
}`
export const Textos1 = styled.div`
        line-height: 1.5em;
        width: 80%;
        margin: auto;
        padding: 0 1em 1.5em;`


export const BotonReguistro = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    padding: 5em 0 0 0;`

    export const Enlace1 = styled.span`
        width: 100%;
        margin: 18vh auto;
        max-width: 600px;
        text-align: center;
        margin-bottom: 1.5em;
        a{
                text-decoration: none;
                color: black;
                background-color: aquamarine;
                padding: 1em 40%;
                border-radius:1.5em;
        }`

        export const DivBotonForm = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 8em;
        padding: 5em 0 0 0;
        input{
                cursor: pointer;
                background-color: #7FFFD4;
        }
        button{
                background-color: aquamarine;
                width: clamp(270px, 60vw, 600px);
                padding: 1em;
                border-radius: 1.2em;
                border: none;
                cursor: pointer;
                margin: auto;
        }
        p{
                display: flex;
                justify-content: center;
                margin-bottom: 5em;
                a{
                        text-decoration: none;
                        padding: 0 .8em;
                        color: blueviolet;
                        border: none;
                        :hover{
                                color: blue;
                        }
                }
        }`

        export const Section = styled.section`
        display: flex;
        flex-direction:column;
        justify-content: center;
        padding:20vh 0 0 0;
        height:100fr;
        width: max(43ch, 80%);
        margin: 5em auto;
        border-radius: 1.2em;
        border: 1px solid aquamarine;`

export const NavBarStyled = styled.nav `
    height: 130px;
    width:100%;
    display: flex;
    justify-content: space-arround;
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
    margin-top: -20px;
    border-bottom-left-radius:50px;
    border-bottom-right-radius: 50px;
` 

export const NavBarStyled1 = styled.nav `
    height: 40px;
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:10px;
    font-size:22px;
   
` 

export const DivForm = styled.div`
display: grid;
grid-auto-flow: column;
gap: 1rem;

overscroll-behavior-x: contain;
scroll-snap-type: x mandatory;
scrollbar-width: none;
::-webkit-scrollbar {
    display: none;
}
`
// export const ImgIntro1 = styled.div`
// background: url(${basic});
// border-radius: 10%;
// background-repeat: no-repeat;
//     width: 270px;
//     height: 220px;
//     background-size: cover;
//     background-position: center;
//     margin-top:10px;
 
// `
export const Producto=styled.div`
height:500px;
width: 500px;

`
// export const ImgIntro2 = styled.div`
// background: url(${advance});
// border-radius: 10%;
// background-repeat: no-repeat;
//     width: 270px;
//     height: 220px;
//     objet-fit: cover;
//     scroll-snap-align: start;
  
//     background-size: cover;
//     background-position: center;
//     margin-top:10px;
   
// `

export const Titulo = styled.h1`
    padding: 1rem ;
    text-align: center;
    margin: 0;
`

export const ButtonStyled = styled.button`
background-color: #8e44ad;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.3rem;
    color: white;
    &:hover {
        background-color: #732d91;
    }
    &:focus {
        outline: none;
        background-color: #5e3370;
    }`
   
   
   export const SpinnerStyled = styled.div`
        with: 100%;
        height: 90vh;
        background-color: #FFF;
        display: flex;
        justify-content:center;
        margin: 20%;
   `

   export const ContainerStyled = styled.div`
   background-color: #FFF;
   border-radius: 10px;
   box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
   width: 80%;
   padding: 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`
