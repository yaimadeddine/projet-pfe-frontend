import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MaterielBox() {


  const [data,setData] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/materiel/count")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((error) => console.log(error));
  }, []);

  var ajouter = '';

  if (localStorage.getItem('user_role') === "1" || localStorage.getItem('user_role') === "3") {
    ajouter = (
     <>
      <a href="/materiel/add" className="small-box-footer">
        Ajouter <i className="fa-solid fa-plus" />
      </a>
     </>
    );
  }
  

  return (
    <div className="small-box bgbleu elevation-3">
      <div className="inner">
        <h3>{data}</h3>
        <p>Materiel informatique</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-desktop text-light" />
      </div>
      <a href="/materiel/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
      {ajouter}
    </div>
  );
}
