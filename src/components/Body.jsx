import React from "react";
import MaterielBox from "./bodybox/MaterielBox";
import FournisseurBox from "./bodybox/FournisseurBox";
import ServiceBox from "./bodybox/ServiceBox";
import TicketBox from "./bodybox/TicketBox";
import UserBox from "./bodybox/UserBox";
import SalleBox from "./bodybox/SalleBox";
import PostBox from "./bodybox/PostBox";
import MarqueBox from "./bodybox/MarqueBox";
import TypeBox from "./bodybox/TypeBox";
import ContratBox from "./bodybox/ContratBox";
import FournitureBox from "./bodybox/FournitureBox";
import TypeFournitureBox from "./bodybox/TypeFournitureBox";

export default function Body() {
  var section = "";

  if (localStorage.getItem("user_role") === "1") {
    section = (
      <>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion du personnel</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <UserBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <ServiceBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <SalleBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <PostBox />
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion du materiel</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <MaterielBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <FournisseurBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <MarqueBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TypeBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <ContratBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <FournitureBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TypeFournitureBox />
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion des tickets</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TicketBox />
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </>
    );
  } else if (localStorage.getItem("user_role") === "3") {
    section = (
      <>
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="">Gestion du materiel</h1>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-4 col-4">
                {/* small box */}
                <MaterielBox />
              </div>

              <div className="col-lg-4 col-4">
                {/* small box */}
                <FournisseurBox />
              </div>

              <div className="col-lg-4 col-4">
                {/* small box */}
                <MarqueBox />
              </div>
              <div className="col-lg-4 col-4">
                {/* small box */}
                <TypeBox />
              </div>
              <div className="col-lg-4 col-4">
                {/* small box */}
                <ContratBox />
              </div>
              <div className="col-lg-4 col-4">
                {/* small box */}
                <FournitureBox />
              </div>
              <div className="col-lg-4 col-4">
                {/* small box */}
                <TypeFournitureBox />
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="">Gestion des tickets</h1>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-4 col-4">
                {/* small box */}
                <TicketBox />
              </div>
            </div>
            {/* /.row */}
            {/* Main row */}
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
    );
  }else if (localStorage.getItem("user_role") === "4") {
    section = (
      <>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion du personnel</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <UserBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <ServiceBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <SalleBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <PostBox />
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion du materiel</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <MaterielBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <FournisseurBox />
                </div>

                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <MarqueBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TypeBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <ContratBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <FournitureBox />
                </div>
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TypeFournitureBox />
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Gestion des tickets</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TicketBox />
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </>
    );
  }else if (localStorage.getItem("user_role") === "2") {
    section = (
      <>
       
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Le materiel</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <MaterielBox />
                </div>

              

               
              
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <FournitureBox />
                </div>
              
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <div className="content-wrapper ">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="">Les tickets</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-4">
                  {/* small box */}
                  <TicketBox />
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </>
    );
  }

  return <div>
    {section}
  </div>;
}
