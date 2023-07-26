import { useQuery } from 'react-query';

import { getUserAudios } from '../../services/users.services';
import classes from './AudioFavCard.module.css'

const AudioFavCard = () => {

    let { data, status } = useQuery('audioFavs', getUserAudios);

    if (status === 'loading') return <h2>Getting Audios..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    console.log(data);
    return <div className={classes.card}>
        {data &&
            data.map((audio, index) => (
                <div key={index}>
                    <h5>Title: <span>{audio.title}</span></h5>
                    <p>Artist: <span>{audio.artist}</span></p>
                    <p>Style: <span>{audio.style}</span></p>
                    <p>Link: <span>{audio.url}</span></p>
                    <p>Program number: <span>{audio.program_id}</span></p>
                    <button className={classes.DelBtn}>Del</button>
                    <hr></hr>
                </div>
            ))}

    </div >
}

export default AudioFavCard;