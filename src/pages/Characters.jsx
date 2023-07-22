import styled from "styled-components";
import { useQuery } from "react-query";
import { getCharacters } from "../services/characters.services";
import styles from '../styles/characters.css'

const FlexWrapper = styled.div`
    background-color: whitesmoke;
    padding: 20px;
    border: 1px solid black;
    border-radius: 0 50px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center
`;

const Characters = () => {

    const { data, status } = useQuery('characters', getCharacters);

    if (status === 'loading') return <h2>Getting Characters...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <h2>Characters</h2>
        <FlexWrapper className="col-12">
            {data &&
                data.map((char, index) => (
                    <FlexWrapper key={index}>
                        <h4>{char.name}</h4>
                        <img src={char.image} alt="Character" />
                        <p>{char.program_id}</p>
                        <button className="btn btn-info">Fav</button>
                    </FlexWrapper>
                ))}
        </FlexWrapper>
    </div>
}

export default Characters;