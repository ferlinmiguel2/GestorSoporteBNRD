"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/images/logo/logo-1.png";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "@/hooks/use-media-query";

const schema = z.object({
  userName: z
    .string()
    .min(4, {
      message: "El nombre de usuario debe tener al menos 8 caracteres."
    })
    .max(20, {
      message: "El nombre de usuario no puede exceder 20 caracteres."
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message:
        "El nombre de usuario solo puede contener letras, números y guiones bajos."
    }),
  identificacion: z
    .string()
    .min(4, {
      message: "La contraseña debe contar al menos con 8 caracteres."
    })
    .max(20, {
      message: "El nombre de usuario no puede exceder 20 caracteres."
    })
});
const LogInForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all"
  });
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    startTransition(async () => {
      let response = await signIn("credentials", {
        userName: data.userName,
        identificacion: data.identificacion,
        redirect: false
      });
      if (response?.ok) {
        toast.success("Inicio de Sesión Satisfactorio");
        window.location.assign("/dashboard");
        reset();
      } else if (response?.error) {
        toast.error(response?.error);
      }
    });
  };
  return (
    <div className="w-full py-5 lg:py-10">
      <Image src={logo} className="inline-block" />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 xl:mt-7">
        <div className="relative">
          <Label
            htmlFor="username"
            className="mb-2 font-medium text-default-600"
          >
            Usuario{" "}
          </Label>
          <Input
            disabled={isPending}
            {...register("userName")}
            type="text"
            id="userName"
            className={cn("", {
              "border-destructive": errors.userName
            })}
            size={!isDesktop2xl ? "xl" : "lg"}
          />
        </div>
        {errors.userName && (
          <div className=" text-destructive mt-2">
            {errors.userName.message}
          </div>
        )}

        <div className="mt-3.5">
          <Label
            htmlFor="password"
            className="mb-2 font-medium text-default-600"
          >
            {" "}
            Identificacion{" "}
          </Label>
          <div className="relative">
            <Input
              disabled={isPending}
              {...register("identificacion")}
              type={passwordType}
              name="identificacion"
              id="identificacion"
              className="peer "
              size={!isDesktop2xl ? "xl" : "lg"}
              placeholder=" "
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>
        </div>
        {errors.identificacion && (
          <div className=" text-destructive mt-2">
            {errors.identificacion.message}
          </div>
        )}
        <Button
          className="w-full my-10"
          disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Cargando..." : "Iniciar Sesión"}
        </Button>
      </form>
      {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full  border-default-300 hover:bg-transparent"
          disabled={isPending}
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard"
            })
          }
        >
          <Image src={googleIcon} alt="google" className="w-5 h-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full  border-default-300 hover:bg-transparent"
          disabled={isPending}
          onClick={() =>
            signIn("github", {
              callbackUrl: "/dashboard",
              redirect: false
            })
          }
        >
          <Image src={GithubIcon} alt="google" className="w-5 h-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full  border-default-300 hover:bg-transparent"
        >
          <Image src={facebook} alt="google" className="w-5 h-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="rounded-full  border-default-300 hover:bg-transparent"
                      href={ig}
        >
          <Image
            src={instagram}
            alt="instagram"
            className="w-5 h-5"

          />
        </Button>
      </div> */}
    </div>
  );
};

export default LogInForm;
