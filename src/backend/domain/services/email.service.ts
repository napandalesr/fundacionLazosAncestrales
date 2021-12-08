import { EmailRepository } from './../../repositories/email.repository';

export class EmailService {
  emailRepository: EmailRepository;

  constructor(){
    this.emailRepository = new EmailRepository();
  }
  async create(){
    return await this.emailRepository.create();
  }
}