import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerUser } from "../../services/admin.services";
import styled from "styled-components";

const Form = styled.form`
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


const Register = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const sendForm = async (values) => {
        const response = await registerUser(values);
        console.log(response);

        if (response.fatal) {
            return alert(response.fatal);
        }

        navigate('/pages/admin/login');
    };

    return <Form onSubmit={handleSubmit(sendForm)} className="col-md-6 col-12 offset-md-3">
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
        <InputBtn className="btn btn-info" type="submit" value="Send" />

    </Form>;
}

export default Register;