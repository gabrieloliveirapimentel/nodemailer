import Fastify from 'fastify'
import { sendEmail } from './controllers/mailController'

const server = Fastify()
const fastifyCors = require('@fastify/cors');

server.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST'],
  });
server.post('/send', sendEmail);

function startServer() {
    const PORT = 3003
    try {
        server.listen({
            port: PORT
        })
        console.log(`Server running at http://localhost:${PORT}`)
    } catch (error) {
        console.log(`Error starting server: ${error}`)
    }
}

startServer()