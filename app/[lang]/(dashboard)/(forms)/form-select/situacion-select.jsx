"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
const SituacionSelect = () => {
  return (
    <>
      <Label className="mb-3 font-medium">Tipo de situación:</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Seleccione el tipo de situación" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pc">PC</SelectItem>
          <SelectItem value="telefono">Teléfono</SelectItem>
          <SelectItem value="impresora">Impresora</SelectItem>
          <SelectItem value="red">Red</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default SituacionSelect;
