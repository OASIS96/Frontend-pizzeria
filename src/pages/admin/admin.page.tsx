import React from "react";
import "./admin.page.scss";
import AdminRouter from "./admin.router";
import HeaderComponent from "./components/header/header.component";

const AdminPage = () => {

  return (
    <div className="admin_p_c">
      <div className="container_admin">
        <HeaderComponent />
        <AdminRouter />
      </div>
    </div>
  );
};

export default AdminPage;
