

import { useQuery } from 'react-query';
import { getUserCharacters } from '../../services/users.services';
import classes from './CharCard.module.css'

const CharFav = () => {

    let { data, status2 } = useQuery('charFavs', getUserCharacters);

    // data = data[0]
    console.log(data);
    return <div className={classes.card}>
        {/* {data && data.name}
        <h4>{data.name}</h4>
        <img src={data.image} alt="Character" /> */}

    </div >
}

export default CharFav;