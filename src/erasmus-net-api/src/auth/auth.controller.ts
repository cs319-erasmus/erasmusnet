import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

//   @Post('login')
//   async login(@Body() loginDto: LoginDto) {
//     // return this.authService.login(loginDto);
//   }
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
    @Post('login')
    login() {
        return this.authService.login();
    }


}