import { UserService } from "@/app/services/UserSerivice";
import NoFound from "../../nofound/page";

export default function UserPage({ params }: { params: { name: string } }) {
  const userSerivce = new UserService();

  const users = userSerivce.getUserByName(params.name);

  if (!users) {
    return NoFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Este es el user: {users.name}</h1>
      <p>Id: {users.id}</p>
    </div>
  );
}

// Ejemplo de una ruta recibiendo un parametro
