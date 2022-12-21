import axios from "axios";
import React, { useState , useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function UpdateSalle() {
  const [serviceData, setServiceData] = useState([]);

  const [numero, setNumero] = useState("");
  const [serviceId, setServiceId] = useState("");

  const salleId = useParams();

  const navigate = useNavigate();

  useEffect((e) => {
    axios
      .get("http://127.0.0.1:8000/api/service/list")
      .then((res) => {
        console.log(res.data);
        setServiceData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateSalle = async (e) => {
    e.preventDefault();
    const id = salleId.id;
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/update/salle/${id}`,
        {
          numero: numero,
          service_id: serviceId,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
    navigate("/salle/list");
  };

  const option = serviceData.map((serviceData, index) => {
    return <option value={serviceData.id}>{serviceData.name}</option>;
  });

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
                <h1>Modifier une salle</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Modifier une salle</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="card card-navy">
                <div className="card-header">
                  <h3 className="card-title">Modifier une salle</h3>
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
                    <label>Numero</label>
                    <input
                      type="number"
                      className="form-control"
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Service</label>
                    <select
                      className="form-control custom-select"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
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
              <a href="" className="btn btn-dark">
                Cancel
              </a>

              <button
                type="button"
                className="btn btn-success float-right"
                onClick={updateSalle}
              >
                valide
              </button>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
