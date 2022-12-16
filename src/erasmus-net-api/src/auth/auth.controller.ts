import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDTO } from "src/user/dto/user.dto";
import { User } from "src/models/user.model";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
    @Post('signup')
    public signup(
        @Body('name') name: string, 
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('role') role: string
    ) {
        return this.authService.signup(name, password, email, role);
    }
}