import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { loginUser } from "../../services/admin.services";

const Form = styled.form`
    margin-top:50px;
    color: var(--mainColorLight);
    margin-bottom: 250px;
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


const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const sendForm = async (values) => {
        const response = await loginUser(values);

        if (response.fatal) {
            return alert(response.fatal);
        }

        localStorage.setItem('user_token', response.token);
        navigate('/store');
    };


    return <Form onSubmit={handleSubmit(sendForm)} className="col-md-6 col-12 offset-md-3">
        <div className="mb-3">
            <label className="form-label">Email</label>
            <Input
                type="email"
                className="form-control"
                {...register('email')}
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
        <InputBtn className="btn btn-info" type="submit" value="Send" />

    </Form>
};

export default Login;