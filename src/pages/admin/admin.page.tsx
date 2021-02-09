import React from "react";
import "./admin.page.scss";
import AdminRouter from "./admin.router";
import HeaderComponent from "./components/header/header.component";

const AdminPage = () => {

  return (
    <div className="admin_p_c">
      <HeaderComponent />
        <AdminRouter />
    </div>
  );
};

export default AdminPage;
