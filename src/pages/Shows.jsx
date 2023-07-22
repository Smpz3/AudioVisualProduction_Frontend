import React from 'react'
import shows from '../components/services/shows.services'; 
import ReactPlayer from 'react-player'; 
import styled from 'styled-components';


const CenteredPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; 
  border: 2px solid blue;
`;

const Shows = () => {
    return ( <CenteredPlayer>
        <h1> Our Shows</h1> 
    <ReactPlayer
        light={true}
        controls={true}
        url={"https://www.youtube.com/watch?v=c9G36djAH88"}
        height="500px"
        width="750px"
    />
    </CenteredPlayer>
    )
}

export default Shows;