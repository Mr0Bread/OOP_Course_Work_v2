import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from 'Server/modules/auth/auth.service';
import ValidateCustomerLoginPipe from 'Server/modules/auth/pipes/Customer/OnSignUp/ValidateCustomerLogin.pipe';
import ValidateCustomerPasswordPipe from 'Server/modules/auth/pipes/Customer/OnSignUp/ValidateCustomerPassword.pipe';
import ValidateCustomerLoginOnSignIn from 'Server/modules/auth/pipes/Customer/OnSignIn/ValidateCustomerLogin.pipe';
import ValidateCustomerPasswordOnSignIn from 'Server/modules/auth/pipes/Customer/OnSignIn/ValidateCustomerPassword.pipe';
import ValidateAdminLoginOnSignIn from 'Server/modules/auth/pipes/Admin/OnSignIn/ValidateLogin.pipe';
import ValidateAdminPasswordOnSignIn from 'Server/modules/auth/pipes/Admin/OnSignIn/ValidatePassword.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signinadmin')
  async signInAdmin(
    @Session() session: Record<string, any>,
    @Body('login', ValidateAdminLoginOnSignIn) login: string,
    @Body('password', ValidateAdminPasswordOnSignIn) password: string,
  ) {
    const { access_token } = await this.authService.signInAdmin(
      login,
      password,
    );
    session['access_token'] = access_token;

    return { access_token };
  }

  @Post('validateToken')
  async validateToken(@Body('accessToken') accessToken: string) {
    await this.authService.isTokenValid(accessToken);
    return { msg: 'valid' };
  }

  @Post('signin')
  async signIn(
    @Body('login', ValidateCustomerLoginOnSignIn) login: string,
    @Body('password', ValidateCustomerPasswordOnSignIn) password: string,
    @Session() session: Record<string, any>,
  ) {
    const { access_token } = await this.authService.signInCustomer(
      login,
      password,
    );
    session['access_token'] = access_token;

    return { access_token };
  }

  @Post('signup')
  async signUp(
    @Body('login', ValidateCustomerLoginPipe) login: string,
    @Body('password', ValidateCustomerPasswordPipe) password: string,
    @Session() session: Record<string, any>,
  ) {
    const { access_token } = await this.authService.signUpCustomer(
      login,
      password,
    );
    session['access_token'] = access_token;

    return { access_token };
  }
}
