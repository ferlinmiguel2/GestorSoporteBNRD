import axios from "axios";

const apiDepartamentos = "https://localhost:7180/api/ticketuser/getdepartment";
export const fetchDepartamentos = async () => {
  try {
    const response = await axios.get(apiDepartamentos);
    const data = response.data.map((depto) => ({
      id: depto.id,
      nombre: depto.nombre
    }));
    return response.data;
  } catch (error) {
    console.error("Error al traer los departamentos:", error);
  }
};

const apiRoles = "";
export const fetchRoles = async () => {
  try {
    const response = await axios.get(apiRoles);
    const data = response.data.map((rol) => ({}));
  } catch (error) {
    console.error("Error al traer los roles:", error);
  }
};
