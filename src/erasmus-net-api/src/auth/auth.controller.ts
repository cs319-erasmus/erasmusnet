import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MockUser } from "src/models/mockUser.model";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() loginDto: LoginDto) {
//     // return this.authService.login(loginDto);
//   }
    @Post('login')
    public login(@Body() body: Pick<MockUser, 'email' | 'password'>) {
        return this.authService.login(body.email, body.password);
    }
    @Post('signup')
    public signup(@Body() body: Omit<MockUser, 'id'>) {
        return this.authService.signup(body);
    }
}