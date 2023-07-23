import styled from "styled-components";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../styles/App.css'
import { isLogged } from "../services/admin.services";

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
  { path: '/', label: 'Home', logged: false },
  { path: '/pages/shows', label: 'Shows', logged: false },
  { path: '/pages/characters', label: 'Characters', logged: false },
  { path: '/pages/audios', label: 'Audios', logged: false },
  { path: '/pages/store', label: 'Store', logged: false },
  { path: '/pages/admin/register', label: 'Register', logged: false },
  { path: '/pages/admin/login', label: 'Login', logged: false },
  { path: '/pages/usersList', label: 'UsersList', logged: true },
  { path: '/pages/profile', label: 'Profile', logged: true },
];


const Menu = () => {

  const navigate = useNavigate();

  const onLogout = () => {

    const drop = window.confirm('You are going to logout. Are you sure?');

    if (drop) {
      localStorage.removeItem('user_token');
      navigate('/');
      navigate(0);
    };
  };

  return <div className="container">
    <Nav>
      <Ul>
        <H1 style={{ color: 'var(--secondaryColor)' }}>The Brightside Productions LLC </H1>
        {items.map((items, index) => {
          if (isLogged() === items.logged) {

            return <Link key={index} to={items.path}>
              <Li>{items.label}</Li>
            </Link>
          }
        })}
        {isLogged() && (
          <NavLink onClick={onLogout}>
            <Li>Logout</Li>
          </NavLink>
        )}
      </Ul>
    </Nav>
  </div>
}
export default Menu; 
