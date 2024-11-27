"use client";
import { Label } from "@/components/ui/label";
import { fetchAverias, fetchAveris } from "./apiSituacionSelect";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SituacionSelect = () => {
  const [selectedSituation, setSelectedSituation] = useState("");
  const [opcionesAverias, setOpcionesAverias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSituacionChange = async (value) => {
    setSelectedSituation(value);
    setLoading(true);
    setError("");
    try {
      const averias = await fetchAverias(value);
      setOpcionesAverias(averias);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        {" "}
        <Label className="mb-3 font-medium">Tipo de situación:</Label>
        <Select onValueChange={handleSituacionChange}>
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
        <Select disabled={loading || !selectedSituation}>
          <SelectTrigger>
            <SelectValue
              placeholder={
                loading
                  ? "Cargando averías..."
                  : selectedSituation
                  ? "Seleccione el tipo de avería"
                  : "Seleccione primero una situación"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {error ? (
              <SelectItem disabled>Error: {error}</SelectItem>
            ) : opcionesAverias.length > 0 ? (
              opcionesAverias.map((averia) => (
                <SelectItem key={averia} value={averia}>
                  {averia}
                </SelectItem>
              ))
            ) : (
              <SelectItem disabled>
                {selectedSituation
                  ? "No hay averías disponibles"
                  : "Selecciona primero una situación"}
              </SelectItem>
            )}
            {/* <SelectItem value="pc">PC</SelectItem>
            <SelectItem value="telefono">Teléfono</SelectItem>
            <SelectItem value="impresora">Impresora</SelectItem>
            <SelectItem value="red">Red</SelectItem> */}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SituacionSelect;
