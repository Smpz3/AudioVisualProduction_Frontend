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
  /* status 0,1,2 en todos 0 todos 1 userloged 2 admin */
  { path: '/', label: 'Home', always: true },
  { path: '/shows', label: 'Shows', always: true },
  { path: '/characters', label: 'Characters', always: true },
  { path: '/audios', label: 'Audios', always: true },
  { path: '/store', label: 'Store', always: true },
  { path: '/register', label: 'Register', logged: false },
  { path: '/login', label: 'Login', logged: false },
  { path: '/usersList', label: 'UsersList', logged: true },
  { path: '/profile', label: 'Profile', logged: true },
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
        {items.filter((item) => item.always).map((item, index) => {
          // console.log(item)
          return <Link key={index} to={item.path}>
            <Li>{item.label}</Li>
          </Link>
        })}
        {items.filter((item) => item.logged !== null).map((item, index) => {
          // console.log(item)
          if (isLogged() === item.logged) {

            return <Link key={index} to={item.path}>
              <Li>{item.label}</Li>
            </Link>
          }
          /* otro filter con item.status===2 */
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
