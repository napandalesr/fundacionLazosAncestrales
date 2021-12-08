import { EmailService } from "../../backend/domain/services/email.service";

export class EmailRepository {
  emailService: EmailService;

  constructor(){
    this.emailService = new EmailService();
  }

  async send () {
    return await this.emailService.create();
  }
}