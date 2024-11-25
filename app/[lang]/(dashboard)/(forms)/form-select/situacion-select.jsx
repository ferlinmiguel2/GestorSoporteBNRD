"use client";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
const SituacionSelect = () => {
  const [selectedSituation, setSelectedsituation] = useState("");
  const [opcionesAverias, setOpcionesAverias] = useState([]);
  const [loading, setLoading] = useState(false);
  cont[(error, setError)] = useState("");

  return (
    <>
      <div>
        {" "}
        <Label className="mb-3 font-medium">Tipo de situación:</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione el tipo de situación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pc">PC</SelectItem>
            <SelectItem value="telefono">Teléfono</SelectItem>
            <SelectItem value="impresora">Impresora</SelectItem>
            <SelectItem value="red">Red</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
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
      </div>
    </>
  );
};

export default SituacionSelect;
