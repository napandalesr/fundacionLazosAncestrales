import { UserModel } from './../models/user.model';
import { UserRepository } from './../../repositories/user.respository';

export class UserService {
  userRepository:UserRepository;
  constructor(){
    this.userRepository = new UserRepository();
  }
  async create(userModel:UserModel){
    return await userModel;
  }
}