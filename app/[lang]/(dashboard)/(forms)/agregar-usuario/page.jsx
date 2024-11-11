import Card from "@/components/ui/card-snippet";
import AgregarUsuario from "./agregar-usuario-form";

const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="mx-auto w-1/2">
        <Card title="Agregar Usuario">
          <AgregarUsuario />
        </Card>
      </div>
    </div>
  );
};

export default FormLayout;
