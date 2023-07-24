import styled from "styled-components";
import { useQuery } from "react-query";
import { getProfile } from "../../services/users.services";
import { Link } from "react-router-dom";

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

    /* const { empleadoId } = useParams(); */
    /* console.log(empleadoId) */

    const { data, status } = useQuery('profile', getProfile);
    /* console.log(data) */
    if (status === 'loading') return <h2>Getting Characters..</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <H2>My Profile</H2>
        <FlexWrapper className="col-6">
            {data &&
                data.map(user => (
                    <ul key={user.id}>
                        <li>{user.name} {user.surname}</li>
                        <li>{user.email}</li>
                        <li>{user.age}</li>
                        <li>{user.dni}</li>
                        <li>{user.address}</li>
                        <li>{user.phone}</li>
                        <li>{user.password}</li>
                        <li>FAVS</li>
                        <Link to={`/profile/edit/${user.id}`}>
                            <EditBtn className="btn">Edit</EditBtn>
                        </Link>
                        <BtnDel className="btn btn-danger">Delete</BtnDel>

                    </ul>
                ))}
        </FlexWrapper>
    </div>
}

export default Profile;