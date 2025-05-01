import { randomUUID } from 'node:crypto' //importa a função randomUUID do módulo crypto do Node.js, que gera um UUID (Identificador Único Universal) aleatório

export class DatabaseMemory {
     #videos = new Map()

     list(search){
        return Array.from (this.#videos.entries()).map((videoArray) => {
         const id = videoArray[0]
         const data = videoArray[1]

         return {
            id,
            ...data, //isso vai espalhar os dados do video, ou seja, vai colocar todos os dados do video dentro do objeto,
         }
      })
      .filter(video => {
         if (search) {
            return this.#videos.title.includes(search) 
         }
         return true
      }) //retorna os valores do Map, ou seja, os vídeos armazenados
     }
    // Set é semelhante a um array, mas não aceita valores duplicados
    // Map é semelhante a um objeto, mas ele tem uma API mais rica e aceita qualquer tipo de dado como chave
     create(video) {
        const videoID = randomUUID() //isso gera um id único para cada video, o id é gerado automaticamente

        this.#videos.set(videoID, video)
     }
     update(id, video) {
        this.#videos.set(id, video)

     }

     delete(id) {
        this.#videos.delete(id)

     }
}