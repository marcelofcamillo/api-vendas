import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from './CreateCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let createCustomerService: CreateCustomerService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    createCustomerService = new CreateCustomerService(fakeCustomersRepository);
  });

  it('Should be able to create a new customer', async () => {
    const customer = await createCustomerService.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('Should not be able to create two customers with the same email', async () => {
    await createCustomerService.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
    });

    expect(
      createCustomerService.execute({
        name: 'Marcelo Camillo',
        email: 'marcelo@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
