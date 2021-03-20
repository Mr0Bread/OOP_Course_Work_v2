import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from '../admin.service';
import { getModelToken } from '@nestjs/mongoose';

const password = 'test';

const adminModelFakeFactory = () => {
  class adminModel {
	login: string;
	password: string;

    constructor(
	  {
		login,
		password
	  }
	) {
      this.login = login;
	  this.password = password;
	}

	async save() {
      if (!this.login || !this.password) {
		throw new Error('Invalid');
	  }

      return new adminModel({
		login: this.login,
		password: this.password
	  });
	}
  }

  return adminModel;
}

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule({
	  providers: [
		AdminService,
		{
		  provide: getModelToken('Admin'),
		  useFactory: adminModelFakeFactory
		}
	  ]
	}).compile();

	service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHashedPasswordMethod', () => {
    it('should be defined', () => {
	  expect(service.getHashedPassword).toBeDefined();
	});

    it('should hash given string', () => {
	  expect.assertions(1);
	  return service.getHashedPassword(password).then(res => expect(res).not.toEqual(password));
	});
  });

  describe('createAdminMethod', () => {
	it('should be defined', () => {
	  expect(service.createAdmin).toBeDefined();
	});

	it('should create admin', () => {
	  expect.assertions(3);

	  return service.createAdmin('login', password)
		.then(
		  res => {
			const { login, password: adminPass } = res;
			expect(login).toEqual('login');
			expect(adminPass).toBeDefined();
			expect(adminPass).not.toEqual(password);
		  }
		);
	});

	it('should not create admin', () => {
	  expect.assertions(1);

	  return service.createAdmin('', password)
		.then(
		  () => null,
		  (err) => {
			expect(err).toBeDefined();
		  }
		);
	});
  });

  describe('authenticate', () => {
	it('should be defined', () => {
	  expect(service.authenticate).toBeDefined();
	});
  });

});
