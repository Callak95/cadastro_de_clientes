import { CreateCustomerInput } from "../../../application/dtos/CreateCustomerInput";
import { CustomerOutput } from "../../../application/dtos/CustomerOutput";
import { Customer } from "../../../entities/Customer";
import { CustomerData } from "../../../entities/CustomerData";

export class CustomerMapper {
  static toEntity(data: CustomerData): Customer {
    return new Customer(
      data.id,
      data.name,
      data.email,
      data.xcoord,
      data.ycoord
    );
  }

  static toData(entity: Customer): CustomerData {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      xcoord: entity.xcoord,
      ycoord: entity.ycoord,
    };
  }

  static toDTO(entity: Customer): CustomerOutput {
    return { ...entity };
  }

  static toCreateCustomerInput(requestBody: {
    id?: string;
    name?: string;
    email?: string;
    xcoord?: number;
    ycoord?: number;
  }): CreateCustomerInput {
    const { id, name, email, xcoord, ycoord } = requestBody;
    return { id, name, email, xcoord, ycoord };
  }
}
