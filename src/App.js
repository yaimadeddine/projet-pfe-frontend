import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/user/UserList";
import AddUser from "./components/user/AddUser";
import ServiceList from "./components/service/ServiceList";
import AddService from "./components/service/AddService";
import AddMateriel from "./components/materiel/AddMateriel";
import MaterielList from "./components/materiel/MaterielList";
import Login from "./pages/Login";
import UpdateService from "./components/service/UpdateService";
import AddFournisseur from "./components/fournisseur/AddFournisseur";
import FournisseurList from "./components/fournisseur/FournisseurList";
import UpdateFournisseur from "./components/fournisseur/UpdateFournisseur";
import AddSalle from "./components/salle/AddSalle";
import SalleList from "./components/salle/SalleList";
import UpdateSalle from "./components/salle/UpdateSalle";
import AddPost from "./components/post/AddPost";
import PostList from "./components/post/PostList";
import UpdatePost from "./components/post/UpdatePost";
import MarqueList from "./components/marque/MarqueList";
import AddMarque from "./components/marque/AddMarque";
import UpdateMarque from "./components/marque/UpdateMarque";
import UpdateType from "./components/typeMateriel/UpdateType";
import AddType from "./components/typeMateriel/AddType";
import TypeList from "./components/typeMateriel/TypeList";
import AddContrat from "./components/contrat/AddContrat";
import ContratList from "./components/contrat/ContratList";
import UpdateContrat from "./components/contrat/UpdateContrat";
import AddTypeFourniture from "./components/typeFourniture/AddTypeFourniture";
import TypeFournitureList from "./components/typeFourniture/TypeFournitureList";
import UpdateTypeFourniture from "./components/typeFourniture/UpdateTypeFourniture";
import AddFourniture from "./components/fourniture/AddFourniture";
import FournitureList from "./components/fourniture/FournitureList";
import UpdateFourniture from "./components/fourniture/UpdateFourniture";
import UpdateMateriel from "./components/materiel/UpdateMateriel";
import AddTicket from "./components/ticket/AddTicket";
import TicketList from "./components/ticket/Ticketlist";
import axios from "axios";
import { useEffect, useState } from "react";
import Protected from "./route/Protected";
import AdminRoute from "./route/AdminRoute";
import AgentRoute from "./route/AgentRoute";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <div className="wrapper ">
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route exact path="/user/list" element={<UserList />} />
          
          <Route element={<AgentRoute />}>
            <Route exact path="/user/add" element={<AddUser />} />
          </Route>

          <Route exact path="/service/list" element={<ServiceList />} />
          <Route exact path="/update/service/:id" element={<UpdateService />} />
          <Route exact path="/service/add" element={<AddService />} />

          <Route exact path="/materiel/add" element={<AddMateriel />} />
          <Route exact path="/materiel/list" element={<MaterielList />} />
          <Route
            exact
            path="/update/materiel/:id"
            element={<UpdateMateriel />}
          />

          <Route exact path="/fournisseur/add" element={<AddFournisseur />} />
          <Route exact path="/fournisseur/list" element={<FournisseurList />} />
          <Route
            exact
            path="/update/fournisseur/:id"
            element={<UpdateFournisseur />}
          />

          <Route exact path="/salle/add" element={<AddSalle />} />
          <Route exact path="/salle/list" element={<SalleList />} />
          <Route exact path="/update/salle/:id" element={<UpdateSalle />} />

          <Route exact path="/post/add" element={<AddPost />} />
          <Route exact path="/post/list" element={<PostList />} />
          <Route exact path="/update/post/:id" element={<UpdatePost />} />

          <Route exact path="/marque/add" element={<AddMarque />} />
          <Route exact path="/marque/list" element={<MarqueList />} />
          <Route exact path="/update/marque/:id" element={<UpdateMarque />} />

          <Route exact path="/type/add" element={<AddType />} />
          <Route exact path="/type/list" element={<TypeList />} />
          <Route exact path="/update/type/:id" element={<UpdateType />} />

          <Route exact path="/contrat/add" element={<AddContrat />} />
          <Route exact path="/contrat/list" element={<ContratList />} />
          <Route exact path="/update/contrat/:id" element={<UpdateContrat />} />

          <Route
            exact
            path="/typefourniture/add"
            element={<AddTypeFourniture />}
          />
          <Route
            exact
            path="/typefourniture/list"
            element={<TypeFournitureList />}
          />
          <Route
            exact
            path="/update/typefourniture/:id"
            element={<UpdateTypeFourniture />}
          />

          <Route exact path="/fourniture/add" element={<AddFourniture />} />
          <Route exact path="/fourniture/list" element={<FournitureList />} />
          <Route
            exact
            path="/update/fourniture/:id"
            element={<UpdateFourniture />}
          />

          <Route exact path="/ticket/add" element={<AddTicket />} />
          <Route exact path="/ticket/list" element={<TicketList />} />
          {/* <Route exact path="/update/fourniture/:id" element={<UpdateFourniture />} />  */}
        </Route>

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
