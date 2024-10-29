"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Flatpickr from "react-flatpickr";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import TecnicosSelect from "../../(forms)/form-select/tecnicos-select";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
const ToggleDialog = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlide = 3;
  const handleNextSlide = () => {
    setActiveIndex(activeIndex + 1);
  };
  const handlePrevSlide = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="outline" className="group">
            <Icon icon="heroicons:eye" className=" h-6 w-6 " />
          </Button>
        </DialogTrigger>
        <DialogContent size="2xl" className="p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              {" "}
              Ticket
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[700px]">
            <ScrollArea className="h-full px-6">
              {activeIndex === 1 && (
                <div className="flex flex-col items-start text-start">
                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
                    ID
                  </h3>
                  <span className="text-sm text-default-500  mt-1 block">
                    ##
                  </span>

                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-3">
                    Usuario
                  </h3>
                  <span className="text-sm text-default-500  mt-1 block">
                    Fulano De Tal
                  </span>

                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-3">
                    Departamento
                  </h3>
                  <span className="text-sm text-default-500  mt-1 block">
                    Departamento del usuario
                  </span>

                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-3">
                    Situación:
                  </h3>
                  <span className="text-sm text-default-500  mt-1 block">
                    PC
                  </span>

                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-3">
                    Fecha:
                  </h3>
                  <span className="text-sm text-default-500  mt-1 block">
                    9/10/2024 - 9:30 a.m
                  </span>
                </div>
              )}
              {activeIndex === 2 && (
                <div className="flex flex-col items-start text-start">
                  <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground mt-3 mb-3">
                    Tecnicos
                  </h3>
                  <TecnicosSelect />
                </div>
              )}

              {activeIndex === 3 && (
                <div className="flex flex-col items-center ">
                  <span className="text-7xl text-success">
                    <Icon icon="material-symbols:check-circle-outline" />
                  </span>
                  <h3 className="mt-3 text-success  text-2xl font-semibold">
                    Ticket asignado correctamente
                  </h3>
                </div>
              )}
            </ScrollArea>
          </div>
          <div className="p-6 pt-4 flex justify-between">
            {activeIndex === 1 ? (
              <DialogClose asChild>
                <Button type="button" color="warning">
                  Cerrar
                </Button>
              </DialogClose>
            ) : (
              <Button type="submit" variant="outline" onClick={handlePrevSlide}>
                Atrás
              </Button>
            )}
            {activeIndex === totalSlide ? (
              <DialogClose asChild>
                <Button type="button" color="warning">
                  Cerrar
                </Button>
              </DialogClose>
            ) : (
              <Button type="submit" onClick={handleNextSlide}>
                Siguiente
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ToggleDialog;
