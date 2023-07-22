import { useQuery } from "react-query";
import { getUsers } from "../services/admin.services";

const Profile = () => {

    const { data, status } = useQuery('clientes', getUsers);

    if (status === 'loading') return <h2>Getting shows...</h2>;
    if (status === 'error') return <h2>Download failed</h2>;

    return <div>Users list:{status}, {data && data.length} clients
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>DNI</th>
                    <th>Address</th>
                    <th>Phone</th>
                    {/* <th>Password</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.dni}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        {/* <td>{user.password}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

}

export default Profile;