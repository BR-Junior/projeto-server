import { IUserDTO } from '../DTO/userDTO';
import { IUserRepository } from './IUserRepository';
import prismaClient from '../../../prisma/prismaClient' 


export class UserRepository implements IUserRepository {
    async create({ email, name }: IUserDTO): Promise<void> {
        await prismaClient.user.create({
            data: {
                email,
                name
            }
        })

       
    }


    update(id: string): Promise<IUserDTO> {
        throw new Error('Não foi possivel atualizar o usuario.');
    }


    findOne(id: string): Promise<IUserDTO> {
        throw new Error('Não foi possivel achar o usuario.');
    }


    findAll(): Promise<IUserDTO[]> {
        throw new Error('Não foi possivel achar os usuarios.');
    }


    remove(id: string): Promise<void> {
        throw new Error('Não foi possivel excluir o usuario.');
    }
    
}