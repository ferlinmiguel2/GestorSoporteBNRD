// "use client";
// import { Label } from "@/components/ui/label";
// import { fetchProblemas, fetchAverias } from "./apiSituacionSelect";
// import { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";

// const SituacionSelect = () => {
//   const [problemas, setProblemas] = useState([]); // Lista de problemas desde la API
//   const [selectedProblema, setSelectedProblema] = useState(""); // Problema seleccionado
//   const [averias, setAverias] = useState([]); // Lista de averías del problema seleccionado
//   const [loadingProblemas, setLoadingProblemas] = useState(false);
//   const [loadingAverias, setLoadingAverias] = useState(false);
//   const [error, setError] = useState("");

//   Cargar los problemas al montar el componente
//   useEffect(() => {
//     const fetchAllProblemas = async () => {
//       setLoadingProblemas(true);
//       setError("");
//       try {
//         const problemasData = await fetchProblemas();
//         setProblemas(problemasData);
//       } catch (err) {
//         setError("Error al cargar los problemas.");
//       } finally {
//         setLoadingProblemas(false);
//       }
//     };

//     fetchAllProblemas();
//   }, []);

//   Manejar la selección de un problema
//   const handleProblemaChange = async (value) => {
//     setSelectedProblema(value);
//     setLoadingAverias(true);
//     setError("");
//     try {
//       const averiasData = await fetchAverias(value);
//       setAverias(averiasData);
//     } catch (err) {
//       setError("Error al cargar las averías.");
//       setAverias([]);
//     } finally {
//       setLoadingAverias(false);
//     }
//   };

//   return (
//     <div>
//       {/* Select Tipo de Problema */}
//       <div>
//         <Label className="mb-3 font-medium">Tipo de Problema:</Label>
//         <Select
//           onValueChange={handleProblemaChange}
//           disabled={loadingProblemas || error}
//         >
//           <SelectTrigger>
//             <SelectValue
//               placeholder={
//                 loadingProblemas
//                   ? "Cargando problemas..."
//                   : "Seleccione un problema"
//               }
//             />
//           </SelectTrigger>
//           <SelectContent>
//             {error ? (
//               <SelectItem disabled>Error: {error}</SelectItem>
//             ) : (
//               problemas.map((problema) => (
//                 <SelectItem key={problema.id} value={problema.id}>
//                   {problema.nombre}
//                 </SelectItem>
//               ))
//             )}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Select Tipo de Avería */}
//       <div className="mt-5">
//         <Label className="mb-3 font-medium">Tipo de Avería:</Label>
//         <Select disabled={loadingAverias || !selectedProblema}>
//           <SelectTrigger>
//             <SelectValue
//               placeholder={
//                 loadingAverias
//                   ? "Cargando averías..."
//                   : selectedProblema
//                   ? "Seleccione un tipo de avería"
//                   : "Seleccione primero un problema"
//               }
//             />
//           </SelectTrigger>
//           <SelectContent>
//             {error ? (
//               <SelectItem disabled>Error: {error}</SelectItem>
//             ) : (
//               averias.map((averia) => (
//                 <SelectItem key={averia.id} value={averia.id}>
//                   {averia.nombre}
//                 </SelectItem>
//               ))
//             )}
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// };

// export default SituacionSelect;

"use client";

import { Label } from "@/components/ui/label";
import { fetchTipoProblema, fetchProblema } from "./apiSituacionSelect";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SituacionSelect = () => {
  const [problemas, setProblemas] = useState([]); // Lista de problemas
  const [selectedProblema, setSelectedProblema] = useState(""); // ID del problema seleccionado
  const [averias, setAverias] = useState([]); // Lista de averías relacionadas
  const [loadingProblemas, setLoadingProblemas] = useState(false); // Indicador de carga para problemas
  const [loadingAverias, setLoadingAverias] = useState(false); // Indicador de carga para averías
  const [error, setError] = useState(""); // Manejo de errores

  // Cargar problemas al montar el componente
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

  // Manejo del cambio en el select de problema
  const handleProblemaChange = async (Id) => {
    setSelectedProblema(Id);
    setAverias([]); // Limpiar las averías previas
    if (!Id) return;

    setLoadingAverias(true);
    setError("");
    try {
      const averiasData = await fetchProblema(Id); // Cargar averías dinámicamente
      setAverias(averiasData);
    } catch (err) {
      setError("Error al cargar las averías.");
    } finally {
      setLoadingAverias(false);
    }
  };

  return (
    <div>
      {/* Select de Problemas */}
      <div>
        <Label className="mb-3 font-medium">Tipo de Problema:</Label>
        <Select
          onValueChange={handleProblemaChange}
          disabled={loadingProblemas}
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
            {problemas.map((problema) => (
              <SelectItem key={problema.id} value={problema.id}>
                {problema.nombre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select de Averías */}
      <div className="mt-5">
        <Label className="mb-3 font-medium">Tipo de Avería:</Label>
        <Select
          disabled={loadingAverias || !selectedProblema}
          onValueChange={(value) =>
            console.log(`Avería seleccionada: ${value}`)
          }
        >
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
            {averias.map((averia) => (
              <SelectItem key={averia.id} value={averia.id}>
                {averia.nombre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mostrar errores */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SituacionSelect;
