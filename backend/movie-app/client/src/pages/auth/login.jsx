import React from "react";
import HomeLayout from "../../components/layouts/home";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../helper/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { login } from "../../services/auth.service";
export default function LoginPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmitHandle =(data)=>{
    // api calll
    console.log(data)
    const {email,password} = data
    login({email,password})
  }
  return (
    <HomeLayout>
      <div className="auth-wrapper pt-5">
        <div className="row">
          <h1 className="text-white text-center">Login to admin account</h1>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card auth-card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitHandle)}>
                <div className="form-group mt-3">
                  <label className="text-white">Emal</label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="form-control"
                    {...register("email")}
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div className="form-group mt-3">
                  <label className="text-white">Password</label>
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="form-control"
                    {...register("password")}
                  />
                  <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="form-group mt-3">
                  <button className="btn bg-red text-white">Sign in</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
