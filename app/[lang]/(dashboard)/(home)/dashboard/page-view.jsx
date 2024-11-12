"use client";

import PastelProgreso from "@/app/[lang]/(dashboard)/(home)/dashboard/pastel-progreso";
import Historico from "./components/Historico";
import Recientes from "./components/recientes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSelect from "@/components/dasboard-select";
import EstadisticasTickets from "./components/estadistica-tickets";
import Categoria from "./components/categoria";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardDropdown from "@/components/dashboard-dropdown";
import DatePickerWithRange from "@/components/date-picker-with-range";
const DashboardPageView = () => {
  return (
    //Contenedor de todos los componentes mostrados en el dashboard
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="text-2xl font-medium text-default-800">
          Administrador
        </div>
        {/* Considerar que el date picker sea solo eso, sin ranged */}
        <DatePickerWithRange />
      </div>

      {/* Tarjeta donde se muestra la estadística al mes, día, resueltas al mes y pendientes */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <EstadisticasTickets />
          </div>
        </CardContent>
      </Card>

      {/* Contenedor de las tarjetas: histórico de soportes, recientes, categorías y el gráfico pastel. */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader className="flex-row justify-between items-center gap-4 mb-0 border-none p-6 pb-4">
              <CardTitle className="whitespace-nowrap">
                Historico De Soportes
              </CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent className="px-0 pt-0 h-[770px] pb-0">
              <ScrollArea className="h-full">
                <Historico />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Recientes />
        </div>

        {/* Contenedor de la tarjeta de categorías */}
        <div className="w-96 col-span-12 lg:col-span-8 2xl:col-span-3">
          {/* Tarjeta Categorías */}
          <Card>
            <CardHeader className="mb-0">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="flex-1 whitespace-nowrap">
                  Categorías
                </CardTitle>
                <div className="flex-none">
                  <DashboardSelect />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0 pt-0 h-[520px] pb-2">
              <ScrollArea className="h-full">
                <Categoria />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        {/* Gráfico pastel sobre los tickets */}
        <div className="col-span-12 lg:col-span-5">
          <PastelProgreso />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
