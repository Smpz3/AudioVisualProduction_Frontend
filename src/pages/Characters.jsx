import styled from "styled-components";
import { useQuery } from "react-query";
import { getCharacters } from "../services/characters.services";
import CharCard from "../components/characters/CharCard";


const FlexWrapper = styled.div`
    background-color: var(--mainColor);
    color: var(--textColor);
    padding: 20px;
    border: 1px solid var(--secondaryColor);
    border-radius: 0 50px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center
`;

const H2 = styled.h2`
    padding-left: 30px;
    color: var(--secondaryColor);
    margin: 30px 0;
`;

const Characters = () => {

    const { data, status } = useQuery('characters', getCharacters);

    if (status === 'loading') return <h2>Getting Characters..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <H2>Meet Our Characters</H2>
        <FlexWrapper className="col-12">
            {data &&
                data.map((char, index) => (
                    <CharCard
                        key={index}
                        character={char}
                    />
                ))}
        </FlexWrapper>
    </div>
}

export default Characters;