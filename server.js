import { fastify } from 'fastify'
//import {DatabaseMemory} from './database-memory.js'

import {DatabasePostgres} from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory()

const database = new DatabasePostgres()

server.post('/videos',  async (request, reply) => {
    const {title, description, duration} =   request.body //isso permite que o usuário envie um JSON no corpo da requisição, e o Fastify vai fazer o parse desse JSON automaticamente
    

   await database.create({  
        title,
        description,
        duration,
    })  

    const videos = await database.list()  // chama sem parâmetro
    console.log(videos)
    return reply.status(201).send()


    //console.log(database.list(search)) 
    //return reply.status(201).send()//isso vai imprimir no console o que está armazenado no banco de dados
})

server.get('/videos',  async (request, reply) => {
    const { search } = request.query
    console.log(search) //isso vai imprimir no console o que está armazenado no banco de dados
    const videos = await database.list(search) 
    return videos//isso vai imprimir no console o que está armazenado no banco de dados
})  


server.put('/videos/:id',  async(request,reply) => { //precisa do id passado pelo route parameter, pois se trata de um video específico
    const videoID = request.params.id 
    const {title, description, duration} =  request.body
    await database.update(videoID ,{
        
        title,
        description,
        duration,
        

    })

    return reply.status(204).send()
})   
 

server.delete('/videos/:id', async (request,reply) => { //precisa do id passado pelo route parameter
    const videoID = request.params.id
    await database.delete(videoID) //isso vai imprimir no console o que está armazenado no banco de dados
    return reply.status(204).send()//isso vai imprimir no console o que está armazenado no banco de dados
})  
 

server.listen({
    port: 3333,
})