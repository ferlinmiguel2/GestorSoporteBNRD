import { BuildingIcon, User } from "lucide-react";
import { DashBoard, Files, Graph, Messages } from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "Panel",
      icon: DashBoard,
      child: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: Graph
        }
      ]
    },
    {
      title: "Ticket",
      icon: Files,
      child: [
        //Aquí pronto voy a agregar la pantalla de creación de reportes
        {
          title: "Reportes",
          icon: Messages,
          href: "/#"
        },
        {
          title: "Crear Ticket",
          icon: Files,
          href: "/create-invoice"
        }
      ]
    },
    {
      title: "Usuarios",
      icon: User,
      child: [
        {
          title: "Gestionar Usuarios",
          icon: User,
          href: "/gestionar-usuarios"
        },
        {
          title: "Agregar Usuarios",
          icon: User,
          href: "/agregar-usuario"
        }
      ]
    },

    {
      title: "Departamentos",
      icon: BuildingIcon,
      child: [
        //Agregar aquí el crud de departamentos
        {
          title: "Gestionar departamentos",
          icon: User,
          href: "/gestionar-departamentos"
        }
      ]
    }
  ],
  sidebarNav: {
    modern: [
      {
        title: "Panel",
        icon: DashBoard,
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph
          }
        ]
      },
      {
        title: "Ticket",
        icon: Files,
        child: [
          //Aquí pronto voy a agregar la pantalla de creación de reportes
          {
            title: "Reportes",
            icon: Messages,
            href: "/#"
          },
          {
            title: "Crear Ticket",
            icon: Files,
            href: "/create-invoice"
          }
        ]
      },
      {
        title: "Usuarios",
        icon: User,
        child: [
          {
            title: "Gestionar Usuarios",
            icon: User,
            href: "/gestionar-usuarios"
          },
          {
            title: "Agregar Usuarios",
            icon: User,
            href: "/agregar-usuario"
          }
        ]
      },

      {
        title: "Departamentos",
        icon: BuildingIcon,
        child: [
          //Agregar aquí el crud de departamentos
          {
            title: "Gestionar departamentos",
            icon: User,
            href: "/gestionar-departamentos"
          }
        ]
      }
    ],
    classic: [
      {
        isHeader: true,
        title: "menu"
      },
      {
        title: "Panel",
        icon: DashBoard,
        href: "/dashboard",
        isOpen: false,
        isHide: false,
        child: [
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Graph
          }
        ]
      },
      {
        title: "Ticket",
        icon: Files,
        child: [
          //Aquí pronto voy a agregar la pantalla de creación de reportes
          {
            title: "Reportes",
            icon: Messages,
            href: "/#"
          },
          {
            title: "Crear Ticket",
            icon: Files,
            href: "/create-invoice"
          }
        ]
      },
      {
        title: "Usuarios",
        icon: User,
        child: [
          {
            title: "Gestionar Usuarios",
            icon: User,
            href: "/gestionar-usuarios"
          },
          {
            title: "Agregar Usuarios",
            icon: User,
            href: "/agregar-usuario"
          }
        ]
      },

      {
        title: "Departamentos",
        icon: BuildingIcon,
        child: [
          //Agregar aquí el crud de departamentos
          {
            title: "Gestionar departamentos",
            icon: User,
            href: "/gestionar-departamentos"
          }
        ]
      }
    ]
  }
};
