import React from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { useParams , useNavigate, Link } from "react-router-dom";

export default function UpdateFourniture() {

  const [typeData,setTypeData] = useState([]);
  const [contratData,setContratData] = useState([]);
  const [materielData,setMaterielData] = useState([]);
  const [marqueData,setMarqueData] = useState([]);
  

  
  const [matricule,setMatricule] = useState('');
  const [prix,setPrix] = useState('');
  const [type,setType] = useState('');
  const [contrat,setContrat] = useState('');
  const [materiel,setMateriel] = useState('');
  const [marque,setMarque] = useState('');
  

  const serviceData = useParams(); 
  
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/typefourniture/list").then(res => {
            console.log(res.data);
            setTypeData(res.data);
        }).catch((error) => console.log(error));

    axios.get("http://127.0.0.1:8000/api/contrat/list").then(res => {
            console.log(res.data);
            setContratData(res.data);
        }).catch((error) => console.log(error));

    axios.get("http://127.0.0.1:8000/api/marque/list").then(res => {
            console.log(res.data);
            setMarqueData(res.data);
        }).catch((error) => console.log(error));
    axios.get("http://127.0.0.1:8000/api/materiel/list").then(res => {
            console.log(res.data);
            setMaterielData(res.data);
        }).catch((error) => console.log(error));
    },[]);


  const update = async (e) => {
    e.preventDefault();
    const id = serviceData.id;
    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/fourniture/materiel/${id}`, {
        matricule: matricule,
        prix: prix,
        type_fourniture_id: type,
        contrat_id: contrat,
        marque_id: marque, 
        materiel_id: materiel, 
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate("/fourniture/list");
  };


  
  const typeOption = typeData.map((typeData, index) => {
    return (
      <option value={typeData.id}>{typeData.name}</option>
    )
  })
  const postOption = contratData.map((contratData, index) => {
    return (
      <option value={contratData.id}>{contratData.matricule}</option>
    )
  })
  const marqueOption = marqueData.map((marqueData, index) => {
    return (
      <option value={marqueData.id}>{marqueData.name}</option>
    )
  })
  const materielOption = materielData.map((materielData, index) => {
    return (
      <option value={materielData.id}>{materielData.matricule}</option>
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
            <h1>Modifier la fourniture</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Modifier la fourniture</li>
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
              <h3 className="card-title">Modifier la fourniture</h3>
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
                <label>prix</label>
                <input
                  type="number"
                  className="form-control"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select
                  className="form-control custom-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option selected >
                    Select one
                  </option>
                  {typeOption}
                </select>
              </div>
              <div className="form-group">
                <label>Contrat</label>
                <select
                  className="form-control custom-select"
                  value={contrat}
                  onChange={(e) => setContrat(e.target.value)}
                >
                  <option selected >
                    Select one
                  </option>
                  {postOption}
                </select>
              </div>
             
             <div className="form-group">
                <label>Marque</label>
                <select
                  className="form-control custom-select"
                  value={marque}
                  onChange={(e) => setMarque(e.target.value)}
                >
                  <option selected >
                    Select one
                  </option>
                  {marqueOption}
                </select>
              </div>
             <div className="form-group">
                <label>Materiel</label>
                <select
                  className="form-control custom-select"
                  value={materiel}
                  onChange={(e) => setMateriel(e.target.value)}
                >
                  <option selected >
                    Select one
                  </option>
                  {materielOption}
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
            
          <a href="" className="btn btn-dark">
            Cancel
          </a>
         
          <button type='button' onClick={update} className="btn btn-success float-right">
            submit
          </button>
        </div>
      </div>
    </section>
    {/* /.content */}
  </div>
</div>
  );
}
