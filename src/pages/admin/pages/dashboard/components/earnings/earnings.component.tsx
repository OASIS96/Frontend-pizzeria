import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import "./earnings.component.scss";

const EarningsComponent = () => {
  const ctxRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    new Chart(ctxRef.current as HTMLCanvasElement, {
      type: "doughnut",

      data: {
        labels: ["Ventas", "Clientes", "Productos", "Ingresos"],

        datasets: [
          {
            data: [30, 50, 100, 55],
            backgroundColor: ["#7367f0", "#00cfe8", "#ea5455", "#28c76f"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        legend: {
          display: false,
        },
      },
    });
    return;
  }, []);

  return (
    <div className="earnings_c_c">
      <h1 className="earnings_title">Ganancias</h1>
      <span className="resume">
        Este mes <span className="number">$4000.9</span>
      </span>
      <p className="descrp_earnings">68.2% more earnings than last month.</p>

      <div className="chart_c">
        <canvas className="chart_circle" ref={ctxRef}></canvas>
      </div>
    </div>
  );
};

export default EarningsComponent;
