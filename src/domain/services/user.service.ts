import { UserRepository } from "../../infrastructure/Repositories/user.repository";

export class UserService {
  userRepository:UserRepository;
  constructor(){
    this.userRepository = new UserRepository()
  }
  async create(){}
}