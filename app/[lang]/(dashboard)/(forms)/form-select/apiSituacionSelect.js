import axios from "axios";

const apiProblemas = "https://localhost:7180/api/ticketuser/gettipoproblema";

export const fetchAverias = async (tipoProblema) => {
  try {
    const response = await axios.get(apiProblemas, {
      params: { tipoProblema }
    });
    return response.data.averias;
  } catch (err) {
    setError(err.response?.data?.message || "Error desconocido");
  }
};
