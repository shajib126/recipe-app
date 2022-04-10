import React, { useEffect, useState } from 'react'
import './Vagies.css'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'


const Vagies = () => {
  const [veggie,setVaggie] = useState([])

  useEffect(()=>{
    getVaggie()
  },[])
  const getVaggie = async()=>{

    const check = localStorage.getItem('veggie')
    if(check){
      setVaggie(JSON.parse(check))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=d66b065043b6480996da2bc04c766405&number=9&tags=vegetarian`)
      const data = await api.json()
      localStorage.setItem('veggie',JSON.stringify(data.recipes))
      console.log(data.recipes);
      setVaggie(data.recipes)
    }
    
    
    
  }
  return (
    <>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide options={{
          perPage:3,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:'5rem'
        }}>
        {
          veggie.map(recipe => (
            <SplideSlide key={recipe.id}>
            <Card>
              <Link to={'/recipe/'+recipe.id}> 
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              </Link>
            </Card>
            </SplideSlide>
          ))
        }
        </Splide>
      </Wrapper>
    
   
    </>
  )
  
}

const Wrapper = styled.div`
  margin:4rem 0rem;
`

const Card = styled.div`
  min-height:25rem;
  border-radius:10px;
  overflow:hidden;
  position:relative:
  img{
    border-radius:2rem;
    postion:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }
  p{
    postion:absolute;
    z-index:10;
    letf:50%;
    bottom:0%;

    transform:translate(-15%,600%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1.5rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;

  } 
  a{
    text-decoration:none;
  }
`

export default Vagies