import styled from "styled-components";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { deleteProfile, getProfile } from "../../services/users.services";
import CharFavCard from "../../components/characters/CharFavCard";
import AudioFavCard from "../../components/audios/AudioFavCard";
import ShowFavCard from "../../components/shows/ShowFavCard";
import ProductsFavCard from "../../components/store/productCard/ProductsFavCard";


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

    if (status === 'loading') return <h2>Getting Profile..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <div className="d-flex">
            <div className="me-5">
                <H2>My Profile</H2>
                <FlexWrapper className="col-12">

                    <Ul key={data.id}>
                        <li>{data.name} {data.surname}</li>
                        <li>{data.email}</li>
                        <li>{data.age}</li>
                        <li>{data.dni}</li>
                        <li>{data.address}</li>
                        <li>{data.phone}</li>
                        <li>{data.password}</li>
                        <Link to={`/profile/edit`}>
                            <EditBtn className="btn">Edit</EditBtn>
                        </Link>
                        <BtnDel className="btn btn-danger" onClick={async () => {
                            await deleteProfile(data.id);
                            refetch();
                        }}>Delete</BtnDel>

                    </Ul>

                </FlexWrapper>
            </div>
            <div className="col-6">
                <H2>My Products</H2>
                <FlexWrapper className="col-12">
                    <div>
                        <h4>Cart</h4>
                        <ProductsFavCard />
                    </div>
                </FlexWrapper>
            </div>
        </div>
        <H2>My Favs</H2>
        <FlexWrapper className="col-12">
            <div className="d-flex">
                <div>
                    <h3>Shows</h3>
                    <ShowFavCard />
                </div>
                <div>
                    <h3>Characters</h3>
                    <CharFavCard />
                </div>
                <div>
                    <h3>Audios</h3>
                    <AudioFavCard />
                </div>
            </div>
        </FlexWrapper>

    </div>
}

export default Profile;