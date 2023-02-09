import { UserRepository } from './../repositories/UserRepositoryPrisma';
import { IUserDTO } from './../DTO/userDTO';
import { Request, Response } from "express";
import { CreateUserUseCase } from './CreateUserUseCase';



const factory = () => {
    const userRepository = new UserRepository()
    const useCase = new CreateUserUseCase(userRepository)

    return useCase
}

 export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}


    async execute (req: Request, res: Response): Promise<Response> {
        //console.log(typeof req.body)
        try {
        const {name, email } = req.body
                
        await factory().execute({name, email})
        
        return res.status(201).json({ message: 'Usuario criado com sucesso!' })
        } catch (error) {
            return res.status(400).json({ message: 'O usuario não pode ser criado!' })
        }
        
        
    }
 }