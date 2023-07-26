import { useQuery } from 'react-query';

import { getUserShows } from '../../services/users.services';
import classes from './ShowFavCard.module.css'

const ShowFavCard = () => {

    let { data, status } = useQuery('showFavs', getUserShows);

    if (status === 'loading') return <h2>Getting Shows..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className={classes.card}>
        {data &&
            data.map((show, index) => (
                <div key={index} className={classes.div}>
                    <h6 key={index}>Title: <span>{show.title}</span></h6>
                    <p>Episode: <span>{show.episode_number}</span></p>
                    <p>Episode Lenght: <span>{show.episode_length} minutes</span></p>
                    <p>Link: <span>{show.url}</span></p>
                    <button className={classes.DelBtn}>Del</button>
                    <hr></hr>
                </div>
            ))}

    </div >
}

export default ShowFavCard;