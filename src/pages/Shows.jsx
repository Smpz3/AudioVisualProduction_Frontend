//import React from 'react'
import ReactPlayer from 'react-player'; 
import styled from 'styled-components';
import { useQuery } from "react-query";
import {getShows} from '../services/shows.services'
import React, { useState } from 'react'; 

const CenteredPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; 
  border: 2px solid blue;
`;
const ShowList = styled.div` 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    align-items:center;
`; 
const ShowItem = styled.div`
margin:10px; 
cursor: pointer; 
`; 

const Shows = () => {
    

    const { data, status } = useQuery('shows', getShows);
    const [selectedVideo, setSelectedVideo] = useState(null);

    if (status === 'loading') return <h2>Getting shows...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;
    const handleVideoSelect = (url) => {
        setSelectedVideo(url);
    };

    return (<CenteredPlayer>
        <h1 style = {{ margin: '10px', }} > Our Shows!</h1>
        {selectedVideo && (
            <ReactPlayer
                light={true}
                controls={true}
                url={selectedVideo}
                height="500px"
                width="750px"
            />
        )}
        <ShowList>
            {data.map((show) => (
                <ShowItem key={show.id} onClick={() => handleVideoSelect(show.url)}>
                    <h2 style = {{ color: 'silver', fontSize: '24px', }} >{show.title}</h2>
                </ShowItem>

            ))}


        </ShowList>
    </CenteredPlayer>
    );
};

export default Shows;