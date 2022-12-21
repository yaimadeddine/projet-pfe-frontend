import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ServiceBox() {


  const [data,setData] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/service/count")
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
      <a href="/service/add" className="small-box-footer">
        Ajouter <i className="fa-solid fa-plus" />
      </a>
     </>
    );
  }
  




  return (
    <div className="small-box bgorange elevation-3">
      <div className="inner">
        <h3 className="text-light">
          {data}
          {/* <sup style={{ fontSize: 10 }}></sup> */}
        </h3>
        <p className="text-light">Service</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-address-book text-light" />
      </div>
      <a href="/service/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
     {ajouter}
    </div>
  );
}
