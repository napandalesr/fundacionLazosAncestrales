import { CreateUserDto } from "../Http/dto/createUser.dto";

export class UserRepository {
  async create (createUserDto:CreateUserDto) {
    return await createUserDto;
  }
}