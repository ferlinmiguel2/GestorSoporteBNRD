"use client";
import { Input } from "@/components/ui/input";
import { fetchDepartamentos } from "./api.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HrFormWithLabel = () => {
  //Array para almacenar la información traída de la base de datos.
  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");

  const handleSelectChange = (value) => {
    setDepartamentoSeleccionado(value); // Aquí almacenamos solo el ID
  };

  //useEffect encargado de hacer el fetch a la api mediante el import del mismo desde api.js
  useEffect(() => {
    const obtenerDepartamentos = async () => {
      try {
        const data = await fetchDepartamentos();
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al traer los departamentos:", error);
      }
    };

    obtenerDepartamentos();
  }, []);

  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="nombre" className="lg:min-w-[160px]">
            Nombre
          </Label>
          <Input type="text" placeholder="Nombre" id="name" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="lastname" className="lg:min-w-[160px]">
            Apellido
          </Label>
          <Input type="text" placeholder="Apellido" id="lastname" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="cedula" className="lg:min-w-[160px]">
            Cédula
          </Label>
          <Input type="number" placeholder="Cédula" id="cedula" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="Contraseña" className="lg:min-w-[160px]">
            Contraseña
          </Label>
          <Input type="password" placeholder="Contraseña" id="password" />
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="cargo" className="lg:min-w-[160px]">
            Cargo
          </Label>
          <Input type="text" placeholder="Cargo" id="charge" />
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="rol" className="lg:min-w-[160px]">
            Rol
          </Label>
          <Select id="rol">
            <SelectTrigger>
              <SelectValue placeholder="Seleccione rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="administrador" value="1">
                Admin
              </SelectItem>
              <SelectItem key="usuario" value="2">
                Usuario
              </SelectItem>
              <SelectItem key="tecnico" value="3">
                Técnico
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="departamentos" className="lg:min-w-[160px]">
            Departamentos
          </Label>
          <Select
            id="departamentos"
            value={departamentoSeleccionado}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione departamento">
                {/* Muestra el nombre del departamento seleccionado */}
                {departamentoSeleccionado
                  ? departamentos.find(
                      (depto) => depto.id === parseInt(departamentoSeleccionado)
                    )?.nombre
                  : "Seleccione departamento"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent style={{ maxHeight: "200px", overflowY: "auto" }}>
              {departamentos.map((depto) => (
                <SelectItem key={depto.id} value={depto.id.toString()}>
                  {depto.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 lg:pl-[300px] mt-4">
          <Button type="submit">Enviar Usuario</Button>
        </div>
      </div>
    </form>
  );
};

export default HrFormWithLabel;
