import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';
import UserRepository from '../infra/typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
    avatar,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userExists = await usersRepository.findByEmail(email);

    if (userExists && email !== user.email) {
      throw new AppError('There is already one user with this email');
    }

    const hashedPassword = await hash(password, 8);

    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.avatar = avatar;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
