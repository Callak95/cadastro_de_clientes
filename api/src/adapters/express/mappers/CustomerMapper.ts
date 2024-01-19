import { CreateCustomerInput } from "../../../appication/dtos/CreateCustomerInput";
import { CustomerOutput } from "../../../appication/dtos/CustomerOutput";
import { Customer } from "../../../entities/Customer";
import { CustomerData } from "../../../entities/CustomerData";

export class CustomerMapper {
  static toEntity(data: CustomerData): Customer {
    return new Customer(
      data.id,
      data.name,
      data.email,
      data.xCoord,
      data.yCoord
    );
  }

  static toData(entity: Customer): CustomerData {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      xCoord: entity.xCoord,
      yCoord: entity.yCoord,
    };
  }

  static toDTO(entity: Customer): CustomerOutput {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      xCoord: entity.xCoord,
      yCoord: entity.yCoord,
    };
  }

  static toCreateCustomerInput(requestBody: {
    id?: string;
    name?: string;
    email?: string;
    xCoord?: number;
    yCoord?: number;
  }): CreateCustomerInput {
    const { id, name, email, xCoord, yCoord } = requestBody;
    return { id, name, email, xCoord, yCoord };
  }
}
