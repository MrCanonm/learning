export class CustomerService {
  private readonly customers: { id: number; name: string; email: string }[] = [
    { id: 1, name: "Customer 1", email: "customer1@example.com" },
    { id: 2, name: "Customer 2", email: "customer2@example.com" },
    { id: 3, name: "Customer 3", email: "customer3@example.com" },
    { id: 4, name: "Customer 4", email: "customer3@example.com" },
  ];

  getCustomers() {
    return this.customers;
  }

  getCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }
}
// clases para los servicios
