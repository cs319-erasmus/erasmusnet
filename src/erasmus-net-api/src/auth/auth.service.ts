import { Injectable } from "@nestjs/common";
import { FirebaseService } from "src/firebase/firebase.service";

@Injectable({})
export class AuthService{
    constructor(private fireBaseService: FirebaseService){}
    login(){
        return "login";
    }
    signup(){
        return "signup";
    }
}