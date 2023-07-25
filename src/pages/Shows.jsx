import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { useQuery } from "react-query";
import React, { useState } from 'react';

import { getShows } from '../services/shows.services'
import FavoriteShowButton from '../components/shows/showfav'

const CenteredPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; 
  border: 2px solid blue;
  padding: 20px;
  border-radius: 0 50px;
  margin: 10px;
  flex-wrap: wrap;
  gap: 20px;
    
`;
const ShowList = styled.div` 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;
const ShowListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShowItem = styled.div`
margin:10px; 
cursor: pointer; 
margin-bottom:20px; 
color: ${props => (props.isSelected ? 'blue' : 'silver')};
`;

const CenteredFavoriteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shows = () => {


    const { data, status } = useQuery('shows', getShows);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [favorites, setFavorites] = useState([]);

    if (status === 'loading') return <h2>Getting shows...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    const handleVideoSelect = (url) => {
        setSelectedVideo(url);
    };

    const handleToggleFavorite = (show) => {
        if (favorites.some((favShow) => favShow.url === show.url)) {
            setFavorites(favorites.filter((favShow) => favShow.url !== show.url));
        } else {
            setFavorites([...favorites, show]);
        }
        console.log('Updated Favorites:', favorites)
    };


    return (<CenteredPlayer>
        <h1 style={{ margin: '10px', }} > Our Shows!</h1>
        {selectedVideo && (
            <ReactPlayer
                light={true}
                controls={true}
                url={selectedVideo}
                height="500px"
                width="750px"
            />
        )}
        <ShowListContainer>
            <ShowList>
                {data.map((show) => (
                    <ShowItem key={show.id}
                        onClick={() => handleVideoSelect(show.url)}
                        isSelected={selectedVideo === show.url}
                    >
                        <h2 style={{ fontSize: '24px' }}>{show.title}</h2>
                        <CenteredFavoriteButton>
                            <FavoriteShowButton
                                isFavorite={favorites.some((favShow) => favShow.url === show.url)}
                                onClick={() => handleToggleFavorite(show)}
                            />
                        </CenteredFavoriteButton>



                    </ShowItem>

                ))}


            </ShowList>
        </ShowListContainer>
    </CenteredPlayer>
    );
};

export default Shows;