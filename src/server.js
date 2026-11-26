import 'dotenv/config'
import app from './app.js'

const port = Number(process.env.PORT || 3000)

if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error('A porta deve ser um número entre 1024 e 65535.')
}

const server = app.listen(port, '127.0.0.1', () => {
  console.log('Servidor disponível em http://localhost:' + port)
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error('A porta ' + port + ' já está em uso. Encerre o outro servidor.')
  } else {
    console.error('Não foi possível iniciar o servidor.')
  }
  process.exitCode = 1
})
