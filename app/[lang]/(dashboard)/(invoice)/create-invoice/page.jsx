"use client";
import { Button } from "@/components/ui/button";
import SituacionSelect from "../../(forms)/form-select/situacion-select";
import AveriaSelect from "../../(forms)/form-select/averia-select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import Link from "next/link";

const InvoicePage = () => {
  return (
    <div className="grid place-items-center">
      <Card className="col-span-12 xl:col-span-12 w-full">
        <CardHeader className="sm:flex-row sm:items-center gap-3">
          <div className="flex-1 text-xl font-medium text-default-700 whitespace-nowrap">
            Informar Situación
          </div>
        </CardHeader>
        <CardContent>
          <SituacionSelect />
        </CardContent>
        <CardFooter className="flex-wrap justify-end gap-4">
          {/* <Button
            asChild
            className="group hover:bg-default-200 hover:text-default-900 text-xs font-semibold whitespace-nowrap"
          >
            <Link href="">
              <Icon
                icon="heroicons:paper-airplane"
                className="w-5 h-5 ltr:mr-2 rtl:ml-2 group-hover:text-default-900"
              />{" "}
              Enviar Ticket
            </Link>
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default InvoicePage;
