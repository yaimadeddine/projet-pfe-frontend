import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [pwd, setPwd] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [pwdc, setPwdc] = useState("");



  const navigate = useNavigate();

  const create = async (e) => {
        
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/create/user", {
        name: name,
        email: email,
        password: pwd,
        password_confirmation: pwdc,
        phone: phone,
        role: role,
        date_naissance: date,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }

navigate('/user/list');

}



  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 ">
              <div className="col-sm-6">
                <h1>Ajouter un utilisateur</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Ajouter un utilisateur
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="card card-navy">
                <div className="card-header">
                  <h3 className="card-title">Ajouter un utilisateur</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="form-control custom-select"
                    >
                      <option selected disabled>
                        Select one
                      </option>
                      <option value="1">Admin</option>
                      <option value="4">Technicien</option>
                      <option value="2">Employé</option>
                      <option value="3">Agent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" 
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label>Confirmé le mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      value={pwdc}
                    onChange={(e) => setPwdc(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputProjectLeader">
                      Numéro du telephone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputProjectLeader">
                      Date de naissance
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-5">
              <a href="" className="btn btn-dark">
                Cancel
              </a>

              <button type="button" className="btn btn-success float-right"
              onClick={create}>submit</button>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
