import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import userimage from '../../assets/user.jpg';

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/list")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const  deleteUser = async (e,id) => {

  //   const thisClickedFunda = e.currentTarget;
  //   thisClickedFunda.InnerText = "Deleting" ;

  //   const res = await axios.delete('http://127.0.0.1:8000/api/delete/service/3' ,{ data : {
  //     id : id,
  //   }});

  //     thisClickedFunda.closest('div').remove();
  //     console.log(res.data.message);

  // }

  const deleteUser = async (e, id) => {
    const thisClickedFunda = e.currentTarget;
    thisClickedFunda.InnerText = "Deleting";

    const res = await axios.delete(
      `http://127.0.0.1:8000/api/delete/user/${id}`
    );

    thisClickedFunda.closest("div").remove();
    console.log(res.data);
  };



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

  const userBox = data.map((data, index) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
        <div className="card bg-light d-flex flex-fill">
          <div className="card-header  "><h2><b>{data.name}</b></h2></div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col-7">
                <p className="blockquote ">
                  Role: {dataRole(data.role)}
                </p>
                <p className="text-muted text-sm">{data.date_naissance}</p>
                <ul className="ml-4 mb-0 fa-ul text-muted">
                  <li className="small">
                    <span className="fa-li">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    {data.email}
                  </li>
                  <li className="small">
                    <span className="fa-li">
                      <i className="fa-solid fa-phone" />
                    </span>
                    Phone : {data.phone}
                  </li>
                </ul>
              </div>
              <div className="col-5 text-center">
                <img
                  src={userimage}
                  alt="user-avatar"
                  className="img-circle img-fluid mt-3"
                />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="text-center">
              <button type="button" className="btn btn-info btn-sm m-2 ">
                Modifier
              </button>
              <button
                type="button"
                onClick={(e) => deleteUser(e, data.id)}
                className="btn btn-danger btn-sm m-2"
              >
                Supprimer
              </button>

              {/* <Link to={`/user-info/${data.id}`} component={<UserInfo />} clLinkssName="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  });
  const userB = data.map((data, index) => {
    return (
      <div className="col-md-4">
        {/* Widget: user widget style 2 */}
        <div className="card card-widget widget-user-2 elevation-2">
          {/* Add the bg color to the header using any of the bg-* classes */}
          <div className="widget-user-header bg-danger">
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src={data.avatar}
                alt="User Avatar"
              />
            </div>
            {/* /.widget-user-image */}
            <h3 className="widget-user-username">{data.fname} {data.lname}</h3>
            <h5 className="widget-user-desc">Role</h5>
          </div>
          <div className="card-footer p-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <p className="text-left ml-2 mt-2 font-bold">
                  Email : {data.username}
                </p>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tasks <span className="float-right badge bg-info">5</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Completed Projects{" "}
                  <span className="float-right badge bg-success">12</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Followers{" "}
                  <span className="float-right badge bg-danger">842</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
                  <h1>La liste des utilisateurs</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      liste des utilisateurs
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card card-solid">
              <div className="card-body pb-0">
                <div className="row">
                  {userBox}

                  {/* {userBox} */}
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <nav aria-label="Contacts Page Navigation">
                  <ul className="pagination justify-content-center m-0">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        8
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    </div>
  );
}
