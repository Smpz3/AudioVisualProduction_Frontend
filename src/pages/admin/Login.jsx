import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUser } from "../../services/admin.services";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const sendForm = async (values) => {
        const response = await loginUser(values);
        console.log(response);
        console.log(values);

        if (response.fatal) {
            return alert(response.fatal);
        }

        // localStorage.setItem('user_token', response.token);

        navigate('/pages/store');
    };


    return <form onSubmit={handleSubmit(sendForm)} className="col-md-6 col-12 offset-md-3">
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                {...register('email')}
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

export default Login;