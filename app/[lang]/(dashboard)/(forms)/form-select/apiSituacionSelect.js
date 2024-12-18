import axios from "axios";
import { toast as reToast } from "react-hot-toast";
import { getToken } from "next-auth/jwt";

export async function postTicket(data) {
  const token = await getToken({ req: null }); // Obtiene el token del cliente
  if (!token) {
    throw new Error("No se pudo obtener el token de autenticación");
  }
}
// Funciones de llamada a la API
const GET_TIPO_PROBLEMA =
  "https://localhost:7180/api/ticketuser/gettipoproblema";
export const fetchTipoProblema = async () => {
  const response = await fetch(GET_TIPO_PROBLEMA);
  if (!response.ok) throw new Error("Error al cargar los problemas.");
  return await response.json();
};

const GET_PROBLEMA = "https://localhost:7180/api/ticketuser/getproblema";
export const fetchProblema = async (idTipoProblema) => {
  const URL = `${GET_PROBLEMA}?idTipoProblema=${idTipoProblema}`;
  const response = await fetch(URL);
  if (!response.ok) throw new Error("Error al cargar las averías.");
  return await response.json();
};

const SEND_TICKET_URL =
  "https://localhost:7180/api/ticketuser/createticketemployeed";

export const createTicketEmployeed = async (formData) => {
  try {
    const response = await axios.post(SEND_TICKET_URL, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    console.log("Formulario enviado:", response.data);
    reToast.success("Ticket creado!");
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    reToast.error("Error al crear el ticket");
  }
};
