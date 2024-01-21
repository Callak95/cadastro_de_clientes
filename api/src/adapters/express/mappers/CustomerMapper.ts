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
      data.phone,
      data.xcoord,
      data.ycoord
    );
  }

  static toData(entity: Customer): CustomerData {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      xcoord: entity.xcoord,
      ycoord: entity.ycoord,
    };
  }

  static toDTO(entity: Customer): CustomerOutput {
    return {...entity};
  }

  static toCreateCustomerInput(requestBody: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    xcoord?: number;
    ycoord?: number;
  }): CreateCustomerInput {
    const { id, name, email, phone, xcoord, ycoord } = requestBody;
    return { id, name, email, phone, xcoord, ycoord };
  }
}
