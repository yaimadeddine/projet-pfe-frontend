import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TicketList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/ticket/list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //   const deleteService = async (e, id) => {
  //     const thisClickedFunda = e.currentTarget;
  //     thisClickedFunda.InnerText = "Deleting";

  //     const res = await axios.delete(
  //       `http://127.0.0.1:8000/api/delete/type/${id}`
  //     );

  //     thisClickedFunda.closest("tr").remove();
  //     console.log(res.data.message);
  //   };

  
  const enCours = (e, id) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/update/ticket/${id}`,{
      status : 'en cours',
    })
  }
  const button = (id) => {
  if (
    localStorage.getItem("user_role") === "1" ||
    localStorage.getItem("user_role") === "4"
  ) {
    return (
      <>
        <button className="btn btn-info ml-2" onClick={(e) => enCours(e, id)}>Prise en charge</button>
        <button className="btn btn-warning ml-2" >Clôturer</button>
      </>
    );
  }
  
}
  const tr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.material_id}</td>
        <td>
          <textarea name="" id="" cols="30" rows="1">
            {data.commentaire}
          </textarea>
        </td>
        <td>{data.status}</td>
        <td>
          {/* <Link to={`/update/type/${data.id}`} className="btn btn-info mr-2">
            Modifier
          </Link> */}

          {button(data.id)}

          <button className="btn btn-danger ml-2">Supprimer</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>La liste des services</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      liste des services
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}

          <section class="content">
            <div class="container-fluid">
              <div class="row justify-content-center align-items-center">
                <div class="col-12">
                  <div className="card bgclr">
                    <div className="card-header"></div>
                    {/* /.card-header */}
                    <div className="card-body m-30">
                      <div className="text-center">
                        <table
                          id="example1"
                          className="table table-bordered table-hover"
                        >
                          <thead>
                            <tr>
                              <th className="col-sm-1">Materiel</th>
                              <th className="col-sm-2">Commentaire</th>
                              <th className="col-sm-2">Statut</th>
                              <th className="col-sm-4"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                            <td>Misc</td>
                            <td>IE Mobile</td>
                            <td>
                              <button className="btn btn-info mr-2">
                                Modifier
                              </button>
                              <button className="btn btn-danger ml-2">
                                Supprimer
                              </button>
                            </td>
                          </tr> */}
                            {tr}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    </div>
  );
}
