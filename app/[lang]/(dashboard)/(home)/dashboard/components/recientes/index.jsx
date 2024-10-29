"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecientesTable from "./recientes-table";

const Recientes = () => {
  return (
    <Card>
      <CardHeader className="mb-0 p-6">
        <CardTitle>Solicitudes Recientes</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <RecientesTable />
      </CardContent>
    </Card>
  );
};

export default Recientes;
