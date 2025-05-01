import { sql } from './db.js'

async function test() {
  try {
    const result = await sql`SELECT current_database() AS database, current_user AS user, inet_server_addr() AS server_ip`
    console.log('Conectado ao banco:', result[0])
  } catch (error) {
    console.error('Erro na conexão:', error)
  } finally {
    process.exit()
  }
}

test()