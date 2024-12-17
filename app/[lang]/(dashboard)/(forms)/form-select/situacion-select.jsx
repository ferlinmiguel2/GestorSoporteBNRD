// "use client";
// import { Label } from "@/components/ui/label";
// import { fetchTipoProblema, fetchProblema } from "./apiSituacionSelect";
// import { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";

// const SituacionSelect = () => {
//   const [problemas, setProblemas] = useState([]); // Lista de problemas
//   const [selectedProblema, setSelectedProblema] = useState(""); // ID del problema seleccionado
//   const [selectedAveria, setSelectedAveria] = useState(""); // ID de la avería seleccionada
//   const [averias, setAverias] = useState([]); // Lista de averías relacionadas
//   const [loadingProblemas, setLoadingProblemas] = useState(false); // Indicador de carga para problemas
//   const [loadingAverias, setLoadingAverias] = useState(false); // Indicador de carga para averías
//   const [error, setError] = useState(""); // Manejo de errores

//   // Cargar problemas al montar el componente
//   useEffect(() => {
//     const fetchAllProblemas = async () => {
//       setLoadingProblemas(true);
//       setError("");
//       try {
//         const problemasData = await fetchTipoProblema();
//         setProblemas(problemasData);
//       } catch (err) {
//         setError("Error al cargar los problemas.");
//       } finally {
//         setLoadingProblemas(false);
//       }
//     };

//     fetchAllProblemas();
//   }, []);

//   // Manejo del cambio en el select de problema
//   const handleProblemaChange = async (id) => {
//     setSelectedProblema(id); // Establecer el ID del problema seleccionado
//     setAverias([]); // Limpiar averías previas
//     setSelectedAveria(""); // Limpiar avería seleccionada
//     setLoadingAverias(true);
//     setError("");

//     try {
//       const averiasData = await fetchProblema(id); // Enviar el ID como parámetro
//       console.log("Averías obtenidas:", averiasData);
//       setAverias(averiasData);
//     } catch (err) {
//       setError("Error al cargar las averías.");
//     } finally {
//       setLoadingAverias(false);
//     }
//   };

//   const handleAveriaChange = (id) => {
//     console.log("Avería seleccionada:", id);
//     setSelectedAveria(id); // Establecer la avería seleccionada
//   };

//   return (
//     <div>
//       {/* Select de Problemas */}
//       <div>
//         <Label className="mb-3 font-medium">Tipo de Problema:</Label>
//         <Select
//           value={selectedProblema}
//           onValueChange={handleProblemaChange}
//           disabled={loadingProblemas}
//         >
//           <SelectTrigger>
//             <SelectValue
//               placeholder={
//                 loadingProblemas
//                   ? "Cargando problemas..."
//                   : selectedProblema
//                   ? problemas.find((p) => p.id === selectedProblema)?.nombre ||
//                     "Seleccione un problema"
//                   : "Seleccione un problema"
//               }
//             />
//           </SelectTrigger>
//           <SelectContent>
//             {problemas.map((problema) => (
//               <SelectItem key={problema.id} value={problema.id}>
//                 {problema.nombre}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Select de Averías */}
//       <div className="mt-5">
//         <Label className="mb-3 font-medium">Tipo de Avería:</Label>
//         <Select
//           value={selectedAveria}
//           onValueChange={(value) => setSelectedAveria(value)} // Actualiza el estado con el valor seleccionado
//           disabled={loadingAverias || !selectedProblema}
//         >
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
//             {averias.map((averia) => (
//               <SelectItem key={averia.idProblema} value={averia.idProblema}>
//                 {averia.nombre}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Mostrar errores */}
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//     </div>
//   );
// };
// export default SituacionSelect;

// "use client";
// import { useEffect, useState } from "react";
// import { fetchTipoProblema, fetchProblema } from "./apiSituacionSelect";

// const SituacionSelect = () => {
//   const [formData, setFormData] = useState({
//     problema: "",
//     averia: ""
//   });
//   const [problemas, setProblemas] = useState([]);
//   const [averias, setAverias] = useState([]);
//   const [loadingProblemas, setLoadingProblemas] = useState(false);
//   const [loadingAverias, setLoadingAverias] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAllProblemas = async () => {
//       setLoadingProblemas(true);
//       setError("");
//       try {
//         const problemasData = await fetchTipoProblema();
//         setProblemas(problemasData);
//       } catch (err) {
//         setError("Error al cargar los problemas.");
//       } finally {
//         setLoadingProblemas(false);
//       }
//     };

//     fetchAllProblemas();
//   }, []);

//   const handleSelectChange = async (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));

//     if (field === "problema") {
//       setFormData((prev) => ({ ...prev, averia: "" })); // Resetear avería
//       setLoadingAverias(true);
//       setError("");

//       try {
//         const averiasData = await fetchProblema(value);
//         setAverias(averiasData);
//       } catch (err) {
//         setError("Error al cargar las averías.");
//       } finally {
//         setLoadingAverias(false);
//       }
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("Formulario enviado:", formData);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         {/* Select de Problemas */}
//         <div>
//           <label className="mb-3 font-medium" htmlFor="problema">
//             Tipo de Problema:
//           </label>
//           <select
//             id="problema"
//             value={formData.problema}
//             onChange={(e) => handleSelectChange("problema", e.target.value)}
//             disabled={loadingProblemas}
//             className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//           >
//             <option
//               value=""
//               className="hover:bg-blue-500 hover:text-white"
//               disabled
//             >
//               {loadingProblemas
//                 ? "Cargando problemas..."
//                 : "Seleccione un problema"}
//             </option>
//             {problemas.map((problema) => (
//               <option
//                 className="hover:bg-blue-500 hover:text-white"
//                 key={problema.id}
//                 value={problema.id}
//               >
//                 {problema.nombre}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Select de Averías */}
//         <div className="mt-5">
//           <label className="mb-3 font-medium" htmlFor="averia">
//             Tipo de Avería:
//           </label>
//           <select
//             id="averia"
//             value={formData.averia}
//             onChange={(e) => handleSelectChange("averia", e.target.value)}
//             disabled={loadingAverias || !formData.problema}
//             className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//           >
//             <option
//               value=""
//               className="hover:bg-blue-500 hover:text-white"
//               disabled
//             >
//               {loadingAverias
//                 ? "Cargando averías..."
//                 : formData.problema
//                 ? "Seleccione un tipo de avería"
//                 : "Seleccione primero un problema"}
//             </option>
//             {averias.map((averia) => (
//               <option
//                 className="hover:bg-blue-500 hover:text-white"
//                 key={averia.idProblema}
//                 value={averia.idProblema}
//               >
//                 {averia.nombre}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Mostrar errores */}
//         {error && <p className="text-red-500 mt-4">{error}</p>}

//         {/* Botón de envío */}
//         <div className="mt-5">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Enviar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SituacionSelect;

"use client";
import { useEffect, useState } from "react";
import { fetchTipoProblema, fetchProblema } from "./apiSituacionSelect";

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
