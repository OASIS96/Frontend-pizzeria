import React from "react";
import EarningsComponent from "./components/earnings/earnings.component";
import StadisticsComponent from "./components/stadistics/stadistics.component";
import './dashboard.page.scss';

const DashboardPageAdmin = () => {
  return (
    <div className="dashboard_p_c">
      <StadisticsComponent />
      <EarningsComponent />
    </div>
  );
};

export default DashboardPageAdmin;
