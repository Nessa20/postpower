import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class createUserDto {
    @IsString()
    @IsNotEmpty()

    public name: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsString()
    public password: string;
}