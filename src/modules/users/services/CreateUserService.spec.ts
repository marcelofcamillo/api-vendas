import 'reflect-metadata';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '@modules/users/domain/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService;
let fakeHashProvider: FakeHashProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('Should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create two users with the same email', async () => {
    await createUserService.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'Marcelo Camillo',
        email: 'marcelo@mail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
