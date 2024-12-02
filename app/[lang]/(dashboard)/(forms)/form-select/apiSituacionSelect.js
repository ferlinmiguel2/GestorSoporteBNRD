// import axios from "axios";

const apiProblemas = "https://localhost:7180/api/ticketuser/gettipoproblema";

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

export const fetchProblemas = async () => {
  const response = await fetch(apiProblemas);
  if (!response.ok) throw new Error("Error al cargar los problemas.");
  return await response.json();
};

const apiAverias = "https://localhost:7180/api/ticketuser/getproblemas";

export const fetchAverias = async (idProblema) => {
  const url = `${apiAverias}/${idProblema}`;
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) throw new Error("Error al cargar las averías.");
  return await response.json();
};
