import axios from "axios";

const apiProblemas = "https://localhost:7180/api/ticketuser/gettipoproblema";

export const fetchAverias = async () => {
  try {
    const response = await axios.get(apiProblemas, {
      params: { tipoProblema }
    });
    setOpcionesAverias(response.data.averias);
  } catch (err) {
    setError(err.response?.data?.message || "Error desconocido");
  }
};
