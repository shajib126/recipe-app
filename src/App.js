import Pages from "./pages/Pages";
import './App.css'
import styled from "styled-components";
import { Link } from "react-router-dom";

import Catagories from "./components/Catagories";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      
        <Logo to={'/'}>
          <i class="fa-solid fa-utensils"></i>
          <h4>Fresh Food</h4>
        </Logo>
      </Nav>
      <Search/>
      <Catagories/>
      
      <Pages/>
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:400;
  display:flex;
  align-items:center;
  
`
const Nav =styled.div`
  // padding:4rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  i{
    font-size:40px;
  }

`
export default App;
