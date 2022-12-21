import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PostBox() {


  const [data,setData] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/post/count")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((error) => console.log(error));
  }, []);



  
  var ajouter = '';

  if (localStorage.getItem('user_role') === "1") {
    ajouter = (
     <>
       <a href="/post/add" className="small-box-footer">
        Ajouter <i className="fa-solid fa-plus" />
      </a>
     </>
    );
  }
  

  return (
    <div className="small-box bgorange elevation-3">
      <div className="inner">
        <h3 className="text-light">{data}</h3>
        <p className="text-light">Poste de travail</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-warehouse text-light" />
      </div>
      <a href="/post/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
      {ajouter}
    </div>
  );
}
