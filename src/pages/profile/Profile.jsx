import styled from "styled-components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { deleteProfile, getProfile, getUserCharacters } from "../../services/users.services";

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

const Ul = styled.ul`
    list-style: square;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const EditBtn = styled.button`
    color: var(--mainColorLight);
    padding: 10px 5px;
    background-color: var(--mainColor);
    border-color: var(--secondaryColor);
    border-radius: 0 50px 0 50px;
    width: 100%;
    :hover{
        background-color: var(--secondaryColor);
        color: var(--mainColor);    
    }    
`;

const BtnDel = styled.button`
    color: var(--textColor);
    padding: 10px 5px;
    background-color: var(--mainColor);
    border-radius: 0 50px 0 50px;
    width: 100%;
`;

const Profile = () => {

    const { data, status, refetch } = useQuery('profile', getProfile);
    /* const { data2, status2 } = useQuery('charFavs', getUserCharacters); */


    if (status === 'loading') return <h2>Getting Characters..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <H2>My Profile</H2>
        <FlexWrapper className="col-6">

            <Ul key={data.id}>
                <li>{data.name} {data.surname}</li>
                <li>{data.email}</li>
                <li>{data.age}</li>
                <li>{data.dni}</li>
                <li>{data.address}</li>
                <li>{data.phone}</li>
                <li>{data.password}</li>
                <Link to={`/profile/edit/${data.id}`}>
                    <EditBtn className="btn">Edit</EditBtn>
                </Link>
                <BtnDel className="btn btn-danger" onClick={async () => {
                    await deleteProfile(data.id);
                    refetch();
                }}>Delete</BtnDel>

            </Ul>

        </FlexWrapper>
        <H2>My Favs</H2>
        <FlexWrapper className="col-6">
            <div>
                <h3>Shows</h3>
                <div>
                </div>
                <h3>Characters</h3>
                <div>
                </div>
                <h3>Audios</h3>
                <div>
                </div>
            </div>
        </FlexWrapper>


    </div>
}

export default Profile;