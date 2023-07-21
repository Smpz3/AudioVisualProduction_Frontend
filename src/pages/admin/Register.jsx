import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerUser } from "../../services/admin.services";



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

    return <form onSubmit={handleSubmit(sendForm)} className="">
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                {...register('name')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
                type="text"
                className="form-control"
                {...register('surname')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Age</label>
            <input
                type="number"
                className="form-control"
                {...register('age')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
                type="text"
                className="form-control"
                {...register('dni')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                {...register('email')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input
                type="text"
                className="form-control"
                {...register('phone')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Address</label>
            <input
                type="text"
                className="form-control"
                {...register('address')}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                {...register('password')}
            />
        </div>
        <input className="btn btn-info" type="submit" value="Send" />

    </form>;
}

export default Register;