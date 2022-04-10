
import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input,setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler = e =>{
        e.preventDefault()
        navigate('/searched/'+input)

    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin:3rem auto;
        div{
            position:relative;
            width:100%;
        }
        
  
  
    input{
        width:80%;
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;

    }
    i{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
    }
`
export default Search