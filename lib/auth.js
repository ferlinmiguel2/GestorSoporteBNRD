import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import fs from "fs";
import https from "https";

// Lee el certificado desde el archivo
const cert = fs.readFileSync("./certs/cert.pem");
const apiURL = "https://localhost:7180/api/account/login";

https.globalAgent.options.ca = cert;

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        userName: { label: "Username", type: "text" },
        identificacion: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.userName || !credentials?.identificacion) {
          throw new Error("Pérdida de credenciales");
        }

        try {
          const response = await axios.post(apiURL, {
            userName: credentials.userName,
            identificacion: credentials.identificacion
          });

          const user = response.data;

          if (!user) {
            throw new Error("Datos erróneos. ");
          }

          console.log("Usuario autenticado:", user);

          // Mapear los datos a los nombres que necesito en los callbacks
          return {
            userName: credentials.userName, // Desde las credenciales
            role: user.idRol, // Usando idRol del API
            nombre: user.nombre,
            cargo: user.cargo
          };
        } catch (error) {
          console.error("Login error:", error);
          throw new Error(
            error.response?.data?.message ||
              "Fallo al iniciar sesión. Por favor, intente de nuevo."
          );
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(`El usuario ${user.userName} inició sesión correctamente.`);
      return !!user;
    },

    async jwt({ token, user }) {
      if (user) {
        token.userName = user.userName;
        token.role = user.role;
        token.nombre = user.nombre;
        token.cargo = user.cargo;
      }
      console.log("JWT token generated:", token);
      return token;
    },

    async session({ session, token }) {
      session.user = {
        userName: token.userName,
        role: token.role,
        nombre: token.nombre,
        cargo: token.cargo
      };
      console.log("Session created:", session);
      return session;
    }
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 días
  },
  jwt: {
    secret: process.env.AUTH_SECRET,
    encryption: true
  },
  debug: process.env.NODE_ENV !== "production"
};
