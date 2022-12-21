import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function AddMateriel() {

  const [typeData,setTypeData] = useState([]);
  const [postData,setPostData] = useState([]);
  const [marqueData,setMarqueData] = useState([]);
  
  
  
  const [matricule,setMatricule] = useState('');
  const [prix,setPrix] = useState('');
  const [type,setType] = useState('');
  const [post,setPost] = useState('');
  const [marque,setMarque] = useState('');

  const navigate = useNavigate();
  


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/type/list").then(res => {
            console.log(res.data);
            setTypeData(res.data);
        }).catch((error) => console.log(error));

    axios.get("http://127.0.0.1:8000/api/post/list").then(res => {
            console.log(res.data);
            setPostData(res.data);
        }).catch((error) => console.log(error));

    axios.get("http://127.0.0.1:8000/api/marque/list").then(res => {
            console.log(res.data);
            setMarqueData(res.data);
        }).catch((error) => console.log(error));
    },[]);


    const createMateriel = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/create/materiel",{
          matricule: matricule,
          prix: prix,
          type_id: type,
          post_id: post,
          marque_id: marque, 
        })
      } catch (error) {
        console.log(error.response);
      }

      navigate('/materiel/list');
    }


    const typeOption = typeData.map((typeData, index) => {
      return (
        <option value={typeData.id}>{typeData.name}</option>
      )
    })
    const postOption = postData.map((postData, index) => {
      return (
        <option value={postData.id}>{postData.matricule}</option>
      )
    })
    const marqueOption = marqueData.map((marqueData, index) => {
      return (
        <option value={marqueData.id}>{marqueData.name}</option>
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
            <h1>Ajouter un materiel</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Ajouter un materiel</li>
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
              <h3 className="card-title">Ajouter un materiel</h3>
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
                <label>Post</label>
                <select
                  className="form-control custom-select"
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
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
