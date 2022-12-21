import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function AddTypeFourniture() {


  const [name, setName] = useState("");
  // const [libelle, setLibelle] = useState("");

  const navigate = useNavigate();
  


  const createType = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/create/typefourniture", {
        name: name,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate('/typefourniture/list');
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
            <h1>Ajouter un type de fourniture</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Ajouter un type de fourniture</li>
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
              <h3 className="card-title">Ajouter un type de fourniture </h3>
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
                <label>Le nom</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* <div className="form-group">
                <label>Libellé</label>
                <textarea
                  
                  className="form-control"
                  value={libelle}
                  onChange={(e) => setLibelle(e.target.value)}
                />
              </div> */}
              
             
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
         
          <button type='button' className='btn btn-success float-right' onClick={createType}>
            submit
          </button>
        </div>
      </div>
    </section>
    {/* /.content */}
  </div>
</div>
  )
}
