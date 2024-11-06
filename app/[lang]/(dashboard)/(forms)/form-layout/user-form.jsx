import React from "react";

("use client");
import { Input } from "@/components/ui/input";
import { fetchDepartamentos } from "./api.js";
import * as Select from "@radix-ui/react-select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HrFormWithLabel = () => {
  //Array para almacenar la información traída de la base de datos.
  const [departamentos, setDepartamentos] = useState([]);

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");

  const handleSelectChange = (event) => {
    const departamentoSeleccionadoId = event.value;
    const seleccionado = departamentos.find(
      (departamento) => departamento.id === parseInt(departamentoSeleccionadoId)
    );
    setDepartamentoSeleccionado(seleccionado);
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
          <Select.Root
            id="rol"
            value={departamentoSeleccionado}
            onValueChange={handleSelectChange}
          >
            <Select.Trigger>
              <Select.Value placeholder="Seleccione departamento" />
            </Select.Trigger>
            <Select.Content style={{ maxHeight: "200px", overflowY: "auto" }}>
              {departamentos.map((depto) => (
                <Select.Item key={depto.id} value={depto.id}>
                  <Select.ItemText>{depto.nombre}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
        <div className="col-span-2 lg:pl-[300px] mt-4">
          <Button type="submit">Enviar Usuario</Button>
        </div>
      </div>
    </form>
  );
};

export default HrFormWithLabel;
