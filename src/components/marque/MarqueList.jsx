import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';


export default function MarqueList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/marque/list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteMarque = async (e, id) => {
    const thisClickedFunda = e.currentTarget;
    thisClickedFunda.InnerText = "Deleting";

    const res = await axios.delete(
      `http://127.0.0.1:8000/api/delete/marque/${id}`
    );

    thisClickedFunda.closest("tr").remove();
    console.log(res.data.message);
  };

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Matricule',
        selector: row => row.libelle,
    },
    {
      cell: () => <button className="btn btn-danger">Action</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
        
    },
];


  const tr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.libelle}</td>
        <td>
          <Link to={`/update/marque/${data.id}`} className="btn btn-info mr-2">
            Modifier
          </Link>

          <button
            className="btn btn-danger ml-2"
            onClick={(e) => deleteMarque(e, data.id)}
          >
            Supprimer
          </button>
        </td>
      </tr>
    );
  });

  

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>La liste des marques</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Marque list</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

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
                            <th className="col-sm-1">Le nom</th>
                            <th className="col-sm-2">Libellé</th>
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
      </div>
    </div>
  );
}
