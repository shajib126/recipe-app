import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Catagories = () => {
  return (
    <List>
        <Slink to={"/cuisine/Italian"}>
            <i style={{fontSize:'20px', color:"white"}} class="fa-solid fa-pizza-slice"></i>
            <h4>Italian</h4>
        </Slink>
        <Slink to={"/cuisine/American"}>
            <i style={{fontSize:'30px', color:"white"}} class="fa-solid fa-burger"></i>
            <h4>American</h4>
        </Slink>
        <Slink to={"/cuisine/Thai"}>
            <i style={{fontSize:'30px', color:"white"}} class="fa-solid fa-bowl-food"></i>
            <h4>Thai</h4>
        </Slink>
        <Slink to={"/cuisine/Japanese"}>
            <i style={{fontSize:'30px', color:"white"}} class="fa-solid fa-bowl-rice"></i>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    margin:1rem;
    width:40%;
    margin:auto;
    justify-content:space-between;

`
const Slink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:50%;
    text-decoration:none;
    background:linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    align-items:center;
    transition:ease 0.5s;
    h4{
        color:white;
    }
    &.active{
        background:linear-gradient(to right, #f27121, #e94057);
    }

`
export default Catagories