import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TicketBox() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/ticket/count")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  var ajouter = "";
  if (localStorage.getItem("user_role") !== "4") {
    ajouter = (
      <a href="/ticket/add" className="small-box-footer">
        Ajouter <i className="fa-solid fa-plus" />
      </a>
    );
  }

  return (
    <div className="small-box bg-navy elevation-3">
      <div className="inner">
        <h3>{data}</h3>
        <p>Ticket</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-ticket text-light" />
      </div>
      <a href="/ticket/list" className="small-box-footer">
        Liste <i className="fas fa-arrow-circle-right" />
      </a>
      {ajouter}
    </div>
  );
}
