import React from 'react';
import styled from 'styled-components';


const FavoriteButtonStyled = styled.button`
  
    padding: 10px 5px;
    background-color: var(--mainColor);
    border-radius: 0 50px 0 50px;
    width: 20%;
    color: ${(props) => (props.isFavorite ? 'pink' : 'grey')};
    cursor: pointer;
`;

const FavoriteShowButton = ({ isFavorite, onClick }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick();
    };

    return <FavoriteButtonStyled isFavorite={isFavorite} onClick={handleClick}>{isFavorite ? 'My Fav' : 'Add'}</FavoriteButtonStyled>;
};

export default FavoriteShowButton;