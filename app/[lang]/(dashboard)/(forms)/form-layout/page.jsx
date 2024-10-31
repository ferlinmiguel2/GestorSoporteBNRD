import Card from "@/components/ui/card-snippet";
import HrFormWithLabel from "./hrform-with-label";

const FormLayout = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Horizontal Form With Label">
          <HrFormWithLabel />
        </Card>
      </div>
    </div>
  );
};

export default FormLayout;
