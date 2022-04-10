import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Searched = () => {
    const [searchedRecipe,setSearchedRecipe] = useState([])
    let params = useParams()
    const getSearched = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d66b065043b6480996da2bc04c766405&query=${name}`)
        const recipes =await data.json()
        console.log(recipes.results);
        setSearchedRecipe(recipes.results)
    }

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
  return (
    <Grid>
        {
            searchedRecipe.map(item => {
                return(
                    <Card key={item.id}>
                        <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })
        }
    </Grid>
  )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
    margin-top:3rem;
`
const Card = styled.div`

        img{
            width:100%;
            border-radius:2rem;
        }
        a{
            text-decoration:none;
        }
        h4{
            text-align:center;
            padding:1rem;
        }
`
export default Searched