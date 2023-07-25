import { createCharFavs } from '../../services/users.services'
import classes from './CharCard.module.css'

const CharCard = ({ character }) => {



    return <div className={classes.card}>
        <h4>{character.name}</h4>
        <img src={character.image} alt="Character" />
        <button className={classes.addFav} onClick={() => {
            createCharFavs(character.id);
        }}>Add</button>
    </div >
}

export default CharCard;