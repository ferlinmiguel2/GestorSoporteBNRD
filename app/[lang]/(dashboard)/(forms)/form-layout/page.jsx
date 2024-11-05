import Card from "@/components/ui/card-snippet";
import HrFormWithLabel from "./hrform-with-label";

const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="mx-auto w-1/2">
        <Card title="Agregar Usuario">
          <HrFormWithLabel />
        </Card>
      </div>
    </div>
  );
};

export default FormLayout;
