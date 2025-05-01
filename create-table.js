import { sql } from './db.js'


sql`CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INT
);`.then(()=> {
    console.log('Tabela "videos" criada com sucesso!')
}) // Cria a tabela "videos" com as colunas especificadas   