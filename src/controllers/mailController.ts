import { FastifyRequest, FastifyReply } from 'fastify';
import { EmailRequest } from '../@types/types';

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const { HOST, PORT, USER, PASS, TO_EMAIL } = process.env;

export const sendEmail = async (req: FastifyRequest<{ Body: EmailRequest }>, res: FastifyReply) => {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: HOST,
        port: PORT,
        auth: {
            user: USER,
            pass: PASS
        }
    });

    const mailOptions = {
        from: email,
        to: TO_EMAIL, 
        subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Mensagem enviada com sucesso!");
    } catch (err) {
        res.status(500).send("Erro ao enviar email.");
    }
}