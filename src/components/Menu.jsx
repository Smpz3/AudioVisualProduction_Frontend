import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css'

const Nav = styled.nav`
  width: 100%;
  border-bottom: 3px solid hotpink;
  margin-bottom: 10px;
`;
const H1 = styled.h1`
  font-size: 50px; 
  margin-top: 10px; 
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%; 
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Li = styled.li`
  width:  auto;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover{
    color:var(--mainColorLight);
    border-bottom: 1px solid var(--secondaryColor);
  }
`;



const items = [
  { path: '/pages/', label: 'Home' },
  { path: '/pages/shows', label: 'Shows' },
  { path: '/pages/characters', label: 'Characters' },
  { path: '/pages/audios', label: 'Audios' },
  { path: '/pages/store', label: 'Store' },
  { path: '/pages/admin/register', label: 'Register' },
  { path: '/pages/admin/login', label: 'Login' },
  { path: '/pages/usersList', label: 'UsersList' },
  { path: '/pages/profile', label: 'Profile' },
]


const Menu = () => {
  return <div className="container">
    <Nav>
      <Ul>
        <H1 style={{ color: 'var(--secondaryColor)' }}>The Brightside Productions LLC </H1>
        {items.map((items, index) => (
          <Link key={index} to={items.path}>
            <Li>{items.label}</Li>
          </Link>
        ))}
      </Ul>
    </Nav>;
  </div>
}
export default Menu; 
