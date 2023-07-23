import { useParams } from "react-router";
import { getById } from "../../services/users.services";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { getUsers } from "../../services/admin.services";

const UpdateProfile = () => {


    const { userID } = useParams();
    console.log(userID);
    // const { data, status } = useQuery('updateProfile', getById(userID));



    return <div>{userID}</div>
}

export default UpdateProfile;