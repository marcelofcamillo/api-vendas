import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from './CreateCustomerService';

describe('CreateCustomer', () => {
  it('Should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('Should not be able to create two customers with the same email', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    await createCustomer.execute({
      name: 'Marcelo Camillo',
      email: 'marcelo@mail.com',
    });

    expect(
      createCustomer.execute({
        name: 'Marcelo Camillo',
        email: 'marcelo@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
