export class ProductosService {
  private readonly productos: { id: number; name: string; email: string }[] = [
    { id: 1, name: "productos 1", email: "productos@example.com" },
    { id: 2, name: "productos 2", email: "productos@example.com" },
    { id: 3, name: "productos 3", email: "productos@example.com" },
  ];

  getProductos() {
    return this.productos;
  }

  getProductosById(id: number) {
    return this.productos.find((productos) => productos.id === id);
  }
}
// clases para los servicios
