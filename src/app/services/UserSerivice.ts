export class UserService {
  private readonly users: { id: number; name: string; email: string }[] = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" },
  ];

  getUsers() {
    return this.users;
  }

  getUserByName(name: string) {
    return this.users.find((user) => user.name === name);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
// clases para los servicios
