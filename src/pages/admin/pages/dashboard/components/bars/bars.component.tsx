import React, { useEffect, useRef, useState } from "react";
import "./bars.component.scss";
import { Chart } from "chart.js";
import ArrowIcon from "@material-ui/icons/ExpandMoreOutlined";

const BarsComponent = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<Chart>();

  const openSelect = () => {
    optionsRef.current?.classList.toggle("active");
    document.addEventListener("click", (e) => {
      if (
        e.target !== selectRef.current &&
        e.target !== selectRef.current?.children[0] &&
        e.target !== selectRef.current?.children[1] &&
        e.target !== selectRef.current?.children[2] &&
        e.target !== selectRef.current?.children[1].children[0]
      ) {
        optionsRef.current?.classList.remove("active");
      }
    });
  };

  const setGraf = (number: number) => {
    if (number === 2020) {
      console.log(number);
      chart?.data.datasets?.forEach((dataset) => {
        dataset.data = [40, 50, 30, 10, 80, 30, 40, 55, 100];
      });
      chart?.update();
      (selectRef.current as HTMLDivElement).children[0].innerHTML = `${number}`;
    }

    if (number === 2019) {
      chart?.data.datasets?.forEach((dataset) => {
        dataset.data = [10, 5, 74, 15, 33, 55, 22, 91, 34];
      });
      chart?.update();
      (selectRef.current as HTMLDivElement).children[0].innerHTML = `${number}`;
    }

    if (number === 2018) {
      chart?.data.datasets?.forEach((dataset) => {
        dataset.data = [72, 54, 21, 65, 22, 61, 15, 99, 47];
      });
      chart?.update();
      (selectRef.current as HTMLDivElement).children[0].innerHTML = `${number}`;
    }
  };

  useEffect(() => {
    const chart = new Chart(chartRef.current as HTMLCanvasElement, {
      type: "bar",
      data: {
        labels: [
          "jan",
          "feb",
          "mar",
          "apri",
          "jun",
          "jul",
          "sep",
          "oct",
          "nov",
        ],
        datasets: [
          {
            label: "Ganancias",
            barThickness: 5,
            backgroundColor: "#7367f0",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
      },
    });
    return setChart(chart);
  }, []);

  return (
    <div className="bars_c_c">
      <h1 className="title_bars">Reporte de Ganancias</h1>
      <div className="canvas_c">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="select_c" ref={selectRef} onClick={openSelect}>
        <span className="head_text">2020</span>
        <ArrowIcon />
        <div className="options" ref={optionsRef}>
          <span className="option" onClick={(e) => setGraf(2020)}>
            2020
          </span>
          <span className="option" onClick={(e) => setGraf(2019)}>
            2019
          </span>
          <span className="option" onClick={(e) => setGraf(2018)}>
            2018
          </span>
        </div>
      </div>
    </div>
  );
};

export default BarsComponent;
