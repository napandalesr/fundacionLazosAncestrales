import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from "../domain/services/user.service";

export class UserController {
  userService:UserService;
  constructor(){
    this.userService = new UserService()
  }
  
  async create(createUserDto:CreateUserDto){
    return await this.userService.create(createUserDto); 
  }
}