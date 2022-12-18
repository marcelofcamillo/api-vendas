import 'reflect-metadata';
import FakeUsersRepository from '@modules/users/domain/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateSessionsService from './CreateSessionsService';

let fakeUsersRepository: FakeUsersRepository;
let createSessionService: CreateSessionsService;
let fakeHashProvider: FakeHashProvider;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createSessionService = new CreateSessionsService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('Should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Marcelo Camillo',
      email: 'teste@teste.com',
      password: '123456',
    });

    const response = await createSessionService.execute({
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('Should not be able to authenticate with non existent user', async () => {
    expect(
      createSessionService.execute({
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Marcelo Camillo',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(
      createSessionService.execute({
        email: 'teste@teste.com',
        password: '567890',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
