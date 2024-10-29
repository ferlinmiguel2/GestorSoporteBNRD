<<<<<<< HEAD
"use client";
import { Input } from "@/components/ui/input";
import axios from "axios";
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
const AgregarUsuariosForm = () => {
  const apiUrl = "https://localhost:7180/api/ticketuser/getdepartment";
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data.map((depto) => ({
          id: depto.id,
          nombre: depto.nombre
        }));
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al traer los departamentos:", error);
      }
    };

    fetchDepartamentos();
  }, []);
=======
"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button'
const HrFormWithLabel = () => {
>>>>>>> 0033b5b69 (first commit)
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
<<<<<<< HEAD
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
              {/* TODO: for para las opciones traidas de api */}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="departamento" className="lg:min-w-[160px]">
            Departamento
          </Label>
          {/* Hacer los selects manualmente y agregarle estilos */}
          <Select id="department">
            <SelectTrigger>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent style={{ maxHeight: "200px", overflowY: "scroll" }}>
              <SelectItem value="">--Seleccione Depto--</SelectItem>
              {departamentos.map((depto) => (
                <SelectItem key={depto.Id} value={depto.Id}>
                  {depto.nombre}
                </SelectItem>
              ))}
=======
          <Label htmlFor="hrFullName2" className="lg:min-w-[160px]">Full Name</Label>
          <Input type="text" placeholder="Your Name" id="hrFullName2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrEmail2" className="lg:min-w-[160px]">Email Address</Label>
          <Input type="email" placeholder="Your Email" id="hrEmail2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPassword2" className="lg:min-w-[160px]">Password</Label>
          <Input type="password" placeholder="Your Password" id="hrPassword2" />
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="hrPhone2" className="lg:min-w-[160px]">Phone Number</Label>
          <Input type="number" placeholder="Your Number" id="hrPhone2" />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
          <Label htmlFor="state" className="lg:min-w-[160px]">State</Label>
          <Select id="state">
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alberta">Alberta</SelectItem>
              <SelectItem value="british">British Columbia</SelectItem>
              <SelectItem value="manitoba">Manitoba</SelectItem>
              <SelectItem value="brunswick">New Brunswick</SelectItem>
              <SelectItem value="ontario">Ontario</SelectItem>
>>>>>>> 0033b5b69 (first commit)
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 lg:pl-[160px]">
<<<<<<< HEAD
          <Button type="submit">Agregar</Button>
        </div>
      </div>
=======
          <div className="flex lg:items-center gap-1.5">
            <Checkbox id="term5" size="sm" color="default" />
            <Label
              htmlFor="term5"
              className="text-base text-muted-foreground font-normal"
            >
              Agree to terms and conditions
            </Label>
          </div>
        </div>
        <div className="col-span-2 lg:pl-[160px]">
          <Button type="submit">Submit Form</Button>
        </div>
      </div>

>>>>>>> 0033b5b69 (first commit)
    </form>
  );
};

<<<<<<< HEAD
export default AgregarUsuariosForm;
=======
export default HrFormWithLabel;
>>>>>>> 0033b5b69 (first commit)
