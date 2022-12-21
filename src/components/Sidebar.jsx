import React, { useEffect, useState } from "react";
import logoOmrane from "../assets/omrane.png";
import logoAdmin from "../assets/user2-160x160.jpg";
import { Modal, Button, Card } from "react-bootstrap";
import axios from "axios";
import userimage from '../assets/user.jpg';


export default function Sidebar() {

  const [data, setData] = useState([]);

  const id = localStorage.getItem('user_id');

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/find/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const dataRole = (role) => {
    if (role === 1) {
      return "Admin";
    }else if (role === 2) {
      return "Employé";
    }else if (role === 3) {
      return "Agent";
    }else if (role === 4) {
      return "technicien";
    }
  }



 



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const modal = (
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mon profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card p-3 py-4">
                  <div className="text-center">
                    <img
                      src={userimage}
                      width={100}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                    {data.name}
                    </span>
                    <h5 className="mt-3 mb-0">{dataRole(data.role)}</h5>
                    <br />
                    {/* <span>{dataRole(data.role)}</span> */}
                    <div className="px-4 mt-1">
                      <div className="row">
                        <div className="col-6">
                        <ul className="list-group list-group mb-3">
                        <li className="list-group-item">
                          <b className="float-left">Poste de travail :</b> <b className="float-right">P213</b>
                        </li>
                        <li className="list-group-item">
                          <b className="float-left" >Service :</b> <b className="float-right">Informatique</b>
                        </li>
                        <li className="list-group-item">
                          <b className="float-left">Salle :</b> <b className="float-right">12</b>
                        </li>
                      </ul>
                        </div>
                        <div className="col-6">
                        <ul className="list-group list-group mb-3">
                        <li className="list-group-item">
                          <b></b> <a className="float-right"></a>
                        </li>
                        <li className="list-group-item">
                          <b></b> <a className="float-right"></a>
                        </li>
                        <li className="list-group-item">
                          <b></b> <a className="float-right"></a>
                        </li>
                      </ul>
                        </div>
                      </div>
                    </div>
                   
                    <div className="buttons">
                      <button className="btn btn-outline-primary px-4">
                        Modifier mon profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
  );
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="" className="brand-link noir text-decoration-none">
          <img
            src={logoOmrane}
            alt="AdminLTE Logo"
            className="brand-image"
            style={{ opacity: ".8" }}
          />
          <span className="ml-2 textbold">Al Omrane</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar noir">
          {/* Sidebar user panel (optional) */}

          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={logoAdmin}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="" className="d-block">
                Admin
              </a>
            </div>
          </div> */}

          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item">
                <a class="nav-link" onClick={handleShow}>
                  <i className="fa-solid fa-user ml-2"></i>
                  <p className="ml-2">Mon profile</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
{modal}
      
    </div>
  );
}
