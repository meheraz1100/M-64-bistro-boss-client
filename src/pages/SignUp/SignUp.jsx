import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const {createUser,updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              console.log('user profile info update');
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User successfully created!!!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            })
            .catch(error => console.log(error))
        })
    }

    // console.log(watch("example"))
  return (
    <>
    <Helmet>
                <title>
                    Bistro Boss | Sign Up
                </title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
                
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", { 
                    required: true, 
                    minLength: 6, 
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-600">Password is required</p>)}
                {errors.password?.type === "minLength" && (
                <p className=" text-red-600">Password must be 6 characters.</p>)}
                {errors.password?.type === "maxLength" && (
                <p className=" text-red-600">Password must be under or equal in 20 characters</p>)}
                {errors.password?.type === "pattern" && (
                <p className=" text-red-600">Password must have one uppercase one lowercase, one number and one special character</p>)}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center"><small>Already Have An Account?</small> <Link to="/login" className="text-xl text-orange-700">Login</Link></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;







// @media (hover: hover) {
//     .btn-outline.btn-primary:hover {
//         --tw-text-opacity: 1;
//         color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
//     }
//     @supports (color: color-mix(in oklab, black, black)) {
//         .btn-outline.btn-primary:hover {
//             background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//             border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//         }
//     }
// }
// @media (hover: hover) {
//     .btn-outline.btn-primary:hover {
//         --tw-text-opacity: 1;
//         color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
//     }
//     @supports (color: color-mix(in oklab, black, black)) {
//         .btn-outline.btn-primary:hover {
//             background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//             border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//         }
//     }
// }
// @supports not (color: oklch(0% 0 0)) {
//     .btn-primary {
//         --btn-color: var(--fallback-p);
//     }
// }
// @supports (color: color-mix(in oklab, black, black)) {
//     .btn-outline.btn-primary.btn-active {
//         background-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//         border-color: color-mix(in oklab, var(--fallback-p,oklch(var(--p)/1)) 90%, black);
//     }
// }
// .btn-primary {
//     --tw-text-opacity: 1;
//     color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
//     outline-color: var(--fallback-p,oklch(var(--p)/1));
// }
// @supports (color: oklch(0% 0 0)) {
//     .btn-primary {
//         --btn-color: var(--p);
//     }
// }
// .btn-outline.btn-primary {
//     --tw-text-opacity: 1;
//     color: var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)));
// }
// .btn-outline.btn-primary.btn-active {
//     --tw-text-opacity: 1;
//     color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
// }