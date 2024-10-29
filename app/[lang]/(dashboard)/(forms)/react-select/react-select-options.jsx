"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";

const formatGroupLabel = (data) => (
  <div className="flex justify-between items-center">
    <strong>
      <span className=" text-2xl font-semibold capitalize">{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
);
const groupedOptions = [
  {
    label: "PC",
    options: [
      { value: "perdida-de-informacion", label: "PC - Pérdida de información" },
      { value: "no-enciende", label: "PC - No enciende" },
      { value: "autocad", label: "PC - Autocad" },
      { value: "office", label: "PC - Office" },
      { value: "mouse", label: "PC - Mouse" },
      { value: "teclado", label: "PC - Teclado" },
      { value: "monitor", label: "PC - Autocad" },
      { value: "permisos", label: "PC - Permisos de administrador" },
    ],
  },
  {
    label: "Impresora",
    options: [
      { value: "controladores", label: "Impresora - Controladores" },
      { value: "toner", label: "Impresora - Tóner" },
      { value: "hoja-atascada", label: "Impresora - Hoja atascada" },
      {
        value: "impresion-defectuosa",
        label: "Impresora - Impresión defectuosa",
      },
      { value: "desconexion", label: "Impresora - Desconexión " },
      { value: "rota", label: "Impresora - Rota " },
    ],
  },

  {
    label: "Teléfono",
    options: [
      { value: "no-entran-llamadas", label: "Teléfono - No entran llamadas" },
      { value: "no-salen-llamadas", label: "Teléfono - No salen llamadas" },
      { value: "interferencia", label: "Teléfono - Interferencia" },
      { value: "roto", label: "Teléfono - Teléfono roto" },
    ],
  },
];

// start component
const ReactSelectOption = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <Select
          isClearable={false}
          label={groupedOptions}
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          className="react-select"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

export default ReactSelectOption;
