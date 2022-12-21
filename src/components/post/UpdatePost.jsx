import axios from "axios";
import React, { useState , useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function UpdatePost() {
  const [userData, setUserData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [matricule, setMatricule] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [userId, setUserId] = useState('');

  const postId = useParams();

  const navigate = useNavigate();

  useEffect((e) => {
    axios
    .get("http://127.0.0.1:8000/api/salle/list")
    .then((res) => {
      console.log(res.data);
      setServiceData(res.data);
    })
    .catch((error) => console.log(error));

  axios
    .get("http://127.0.0.1:8000/api/user/list")
    .then((res) => {
      console.log(res.data);
      setUserData(res.data);
    })
    .catch((error) => console.log(error));
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    const id = postId.id;
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/update/post/${id}`,
        {
          matricule: matricule,
          user_id: userId,
          salle_id: serviceId,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate("/post/list");
  };

  const serviceOption = serviceData.map((serviceData, index) =>{
    return (
        <option value={serviceData.id}>{serviceData.numero}</option>
    )
})
  const userOption = userData.map((userData, index) =>{
    return (
        <option value={userData.id}>{userData.name}</option>
    )
})

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
              <h1>Ajouter un poste</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Ajouter un poste</li>
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
                <h3 className="card-title">Ajouter un poste</h3>
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
                  <input type="text" 
                  className="form-control"
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Utilisateur</label>
                  <select 
                  className="form-control custom-select"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  >
                    <option selected >
                      Select one
                    </option> 
                   {userOption}
                  </select>
                  <br />
                  <br />
                  <label>Numero de la salle</label>
                  <select 
                  className="form-control custom-select"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  >
                    <option selected >
                      Select one
                    </option>
                  {serviceOption}
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

            <button type="button" 
            className="btn btn-success float-right"
            onClick={updatePost}
            >valide</button>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  </div>
  );
}
