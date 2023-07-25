import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { getById, updateUser } from "../../services/users.services";


const Form = styled.form`
    margin-top:50px;
    color: var(--mainColorLight);
`;

const Input = styled.input`
    border-radius: 0 20px 0 20px;
`;

const InputBtn = styled.input`
    color: var(--textColor);
    padding: 10px 5px;
    background-color: var(--mainColor);
    border-radius: 0 50px 0 50px;
    width: 50%;
    :hover{
        background-color: var(--secondaryColor);
        color: var(--mainColor);    
        font-weight: bold;
    }    
`;


const UpdateProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const { userID } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getById(userID)
            .then((data) => {
                [data] = data;
                reset(data);
            })
            .catch(error => console.log(error));

    }, []);



    const sendForm = async (values) => {

        const data = await updateUser(userID, values);

        if (data.error) {
            // Error management
            alert('Error in the edition, check your data.');
        };

        // Success edition management
        alert('Updated successfully :)');

        navigate('/profile');
        navigate(0);
    }


    return <div><Form onSubmit={handleSubmit(sendForm)} className="col-md-6 col-12 offset-md-3">
        <div className="mb-3">
            <label className="form-label">Name</label>
            <Input
                type="text"
                className="form-control"
                {...register('name')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Surname</label>
            <Input
                type="text"
                className="form-control"
                {...register('surname')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Age</label>
            <Input
                type="number"
                className="form-control"
                {...register('age')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">DNI</label>
            <Input
                type="text"
                className="form-control"
                {...register('dni')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <Input
                type="email"
                className="form-control"
                {...register('email')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Phone number</label>
            <Input
                type="text"
                className="form-control"
                {...register('phone')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Address</label>
            <Input
                type="text"
                className="form-control"
                {...register('address')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <Input
                type="password"
                className="form-control"
                {...register('password')}
            />
        </div>
        <InputBtn className="btn btn-info" type="submit" value="Accept Changes" />

        <InputBtn className="btn btn-danger" value="Delete my user" />

    </Form></div>
}

export default UpdateProfile;