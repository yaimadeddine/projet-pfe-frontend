import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function FournisseurList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/fournisseur/list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteFournisseur = async (e, id) => {
    const thisClickedFunda = e.currentTarget;
    thisClickedFunda.InnerText = "Deleting";

    const res = await axios.delete(
      `http://127.0.0.1:8000/api/delete/fournisseur/${id}`
    );

    thisClickedFunda.closest("tr").remove();
    console.log(res.data.message);
  };

  const tableRow = data.map((data, index) => {
    return (
      <tr>
        <td className="col-sm-2 text-center">{data.name}</td>
        <td className="col-sm-2 text-center">{data.adresse}</td>
        <td className="col-sm-2 text-center">{data.phone}</td>
        <td className="col-sm-2 text-center">{data.libelle}</td>
        <td className="col-sm-2 text-center">
          <Link to={`/update/fournisseur/${data.id}`} className="btn btn-info mr-2">Modifier</Link>
          <button
            className="btn btn-danger ml-2"
            onClick={(e) => deleteFournisseur(e, data.id)}
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
                <h1>La liste du materiel</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">MaterielList</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section class="content ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div className="card bgclr">
                  <div className="card-header">
                    <h3 className="card-title"></h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example1"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th className="col-sm-1 text-center">Nom</th>
                          <th className="col-sm-1 text-center">Adresse</th>
                          <th className="col-sm-2 text-center">
                            Numéro du telephone
                          </th>
                          <th className="col-sm-2 text-center">Libellé</th>
                          <th className="col-sm-3 text-center"></th>
                        </tr>
                      </thead>
                      <tbody>{tableRow}</tbody>
                    </table>
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
