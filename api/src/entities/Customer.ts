export class Customer {
  constructor(
    public readonly id?: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly xCoord?: number,
    public readonly yCoord?: number
  ) {
    this.validateFields();
  }

  private validateFields(): void {
    if (!this.id || !this.name || !this.email) {
      throw new Error("Todos os campos são obrigatórios");
    }

    if (typeof this.xCoord !== "number" || typeof this.yCoord !== "number") {
      throw new Error("As coordenadas devem ser números");
    }
  }

  public calculateDistanceTo(otherCustomer: Customer): number {
    if (
      (this.xCoord !== null && typeof this.xCoord !== "number") ||
      (this.yCoord !== null && typeof this.yCoord !== "number") ||
      !otherCustomer.xCoord ||
      !otherCustomer.yCoord
    ) {
      throw new Error("As coordenadas devem ser números");
    }

    const deltaX = this.xCoord - otherCustomer.xCoord;
    const deltaY = this.yCoord - otherCustomer.yCoord;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
}
