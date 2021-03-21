import { Injectable } from '@nestjs/common';
import { AdminService } from 'Server/modules/admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'Server/modules/customer/customer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
    private readonly customerService: CustomerService,
  ) {}

  async signInAdmin(login: string, password: string) {
    await this.adminService.authenticate(login, password);

    return {
      access_token: this.jwtService.sign({
        login,
        password,
        rand: Date.now().toLocaleString(),
      }),
    };
  }

  async isTokenValid(accessToken: string): Promise<boolean> {
    try {
      this.jwtService.verify(accessToken);
      return true;
    } catch (e) {
      return false;
    }
  }

  private generateJwtToken(login, password) {
    return {
      access_token: this.jwtService.sign({
        login,
        password,
        rand: Date.now().toLocaleString(),
      }),
    };
  }

  async signInCustomer(login: string, password: string) {
    await this.customerService.authenticate(login, password);

    return this.generateJwtToken(login, password);
  }

  async signUpCustomer(login: string, password: string) {
    await this.customerService.createCustomer(login, password);

    return this.generateJwtToken(login, password);
  }
}
