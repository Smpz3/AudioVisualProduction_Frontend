import { useQuery } from 'react-query';

import { getUserCharacters } from '../../services/users.services';
import classes from './CharFavCard.module.css'

const CharFavCard = () => {

    let { data, status } = useQuery('charFavs', getUserCharacters);

    if (status === 'loading') return <h2>Getting Characters..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className={classes.card}>
        {data &&
            data.map((char, index) => (
                <div key={index}>
                    <h5>{char.name}</h5>
                    <img src={char.image} alt="Character" />
                    <p>Program number: <span>{char.program_id}</span></p>
                    <button className={classes.DelBtn}>Del</button>
                </div >))}
    </div >
};

export default CharFavCard;