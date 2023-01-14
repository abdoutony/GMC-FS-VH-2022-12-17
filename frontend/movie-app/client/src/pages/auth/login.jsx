import React, { useState } from "react";
import HomeLayout from "../../components/layouts/home";
import { login } from "../../services/auth.service";
import "./style.css";
export default function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = () => {
    login({ email, password });
  };
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
                <div className="form-group mt-3">
                  <label className="text-white">Emal</label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="text-white">Password</label>
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <button
                    onClick={handleSubmit}
                    className="btn bg-red text-white"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
