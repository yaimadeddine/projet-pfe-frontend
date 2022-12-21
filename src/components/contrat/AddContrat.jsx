import React from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddContrat() {

    const [fournisseurData,setFournisseurData] = useState([]);

  
  const [matricule, setMatricule] = useState("");
  const [date, setDate] = useState("");
  const [dateGarantie, setDateGarantie] = useState("");
  const [fournisseurId, setFournisseurId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/fournisseur/list").then(res => {
        console.log(res.data);
        setFournisseurData(res.data);
    }).catch((error) => console.log(error));

  },[])
  


  const createService = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/create/contrat", {
        matricule: matricule,
        date: date,
        date_garantie: dateGarantie,
        fournisseur_id: fournisseurId,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate('/contrat/list');
  };


  const option = fournisseurData.map((fournisseurData, index) => {
    return (
        <option value={fournisseurData.id}>{fournisseurData.name}</option>
      )
  })

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
                <h1>Ajouter une contrat</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Ajouter un contrat</li>
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
                  <h3 className="card-title">Ajouter un contrat</h3>
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
                    <label>Matricule</label>
                    <input
                      type="text"
                      className="form-control"
                      value={matricule}
                      onChange={(e) => setMatricule(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date de realisation</label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date garantie</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dateGarantie}
                      onChange={(e) => setDateGarantie(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fournisseur</label>
                    <select
                  className="form-control custom-select"
                  value={fournisseurId}
                  onChange={(e) => setFournisseurId(e.target.value)}
                >
                  <option selected >
                    Select one
                  </option>
                  {option}
                </select>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-5">
              <Link to={"/"} className="btn btn-dark">
                Back
              </Link>

              <button type="button" className="btn btn-success float-right" onClick={createService} >Submit</button>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
