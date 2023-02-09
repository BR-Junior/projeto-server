import { v4 as uuid } from 'uuid'

export class User {
    public readonly id?: string | null
    public name: string
    public email: string

    constructor(name: string, email: string, id?: string) {
        
        this.id = id || uuid()
        this.name = name
        this.email = email
    }
}