"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
const TecnicosSelect = () => {
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Seleccione el técnico encargado" />
        </SelectTrigger>
        <SelectContent className="z-[9999]">
          <SelectItem value="1">Isabella Garcia</SelectItem>
          <SelectItem value="2">Liam Davis</SelectItem>
          <SelectItem value="3">Sophia Gonzalez</SelectItem>
          <SelectItem value="4">Charlotte Rodriguez</SelectItem>
          <SelectItem value="5">Sophia Gonzalez</SelectItem>
          <SelectItem value="6">Charlotte Rodriguez</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default TecnicosSelect;
