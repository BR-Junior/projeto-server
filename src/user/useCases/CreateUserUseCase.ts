import { IUserDTO } from './../DTO/userDTO';
import { IUserRepository } from './../repositories/IUserRepository';


export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}


    async execute({ name, email }: IUserDTO): Promise<void> {
        await this.userRepository.create({  name, email })
    }
}