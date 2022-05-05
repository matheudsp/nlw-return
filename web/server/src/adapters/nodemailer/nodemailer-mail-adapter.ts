import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cc09f50c98896e",
      pass: "25f04bf21e3568"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <teste@feedget.com> ',
            to: 'Matheus Pereira <mdsp.personal@gmail.com>',
            subject: subject,
            html: body,
        });
    
    };
}