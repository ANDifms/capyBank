
export class Cliente {
    constructor (id, nome, cpf, email, telefone, senha) {
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.senha = senha
    }
}

export async function getUserData() {

    async function getUser() {
        
        const response = await fetch('http://localhost:8080/api/user')
        const database = await response.json()

        for (const user of database) {
            return new Cliente(user.id, user.nome, user.cpf, user.email, user.telefone, user.senha)
        }
    }

    const userData = await getUser()
    return userData
}


