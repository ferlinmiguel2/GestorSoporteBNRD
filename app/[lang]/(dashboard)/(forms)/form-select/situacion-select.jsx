// "use client";
// import { Label } from "@/components/ui/label";
// import { fetchAverias, fetchAveris } from "./apiSituacionSelect";
// import { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";

// const SituacionSelect = () => {
//   const [selectedSituation, setSelectedSituation] = useState("");
//   const [opcionesAverias, setOpcionesAverias] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSituacionChange = async (value) => {
//     setSelectedSituation(value);
//     setLoading(true);
//     setError("");
//     try {
//       const averias = await fetchAverias(value);
//       setOpcionesAverias(averias);
//     } catch (err) {
//       setError("Error al obtener las averías.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div>
//         {" "}
//         <Label className="mb-3 font-medium">Tipo de situación:</Label>
//         <Select onValueChange={handleSituacionChange}>
//           <SelectTrigger>
//             <SelectValue placeholder="Seleccione el tipo de situación" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="1">Impresora</SelectItem>
//             <SelectItem value="2">Teléfono</SelectItem>
//             <SelectItem value="3">Red</SelectItem>
//             <SelectItem value="4">PC</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <Label className=" mt-3 mb-3 font-medium">Tipo de Avería:</Label>
//         <Select disabled={loading || !selectedSituation}>
//           <SelectTrigger>
//             <SelectValue
//               placeholder={
//                 loading
//                   ? "Cargando averías..."
//                   : selectedSituation
//                   ? "Seleccione el tipo de avería"
//                   : "Seleccione primero una situación"
//               }
//             />
//           </SelectTrigger>
//           <SelectContent>
//             {error ? (
//               <SelectItem disabled>Error: {error}</SelectItem>
//             ) : opcionesAverias.length > 0 ? (
//               opcionesAverias.map((averia) => (
//                 <SelectItem key={averia} value={averia}>
//                   {averia}
//                 </SelectItem>
//               ))
//             ) : (
//               <SelectItem disabled>
//                 {selectedSituation
//                   ? "No hay averías disponibles"
//                   : "Selecciona primero una situación"}
//               </SelectItem>
//             )}
//             {/* <SelectItem value="pc">PC</SelectItem>
//             <SelectItem value="telefono">Teléfono</SelectItem>
//             <SelectItem value="impresora">Impresora</SelectItem>
//             <SelectItem value="red">Red</SelectItem> */}
//           </SelectContent>
//         </Select>
//       </div>
//     </>
//   );
// };

// export default SituacionSelect;

"use client";
import { Label } from "@/components/ui/label";
import { fetchProblemas, fetchAverias } from "./apiSituacionSelect";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SituacionSelect = () => {
  const [problemas, setProblemas] = useState([]); // Lista de problemas desde la API
  const [selectedProblema, setSelectedProblema] = useState(""); // Problema seleccionado
  const [averias, setAverias] = useState([]); // Lista de averías del problema seleccionado
  const [loadingProblemas, setLoadingProblemas] = useState(false);
  const [loadingAverias, setLoadingAverias] = useState(false);
  const [error, setError] = useState("");

  // Cargar los problemas al montar el componente
  useEffect(() => {
    const fetchAllProblemas = async () => {
      setLoadingProblemas(true);
      setError("");
      try {
        const problemasData = await fetchProblemas();
        setProblemas(problemasData);
      } catch (err) {
        setError("Error al cargar los problemas.");
      } finally {
        setLoadingProblemas(false);
      }
    };

    fetchAllProblemas();
  }, []);

  // Manejar la selección de un problema
  const handleProblemaChange = async (value) => {
    setSelectedProblema(value);
    setLoadingAverias(true);
    setError("");
    try {
      const averiasData = await fetchAverias(value);
      setAverias(averiasData);
    } catch (err) {
      setError("Error al cargar las averías.");
      setAverias([]);
    } finally {
      setLoadingAverias(false);
    }
  };

  return (
    <div>
      {/* Select Tipo de Problema */}
      <div>
        <Label className="mb-3 font-medium">Tipo de Problema:</Label>
        <Select
          onValueChange={handleProblemaChange}
          disabled={loadingProblemas || error}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={
                loadingProblemas
                  ? "Cargando problemas..."
                  : "Seleccione un problema"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {error ? (
              <SelectItem disabled>Error: {error}</SelectItem>
            ) : (
              problemas.map((problema) => (
                <SelectItem key={problema.id} value={problema.id}>
                  {problema.nombre}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Select Tipo de Avería */}
      <div className="mt-5">
        <Label className="mb-3 font-medium">Tipo de Avería:</Label>
        <Select disabled={loadingAverias || !selectedProblema}>
          <SelectTrigger>
            <SelectValue
              placeholder={
                loadingAverias
                  ? "Cargando averías..."
                  : selectedProblema
                  ? "Seleccione un tipo de avería"
                  : "Seleccione primero un problema"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {error ? (
              <SelectItem disabled>Error: {error}</SelectItem>
            ) : (
              averias.map((averia) => (
                <SelectItem key={averia.id} value={averia.id}>
                  {averia.nombre}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SituacionSelect;
