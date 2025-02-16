import { UserService } from "@/app/services/UserSerivice";

export default function AppUser() {
  const userSerivce = new UserService();
  const users = userSerivce.getUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Este es el appUser</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Ejemplo de una ruta con camel case
