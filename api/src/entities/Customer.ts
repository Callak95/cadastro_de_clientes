import { UUID } from "crypto";
import { v4 as uuid4, validate } from "uuid";

export class Customer {
  constructor(
    public readonly id?: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly phone?: string,
    public readonly xcoord?: number,
    public readonly ycoord?: number
  ) {
    this.id = validate(id as UUID) ? id : uuid4();
    this.validateFields();
  }

  private validateFields(): void {
    if (!this.name || !this.email || !this.phone) {
      throw new Error("Todos os campos são obrigatórios");
    }

    if (typeof this.xcoord !== "number" || typeof this.ycoord !== "number") {
      throw new Error("As coordenadas devem ser números");
    }
  }

  public calculateDistanceTo(otherCustomer: Customer): number {
    if (
      (this.xcoord !== null && typeof this.xcoord !== "number") ||
      (this.ycoord !== null && typeof this.ycoord !== "number") ||
      !otherCustomer.xcoord ||
      !otherCustomer.ycoord
    ) {
      throw new Error("As coordenadas devem ser números");
    }

    const deltaX = this.xcoord - otherCustomer.xcoord;
    const deltaY = this.ycoord - otherCustomer.ycoord;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
}
