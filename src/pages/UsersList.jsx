import { useQuery } from "react-query";
import { getUsers } from "../services/admin.services";
import styled from "styled-components";

const Table = styled.table`
margin: 0 auto;
width: 90%;
    color: var(--mainColorLight);
    background-color: var(--secondaryColor);
    th{
        color: var(--textColor);
    }
    td {
    width: 20%;
    }
    tr{
        height:25px;
    }
`;

const H2 = styled.h2`
color: var(--secondaryColor);
margin: 30px;
`;


const UsersList = () => {

    const { data, status } = useQuery('usersList', getUsers);

    if (status === 'loading') return <h2>Getting shows...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div className="container">
        <H2>Users {data && data.length}</H2>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>DNI</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.name} {user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.dni}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>

}

export default UsersList;