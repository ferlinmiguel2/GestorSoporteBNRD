"use client";
import { useEffect, useState } from "react";
import {
  fetchTipoProblema,
  fetchProblema,
  createTicketEmployeed
} from "./apiSituacionSelect";

const SituacionSelect = () => {
  const [formData, setFormData] = useState({
    idTipoProblema: "",
    idProblema: ""
  });
  const [problemas, setProblemas] = useState([]);
  const [averias, setAverias] = useState([]);
  const [loadingProblemas, setLoadingProblemas] = useState(false);
  const [loadingAverias, setLoadingAverias] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllProblemas = async () => {
      setLoadingProblemas(true);
      setError("");
      try {
        const problemasData = await fetchTipoProblema();
        setProblemas(problemasData);
      } catch (err) {
        setError("Error al cargar los problemas.");
      } finally {
        setLoadingProblemas(false);
      }
    };

    fetchAllProblemas();
  }, []);

  const handleSelectChange = async (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "idTipoProblema") {
      setFormData((prev) => ({ ...prev, idProblema: "" })); // Resetear avería
      setLoadingAverias(true);
      setError("");

      try {
        const averiasData = await fetchProblema(value);
        setAverias(averiasData);
      } catch (err) {
        setError("Error al cargar las averías.");
      } finally {
        setLoadingAverias(false);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Enviar formData con los IDs
    console.log("Formulario enviado:", formData);
    createTicketEmployeed(formData);
    setFormData({
      idProblema: "",
      idTipoProblema: ""
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Select de Problemas */}
        <div>
          <label className="mb-3 font-medium" htmlFor="idTipoProblema">
            Tipo de Problema:
          </label>
          <select
            id="idTipoProblema"
            value={formData.idTipoProblema}
            onChange={(e) =>
              handleSelectChange("idTipoProblema", e.target.value)
            }
            disabled={loadingProblemas}
            className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              {loadingProblemas
                ? "Cargando problemas..."
                : "Seleccione un problema"}
            </option>
            {problemas.map((problema) => (
              <option key={problema.id} value={problema.id}>
                {problema.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Select de Averías */}
        <div className="mt-5">
          <label className="mb-3 font-medium" htmlFor="idProblema">
            Tipo de Avería:
          </label>
          <select
            id="idProblema"
            value={formData.idProblema}
            onChange={(e) => handleSelectChange("idProblema", e.target.value)}
            disabled={loadingAverias || !formData.idTipoProblema}
            className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              {loadingAverias
                ? "Cargando averías..."
                : formData.idTipoProblema
                ? "Seleccione un tipo de avería"
                : "Seleccione primero un problema"}
            </option>
            {averias.map((averia) => (
              <option key={averia.idProblema} value={averia.idProblema}>
                {averia.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar errores */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Botón de envío */}
        <div className="mt-5">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SituacionSelect;
