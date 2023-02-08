import { IUserDTO } from './../DTO/userDTO';


export interface IUserRepository {
    create(data: IUserDTO): Promise<void>
    update(id: string): Promise<IUserDTO>
    findOne(id: string): Promise<IUserDTO>
    findAll(): Promise<IUserDTO[]>
    remove?(id: string): Promise<void>
}