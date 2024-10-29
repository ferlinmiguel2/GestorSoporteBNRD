"use client";
import img1 from "@/public/images/home/img-1.png";
import img2 from "@/public/images/home/img-2.png";
import img3 from "@/public/images/home/img-3.png";
import img4 from "@/public/images/home/img-4.png";
import img5 from "@/public/images/home/img-5.png";
import img6 from "@/public/images/home/img-6.png";
import { Fragment } from "react";
const data = [
  {
    id: 1,
    name: "Problemas con controladores o drivers ",
    averias: "10"
  },
  {
    id: 2,
    name: "Falla de tóner",
    averias: "5"
  },
  {
    id: 3,
    name: "Falla en tinta",
    averias: "6"
  },
  {
    id: 4,
    name: "Hoja atascada",
    averias: "7"
  },
  {
    id: 5,
    name: "Impresión borrosa o de mala calidad",
    averias: "3"
  },
  {
    id: 6,
    name: "Falta en conectividad con impresora",
    averias: "5"
  },
  {
    id: 7,
    name: "Cola de impresión bloqueada",
    averias: "10"
  },
  {
    id: 8,
    name: "Cartucho defectuoso",
    averias: "8"
  },
  {
    id: 9,
    name: "Impresora desconectada",
    averias: "12"
  },
  {
    id: 10,
    name: "Sin audio",
    averias: "2",
    image: img6
  },
  {
    id: 11,
    name: "No salen llamadas",
    averias: "4",
    image: img6
  }
];
const Categoria = () => {
  return (
    <Fragment>
      {data.map((item, index) => (
        <li
          className="flex justify-between items-center gap-2 border-b border-default-300 py-3 px-6 hover:bg-default-50"
          key={`top-sell-${index}`}
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-default-700">
                {" "}
                {item.name}
              </span>
            </div>
          </div>
          <span className="text-xs text-default-600">
            {item.averias} averías
          </span>
        </li>
      ))}
    </Fragment>
  );
};

export default Categoria;
