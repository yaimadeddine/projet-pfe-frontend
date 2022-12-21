import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function AddTicket() {

  const [materielData,setMaterielData] = useState([]);
  
  
  const [cmt,setCmt] = useState('');
  const [mId,setMId] = useState('');

  const navigate = useNavigate();
  


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/materiel/list").then(res => {
            console.log(res.data);
            setMaterielData(res.data);
        }).catch((error) => console.log(error));
    },[]);


    const createMateriel = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/create/ticket",{
          status: "en attente",
          commentaire: cmt,
          material_id: mId, 
        })
      } catch (error) {
        console.log(error.response);
      }

      navigate('/ticket/list');
    }


    const materielOption = materielData.map((materielData, index) => {
      return (
        <option value={materielData.id}>M:{materielData.matricule} P:{materielData.post_matricule}</option>
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
            <h1>Creer un ticket</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Creer un ticket</li>
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
              <h3 className="card-title">Creer un ticket</h3>
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
                <label>Commentaire</label>
                <textarea
                  className="form-control"
                  value={cmt}
                  onChange={(e) => setCmt(e.target.value)}
                />
              </div>
             <div className="form-group">
                <label>Materiel</label>
                <select
                  className="form-control custom-select"
                  value={mId}
                  onChange={(e) => setMId(e.target.value)}
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
         
          <button type='button' onClick={createMateriel} className="btn btn-success float-right">
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
