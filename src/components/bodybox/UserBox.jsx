import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserBox() {




  const [data,setData] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/user/count")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((error) => console.log(error));
  }, [])


  var ajouter = '';

  if (localStorage.getItem('user_role') === "1") {
    ajouter = (
     <>
      <a href="/user/add" className="small-box-footer">
      Ajouter <i className="fa-solid fa-plus" />
    </a>
     </>
    );
  }

  return (
    <div className="small-box bgorange elevation-3">
      <div className="inner">
        <h3 className="text-light">{data}</h3>
        <p className="text-light">Utilisateur</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-user text-light" />
      </div>
      <a href="/user/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
      {ajouter}
    </div>
  );
}
