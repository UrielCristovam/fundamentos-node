import { sql } from './db.js'

export class DatabaseNeon {
  async create({ title, description, duration }) {
    await sql`
      INSERT INTO videos (title, description, duration)
      VALUES (${title}, ${description}, ${duration})
    `
  }

  async list() {
    return await sql`SELECT * FROM videos`
  }

  // Outros métodos: update, delete...
}