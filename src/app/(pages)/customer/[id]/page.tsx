import { CustomerService } from "@/app/services/Customer";
import NoFound from "../../nofound/page";

export default function CustomerPage({ params }: { params: { id: string } }) {
  const customerSerivce = new CustomerService();
  const customers = customerSerivce.getCustomerById(+params.id);

  if (!customers) {
    return NoFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Este es el customer</h1>
      <p>Id: {customers?.id}</p>
    </div>
  );
}
