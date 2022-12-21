import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FournitureBox() {


  const [data,setData] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/fourniture/count")
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
        <a href="/fourniture/add" className="small-box-footer">
        Ajouter <i className="fa-solid fa-plus" />
      </a>
     </>
    );
  }

  return (
    <div className="small-box bgbleu elevation-3">
      <div className="inner">
        <h3>{data}</h3>
        <p>Fourniture</p>
      </div>
      <div className="icon">
      <i className="fa-solid fa-computer-mouse text-light" />
      </div>
      <a href="/fourniture/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
     {ajouter}
    </div>
  );
}
