import { SoundPlayer, Track } from 'react-soundplayer';
import styled from 'styled-components';
import { useQuery } from "react-query";
import { getAudios } from '../services/audios.serices'; 
import React, { useState, useEffect } from 'react';

const CenteredPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; 
  border: 2px solid lightgreen;
`;
const AudioPlayer = styled.audio`
width: 100%; 
max-width: 750px; 
margin: 30px; 
`; 
/*const AudioList = styled.div` 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    align-items:center;
`;*/
const AudioItem = styled.div`
width: 48%;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${(props)=> (props.selected ? 'lightgreen': 'grey')}; 
`;
const AudioListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 800px;
  margin-left: 50px; 
`;

const PodcastSection = styled.div`
  margin: 20px;
  text-align: center;
`;
/*const PodcastHeading = styled.div`
font-si
`;*/  

const CountdownLabel = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0 0 10px pink;
`;

const Countdown = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-shadow: 0 0 10px lightgreen;
`;


const Audios = () => {


    const { data, status } = useQuery('audios', getAudios);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [remainingTime, setRemainingTime] = useState({days:0, hours:0, minutes: 0}); 

    useEffect(() => {
        const targetTime = new Date();
        targetTime.setDate(targetTime.getDate() + 30); 
        
        
        const updateCountdown = () => {
            
            const currentTime = new Date();
            const timeDiffInSeconds = Math.floor((targetTime - currentTime) / 1000);
            const days = Math.floor(timeDiffInSeconds / (60 * 60 * 24));
            const hours = Math.floor(timeDiffInSeconds / 3600);
            const minutes = Math.floor((timeDiffInSeconds % 3600) / 60);

            setRemainingTime({ days, hours, minutes });
        };
        updateCountdown();

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);


    if (status === 'loading') return <h2>Getting audio...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;


    const handleAudioSelect = (url) => {
        setSelectedAudio(url);
    };

    return (<CenteredPlayer>
        <h1> Our Songs!</h1>
        {selectedAudio && (
            <AudioPlayer controls>
            <source src={selectedAudio} type="audio/mp3"/> 
            </AudioPlayer>
        )}
        <AudioListContainer>

            {data.map((audio) => (
                <AudioItem key={audio.id}
                    selected={selectedAudio === audio.url}
                    onClick={() => handleAudioSelect(audio.url)}>
                    <h2>{audio.title}</h2>
                </AudioItem>
            ))}


        </AudioListContainer>
        <PodcastSection>
            <h2 style={{ color: 'pink', fontSize: '24px', }}>Coming Soon: The Bright-Mind Podcast</h2>
            <p style={{ color: 'lightgreen', fontSize: '15px', }}>Only on Spotify</p>
            <CountdownLabel>Countdown:</CountdownLabel>
            <Countdown>{ remainingTime.days} Days {remainingTime.hours} hours { remainingTime.minutes} minutes</Countdown>
        </PodcastSection>

    </CenteredPlayer>
    );
};

export default Audios;