import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { UserRepository } from './../repositories/UserRepositoryPrisma';



export const createuserFactory = () => {
    const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const createUserController = new CreateUserController(createUserUseCase)

    return createUserController
}


