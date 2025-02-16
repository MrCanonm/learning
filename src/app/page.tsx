"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return router.push("/home");
}
// pagina principal que te manda al home
// NO SE USA ESTA PAGINA
