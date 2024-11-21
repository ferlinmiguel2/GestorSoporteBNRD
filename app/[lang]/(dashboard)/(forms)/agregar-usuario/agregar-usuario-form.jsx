"use client";
import { Input } from "@/components/ui/input";
import { fetchDepartamentos } from "./api.js";
import { handleSubmit } from "./api.js";
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

// const AgregarUsuario = () => {
//   //Array para almacenar la información traída de la base de datos.
//   const [departamentos, setDepartamentos] = useState([]);
//   const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");

//   const [formData, setFormData] = useState({
//     nombre: "",
//     username: "",
//     identificacion: "",
//     cargo: "",
//     idRol: "",
//     idDepartment: ""
//   });

//   const handleSelectChange = (value) => {
//     setDepartamentoSeleccionado(value); // Aquí almacenamos solo el ID
//   };

//   //useEffect encargado de hacer el fetch a la api mediante el import del mismo desde api.js
//   useEffect(() => {
//     const obtenerDepartamentos = async () => {
//       try {
//         const data = await fetchDepartamentos();
//         setDepartamentos(data);
//       } catch (error) {
//         console.error("Error al traer los departamentos:", error);
//       }
//     };

//     obtenerDepartamentos();
//   }, []);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit(formData);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="nombre" className="lg:min-w-[160px]">
//             Nombre
//           </Label>
//           <Input type="text" placeholder="Nombre" id="nombre" />
//         </div>
//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="nombre" className="lg:min-w-[160px]">
//             Nombre de usuario
//           </Label>
//           <Input type="text" placeholder="username" id="username" />
//         </div>
//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="identificacion" className="lg:min-w-[160px]">
//             Identificación
//           </Label>
//           <Input
//             type="password"
//             placeholder="identificacion"
//             id="identificacion"
//           />
//         </div>

//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="cargo" className="lg:min-w-[160px]">
//             Cargo
//           </Label>
//           <Input type="text" placeholder="Cargo" id="cargo" />
//         </div>

//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="rol" className="lg:min-w-[160px]">
//             Rol
//           </Label>
//           <Select id="idRol">
//             <SelectTrigger>
//               <SelectValue placeholder="Seleccione rol" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem key="administrador" value="1">
//                 Admin
//               </SelectItem>
//               <SelectItem key="usuario" value="2">
//                 Usuario
//               </SelectItem>
//               <SelectItem key="tecnico" value="3">
//                 Técnico
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="col-span-2  flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center ">
//           <Label htmlFor="departamentos" className="lg:min-w-[160px]">
//             Departamentos
//           </Label>
//           <Select
//             id="idDepartment"
//             value={departamentoSeleccionado}
//             onValueChange={handleSelectChange}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Seleccione departamento">
//                 {/* Muestra el nombre del departamento seleccionado */}
//                 {departamentoSeleccionado
//                   ? departamentos.find(
//                       (depto) => depto.id === parseInt(departamentoSeleccionado)
//                     )?.nombre
//                   : "Seleccione departamento"}
//               </SelectValue>
//             </SelectTrigger>
//             <SelectContent style={{ maxHeight: "200px", overflowY: "auto" }}>
//               {departamentos.map((depto) => (
//                 <SelectItem key={depto.id} value={depto.id.toString()}>
//                   {depto.nombre}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="col-span-2 lg:pl-[300px] mt-4">
//           <Button type="submit">Enviar Usuario</Button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default AgregarUsuario;

const AgregarUsuario = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    username: "",
    identificacion: "",
    cargo: "",
    idRol: "",
    idDepartment: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: ["idDepartment", "idRol"].includes(field)
        ? parseInt(value, 10)
        : value
    }));
  };

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData); // Verifica si idDepartment tiene un valor
    handleSubmit(formData);

    setFormData({
      nombre: "",
      username: "",
      identificacion: "",
      cargo: "",
      idRol: "",
      idDepartment: ""
    });
  };

  return (
    <form id="formularioCrearUsuario" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="nombre" className="lg:min-w-[160px]">
            Nombre
          </Label>
          <Input
            type="text"
            id="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="username" className="lg:min-w-[160px]">
            Nombre de usuario
          </Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="identificacion" className="lg:min-w-[160px]">
            Identificación
          </Label>
          <Input
            type="text"
            id="identificacion"
            placeholder="Identificacion"
            value={formData.identificacion}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="cargo" className="lg:min-w-[160px]">
            Cargo
          </Label>
          <Input
            type="text"
            id="cargo"
            placeholder="Cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="idRol" className="lg:min-w-[160px]">
            Rol
          </Label>
          <Select
            value={formData.idRol} // Vincula al estado
            onValueChange={(value) => handleSelectChange("idRol", value)} // Actualiza el estado
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione rol">
                {{
                  1: "Admin",
                  2: "Técnico",
                  3: "Empleado"
                }[formData.idRol] || "Seleccione rol"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Admin</SelectItem>
              <SelectItem value="2">Técnico</SelectItem>
              <SelectItem value="3">Empleado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">
          <Label htmlFor="idDepartment" className="lg:min-w-[160px]">
            Departamentos
          </Label>
          <Select
            value={formData.idDepartment}
            onValueChange={(value) => handleSelectChange("idDepartment", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione departamento">
                {departamentos.find(
                  (d) => d.id === parseInt(formData.idDepartment, 10)
                )?.nombre || "Seleccione departamento"}
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
          {function limpiarForm() {}}
        </div>
      </div>
    </form>
  );
};

export default AgregarUsuario;
