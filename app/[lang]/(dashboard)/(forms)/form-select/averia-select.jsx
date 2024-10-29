"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

//TODO: El la petición al API para poder traer las opciones de tipos de problemas al select.
const AveriaSelect = () => {
  return (
    <>
      <Label className=" mt-3 mb-3 font-medium">Tipo de Avería:</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Seleccione el tipo de averías" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pc">PC</SelectItem>
          <SelectItem value="telefono">Teléfono</SelectItem>
          <SelectItem value="impresora">Impresora</SelectItem>
          <SelectItem value="red">Red</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default AveriaSelect;
