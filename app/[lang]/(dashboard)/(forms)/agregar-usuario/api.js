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

const apiPostUsuarios =
  "https://localhost:7180/api/account/createorupdateusuario";

export const handleSubmit = async (e) => {
  e.preventDefault(); // Evita el recargo de la página

  // Datos a enviar
  const data = {
    username: username,
    identificacion: identificacion,
    nombre: nombre,
    apellido: apellido,
    idDepartment: idDepartment,
    cargo: cargo,
    idRol: idRol
  };

  try {
    // Realizar la solicitud POST
    const response = await axios.post("https://api.example.com/login", data);

    // Manejar la respuesta
    console.log("Respuesta:", response.data);
  } catch (error) {
    // Manejar errores
    console.error("Error:", error);
  }
};
