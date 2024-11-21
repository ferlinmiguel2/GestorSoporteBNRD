import axios from "axios";
import { toast as reToast } from "react-hot-toast";

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

// export const handleSubmit = async (e) => {
//   try {
//     const response = await axios.post(
//       apiPostUsuarios, // Asegúrate de que sea un objeto JavaScript válido
//       {
//         headers: {
//           "Content-Type": "application/json" // Importante para JSON
//         }
//       }
//     );
//     console.log("Formulario enviado:", response.data);
//     alert("Formulario enviado con éxito");
//   } catch (error) {
//     console.error("Error al enviar el formulario:", error);
//     alert("Hubo un error al enviar el formulario");
//   }
// };

export const handleSubmit = async (formData) => {
  try {
    const response = await axios.post(
      apiPostUsuarios, // Endpoint de la API
      formData, // Cuerpo de la solicitud
      {
        headers: {
          "Content-Type": "application/json" // Asegura el tipo de contenido
        }
      }
    );
    console.log("Formulario enviado:", response.data);
    reToast.success("Usuario creado!");
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    reToast.error("Error al crear el usuario");
  }
};
