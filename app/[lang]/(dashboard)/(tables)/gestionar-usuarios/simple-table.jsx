import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const SimpleTable = () => {
  const apiURL = "https://localhost:7180/api/ticketuser/getusuario";
  const columns = [
    {
      key: "id",
      label: "id"
    },
    {
=======
import { users } from "./data";
import { Button } from "@/components/ui/button";

const SimpleTable = () => {
  const columns = [
    {
>>>>>>> 0033b5b69 (first commit)
      key: "nombre",
      label: "nombre"
    },
    {
<<<<<<< HEAD
      key: "apellido",
      label: "apellido"
=======
      key: "cargo",
      label: "cargo"
>>>>>>> 0033b5b69 (first commit)
    },
    {
      key: "departamento",
      label: "departamento"
    },
    {
<<<<<<< HEAD
      key: "cargo",
      label: "cargo"
    },
    {
=======
>>>>>>> 0033b5b69 (first commit)
      key: "rol",
      label: "rol"
    },
    {
      key: "accion",
      label: "acción"
    }
  ];
<<<<<<< HEAD

  const [users, setUsuarios] = useState([]);

  useEffect(() => {
    // Hacemos la petición a la API usando axios
    axios
      .get(apiURL) // Ajusta la ruta según tu endpoint
      .then((response) => {
        console.log(response.data);
        setUsuarios(response.data); // Guardamos la respuesta en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []);
=======
>>>>>>> 0033b5b69 (first commit)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
<<<<<<< HEAD
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.nombre}</TableCell>
            <TableCell>{item.apellido}</TableCell>
            <TableCell>{item.departmentNombre}</TableCell>
            <TableCell>{item.cargo}</TableCell>
            <TableCell>
              <span className="capitalize font-medium">{item.rolNombre}</span>
            </TableCell>
            <TableCell className="ltr:pr-5 rtl:pl-5">
              <Button className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                Editar
=======
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <span className="capitalize font-medium">{item.role}</span>
            </TableCell>
            <TableCell className="ltr:pr-5 rtl:pl-5">
              <Button className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                Edit
>>>>>>> 0033b5b69 (first commit)
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
