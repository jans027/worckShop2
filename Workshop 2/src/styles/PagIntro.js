import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
import img1 from '../images/Svg.png'
import basic from '../images/basic.png'
import advance from '../images/advance.png'

export const ButtonIntro = styled.button`

text-align: center;
justify-content: center;
aling-items: center;
font-size:14px;
font-weight:500;
border:none;
width: 358px;
height: 44px;
margin-top:120px;
position:relative;
color:rgba(75, 75, 75, 1);
background: #B0C3FD;
border-radius: 15px;
`

export const ButtonIntro2 = styled.button`
font-size:14px;
font-weight:500;
border:none;
text-align: center;
justify-content: center;
width: 358px;
height: 44px;
top: 200px;
color:rgba(75, 75, 75, 1);
background:  linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
border-radius: 15px;
margin-left:0px;
`

export const ButtonIntro1 = styled.button`

text-align: center;
justify-content: center;
aling-items: center;
font-size:14px;
font-weight:500;
border:none;
width: 358px;
height: 44px;
margin-top:20px;
position:relative;
color:rgba(75, 75, 75, 1);
background: #B0C3FD;
border-radius: 15px;

`
export const ImgIntro = styled.div`
background: url(${({Image}) => Image && Image}) center;
height:250px;
width:250px;
background-repeat: no-repeat;
margin-top:150px;
margin-left:60px;
margin:10px
justify-content: center;
`

export const TextIntro= styled.div`
display:flex;
flex-direction: column;

h2{ 
text-align: center;
justify-content: center;
margin-top: 100px;
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #4B4B4B;
}
h6{   
margin-left: 50px;
margin-right: 30%;
justify-content: center;
top: 80%;
bottom: 25.71%;
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #4B4B4B; 
}
`

export const Singupfrm= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;

`
export const Form= styled.form`
margin-top:30px;
text-align: center;
justify-content: center;
`
export const InputContainer= styled.div`
  position:relative;
    height: 45px;
    width: 90%;
    margin-bottom: 17px;
    text-align: center;
    
`

export const Input1= styled.input`
position: relative;
width: 358px;
height: 44px;
border: 1px solid #B0C3FD;
border-radius: 7px;
font-size: 16px;
padding: 0 20px;
outline: none;
background: none;
z-index: 1;
&:focus{ top: -7px;
    border-color:  #39ff14;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color:rgba(191, 195, 252, 1);
    }
    &:not(:placeholder-shown){top: -7px;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;}

`
export const Label= styled.label`
position: absolute;
text-align: center;
    top: 15px;
    margin-left: 30px;
    padding: 0 4px;
    background-color: white;
    color: #B0C3FD;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
    &:focus{ top: -7px;
       border-color:   #39ff14;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;
        color:rgba(191, 195, 252, 1);}
   &:not(:placeholder-shown){top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;}

`


const Image = ({Image}) => {
    return(
        <ImgIntro Image={Image}></ImgIntro>
    )
    }
    
    export default Image;