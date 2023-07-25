import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { useQuery } from "react-query";
import { getAudios } from '../services/audios.serices';
import React, { useState, useEffect } from 'react';
import FavoriteButton from "../components/audios/audiofav";




const CenteredPlayer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
border: 2px solid lightgreen;
padding: 20px;
  border-radius: 0 50px;
  margin: 10px;
  flex-wrap: wrap;
  gap: 20px;
`;

const AudioPlayerContainer = styled.div`
  width: 100%;
  border: 2px solid lightgreen;
  border-radius: 10px;
  mardon-top: 30px; 
  margin-bottom:50px;
  padding: 5px; 
  `; 
  

const AudioItem = styled.div`
width: 48%;
margin-bottom: 20px;
cursor: pointer;
color: ${(props) => (props.selected ? 'lightgreen' : 'grey')};
`;
const AudioListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
max-width: 800px;
margin-top:20px; 
margin-left: 50px;
`;


const PodcastSection = styled.div`
margin: 20px;
text-align: center;
`;


const CountdownLabel = styled.div`
font-size: 30px;
font-weight: bold;
margin-bottom: 5px;
text-shadow: 0 0 5px pink;
`;


const Countdown = styled.div`
font-size: 25px;
font-weight: bold;
text-shadow: 0 0 5px lightgreen;
`;


const Audios = () => {




    const { data, status } = useQuery('audios', getAudios);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0 });
    const [favorites, setFavorites] = useState([]);
    console.log(data);
    useEffect(() => {
        const targetTime = new Date('2023-09-01T14:00:00-04:00');
        const updateCountdown = () => {
            const currentTime = new Date();
            const timeDiffInSeconds = Math.floor((targetTime - currentTime) / 1000);
            if (timeDiffInSeconds > 0) {
                const days = Math.floor(timeDiffInSeconds / (60 * 60 * 24));
                const hours = Math.floor((timeDiffInSeconds % (60 * 60 * 24)) / 3600);
                const minutes = Math.floor((timeDiffInSeconds % 3600) / 60);


                setRemainingTime({ days, hours, minutes });
            } else {
                setRemainingTime({ days: 0, hours: 0, minutes: 0 });
            }
        };


        updateCountdown();




        const intervalId = setInterval(updateCountdown, 60000);


        return () => clearInterval(intervalId);
    }, []);




    if (status === 'loading') return <h2>Getting audio...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;




    const handleToggleFavorite = (audio) => {
        if (favorites.some((favAudio) => favAudio.url === audio.url)) {
            setFavorites(favorites.filter((favAudio) => favAudio.url !== audio.url));
        } else {
            setFavorites([...favorites, audio]);
        }
        console.log('Updated Favorites:', favorites);
    };




    return (
        <CenteredPlayer>
            <h1 style={{ margin: '10px', }}> Our Songs!</h1>
    <div>
      {selectedAudio && (
        <AudioPlayerContainer>
          <ReactPlayer
            url={selectedAudio}
            controls
            width="100%"
            height="45px"
            config={{
              soundcloud: {
                options: {
                      show_artwork: false 
                }
              }
            }}
            playing 
          />
        </AudioPlayerContainer>
      )}
      <AudioListContainer>
        {data.map((audio) => (
          <AudioItem key={audio.id} selected={selectedAudio === audio.url} onClick={() => setSelectedAudio(audio.url)}>
            <h2>{audio.title}</h2>
            <FavoriteButton isFavorite={favorites.some((favAudio) => favAudio.url === audio.url)} onClick={() => handleToggleFavorite(audio)} />
          </AudioItem>
        ))}
         </AudioListContainer>
            </div>
        <PodcastSection>
            <h2 style={{ color: 'pink', fontSize: '24px', }}>Coming Soon: The Bright-Mind Podcast</h2>
            <p style={{ color: 'lightgreen', fontSize: '15px', }}>Available on Audible, Pandora, iHeart Radio, and more !</p>
            <CountdownLabel>Countdown:</CountdownLabel>
            <Countdown>{remainingTime.days} Days {remainingTime.hours} hours {remainingTime.minutes} minutes</Countdown>
        </PodcastSection>


    </CenteredPlayer>
    );
};


export default Audios;

