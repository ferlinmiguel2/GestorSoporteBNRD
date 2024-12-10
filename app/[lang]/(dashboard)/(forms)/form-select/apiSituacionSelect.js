const apiTipoProblemas =
  "https://localhost:7180/api/ticketuser/gettipoproblema";
export const fetchTipoProblema = async () => {
  const response = await fetch(apiTipoProblemas);
  if (!response.ok) throw new Error("Error al cargar los problemas.");
  return await response.json();
};

const apiAverias = "https://localhost:7180/api/ticketuser/getproblema";

export const fetchProblema = async (idTipoProblema) => {
  const url = `${apiAverias}?idTipoProblema=${idTipoProblema}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al cargar las averías.");
  return await response.json();
};
