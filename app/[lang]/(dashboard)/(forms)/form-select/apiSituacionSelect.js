// import axios from "axios";

// const apiProblemas = "https://localhost:7180/api/ticketuser/gettipoproblema";

// export const fetchAverias = async (tipoProblema) => {
//   try {
//     const response = await axios.get(apiProblemas, {
//       params: { tipoProblema }
//     });
//     return response.data.averias || []; // Asegúrate de que sea un arreglo
//   } catch (err) {
//     console.error(err.message || "Error desconocido");
//     return []; // Retorna un arreglo vacío en caso de error
//   }
// };
import axios from "axios";

const apiProblemas = "https://localhost:7180/api/ticketuser/gettipoproblema";

export const fetchProblemas = async () => {
  try {
    const response = await axios.get(apiProblemas);
    console.log(response);
    return response.data || [];
  } catch (err) {
    console.error(err.message || "Error desconocido al obtener problemas.");
    throw new Error("Error al obtener problemas.");
  }
};

const apiAverias = "https://localhost:7180/api/ticketuser/getproblema";

export const fetchAverias = async (problemaId) => {
  try {
    const response = await axios.get(apiAverias, {
      params: { problemaId }
    });
    return response.data || []; // Devuelve un arreglo
  } catch (err) {
    console.error(err.message || "Error desconocido al obtener averías.");
    throw new Error("Error al obtener averías.");
  }
};
