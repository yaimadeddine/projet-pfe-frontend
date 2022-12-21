import React from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { useParams , useNavigate, Link } from "react-router-dom";

export default function UpdateMarque() {

  
  const [nom, setNom] = useState("");
  const [libelle, setLibelle] = useState("");

  const serviceData = useParams(); 
  
  const navigate = useNavigate();


  const updateMarque = async (e) => {
    e.preventDefault();
    const id = serviceData.id;
    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/update/marque/${id}`, {
        name: nom,
        libelle: libelle,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate("/marque/list");

  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 ">
              <div className="col-sm-6">
                <h1>Modifier Marque</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Modifier la marque</li>
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
                  <h3 className="card-title">Modifier la marque</h3>
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
                    <label>Le Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Libellé</label>
                    <input
                      type="text"
                      className="form-control"
                      value={libelle}
                      onChange={(e) => setLibelle(e.target.value)}
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
              <Link to={"/service/list"} className="btn btn-dark">
                Back
              </Link>

              <button type="button" className="btn btn-success float-right" onClick={updateMarque} >update</button>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
