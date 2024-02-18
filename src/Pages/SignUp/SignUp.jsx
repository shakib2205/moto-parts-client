import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser ,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
                console.log("user profile info updated")
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .catch(error => console.log(error))
        })
    };

    return (
        <>
            <Helmet>
                <title>Moto || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-[450px] bg-slate-300 shadow-2xl max-w-sm ">
                        <h2 className="text-center mt-6 text-3xl">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" {...register("name", { required: "Name is required" })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: "URL is required" })}  placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">{errors.photoURL.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: "Email is required" })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" }, maxLength: { value: 20, message: "Password must not exceed 20 characters" } })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center text-sky-700 mb-4"><small>Already have an account? <Link className="font-bold" to='/login'>Please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
