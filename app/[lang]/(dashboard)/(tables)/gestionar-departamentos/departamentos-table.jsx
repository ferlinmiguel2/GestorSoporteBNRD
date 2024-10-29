import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const DepartamentosTable = () => {
  const apiURL = "https://localhost:7180/api/ticketuser/getdepartment";
  const columns = [
    {
      key: "id",
      label: "id"
    },
    {
      key: "nombre",
      label: "nombre"
    },
    {
      key: "accion",
      label: "acción"
    }
  ];

  const [depto, setDepto] = useState([]);

  useEffect(() => {
    // Hacemos la petición a la API usando axios
    axios
      .get(apiURL) // Ajusta la ruta según tu endpoint
      .then((response) => {
        console.log(response.data);
        setDepto(response.data); // Guardamos la respuesta en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los departamentos:", error);
      });
  }, []);
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
        {depto.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.nombre}</TableCell>
            <TableCell className="ltr:pr-5 rtl:pl-5">
              <Button className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DepartamentosTable;
