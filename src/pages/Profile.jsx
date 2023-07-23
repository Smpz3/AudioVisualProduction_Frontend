import styled from "styled-components";
import { useQuery } from "react-query";
import { getProfile } from "../services/users.services";

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
                        <button>Edit</button>
                    </ul>
                ))}
        </FlexWrapper>
    </div>
}

export default Profile;