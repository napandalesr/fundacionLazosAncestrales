import { MailService, MailDataRequired  } from "@sendgrid/mail";

export class EmailRepository {
  sgMail:MailService;
  constructor() {
    this.sgMail = new MailService();
  }
  async create () {
    this.sgMail.setApiKey("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");
    const msg:MailDataRequired  = {
      to: 'napandalesr@gmail.com', // Change to your recipient
      from: 'amanecer_96@yahoo.es', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    const response = await this.sgMail.send(msg);
    console.log(response);
    return response;
    
  }
}