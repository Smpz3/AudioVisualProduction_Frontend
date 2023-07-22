import React from 'react'
import ReactPlayer from 'react-player'; 
import styled from 'styled-components';
import { useQuery } from "react-query";
import {getShows} from '../services/shows.services'

const CenteredPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; 
  border: 2px solid blue;
`;

const Shows = () => {
    

    const { data, status } = useQuery('shows', getShows);

        if (status === 'loading') return <h2>Getting shows...</h2>;
        if (status === 'error') return <h2>Download failed</h2>;

    return ( <CenteredPlayer>
        <h1> Our Shows!</h1> 
        {data.map((show) => (
            <div key={show.id}>
                <h2>{show.title}</h2>
                <ReactPlayer
                    light={true}
                    controls={true}
                    url={show.url}
                    height="500px"
                    width="750px"
                />
            </div>
        ))}
    </CenteredPlayer>
    )
}

export default Shows;