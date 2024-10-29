"use client";

import Card from "@/components/ui/card-snippet";
import DepartamentosTable from "./departamentos-table";
import { Button } from "@/components/ui/button";
const TailwindUiTable = () => {
  return (
    <div className=" space-y-6">
      <Card title="Gestionar Departamentos">
        <div className="flex flex-wrap items-center gap-4 mb-1">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-default-700 mb-2">
              Departamentos
            </h3>
          </div>
          <div className="flex-none">
            <Button type="button">Añadir Departamentos</Button>
          </div>
        </div>
        <DepartamentosTable />
      </Card>
    </div>
  );
};

export default TailwindUiTable;
