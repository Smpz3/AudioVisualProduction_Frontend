import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/App.css'

const Nav = styled.nav`
  width: 100%;
  border-bottom: 3px solid hotpink;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  font-size:25px; 
  margin-top: 10px; 
`; 

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%; 
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Li = styled.li`
  width:200px ;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`;



const items = [ 
    { path: '/pages/', label: 'Home' }, 
    { path: '/pages/shows', label: 'Shows' }, 
    { path: '/pages/characters', label:'Characters' }, 
    { path: '/pages/audios', label: 'Audios' }, 
    { path: '/pages/store', label: 'Store' }, 
]


const Menu = () => {
    return<Nav>
        <Ul>
            <H3 style={{ color: 'var(--secondaryColor)' }}>The Brightside Productions LLC </H3>
            {items.map((items, index) => (
                <Link key={index} to={items.path}>
                    <Li>{items.label}</Li>
                </Link>     
            ))}
        </Ul>
    </Nav>; 
}
export default Menu; 
