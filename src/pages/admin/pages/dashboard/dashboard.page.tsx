import React from "react";
import BarsComponent from "./components/bars/bars.component";
import EarningsComponent from "./components/earnings/earnings.component";
import StadisticsComponent from "./components/stadistics/stadistics.component";
import './dashboard.page.scss';

const DashboardPageAdmin = () => {
  return (
    <div className="dashboard_p_c">
      <StadisticsComponent />
      <BarsComponent />
      <EarningsComponent />
      
    </div>
  );
};

export default DashboardPageAdmin;
