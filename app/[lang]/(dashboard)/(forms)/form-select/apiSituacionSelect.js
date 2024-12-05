// import axios from "axios";

// export const fetchProblemas = async () => {
//   try {
//     const response = await axios.get(apiProblemas);
//     console.log(response);
//     return response.data || [];
//   } catch (err) {
//     console.error(err.message || "Error desconocido al obtener problemas.");
//     throw new Error("Error al obtener problemas.");
//   }
// };

// export const fetchAverias = async (problemaId) => {
//   try {
//     const response = await axios.get(apiAverias, {
//       params: { problemaId }
//     });
//     return response.data || []; // Devuelve un arreglo
//   } catch (err) {
//     console.error(err.message || "Error desconocido al obtener averías.");
//     throw new Error("Error al obtener averías.");
//   }
// };
const apiTipoProblemas =
  "https://localhost:7180/api/ticketuser/gettipoproblema";
export const fetchTipoProblema = async () => {
  const response = await fetch(apiTipoProblemas);
  if (!response.ok) throw new Error("Error al cargar los problemas.");
  return await response.json();
};

const apiAverias = "https://localhost:7180/api/ticketuser/getproblema";

// export const fetchProblema = async (Id) => {
//   const url = `${apiAverias}/${Id}`;
//   const response = await fetch(url);
//   console.log(response);
//   if (!response.ok) throw new Error("Error al cargar las averías.");
//   return await response.json();
// };

const fetchProblema = async (Id) => {
  const url = `${apiAverias}/${Id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al cargar las averías.");
  return await response.json();
};
